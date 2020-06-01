import Vue from 'vue';
import Vuex from 'vuex';

import Occupations from '@/data/occupations.js';
import Stocks from '@/data/stocks.js';
import {
  FINANCIAL_FREEDOM_MODE,
  MAX_LOAN_PER_STAR,
  LOAN_INTEREST_PER_MILLION,
  EXPENSE_PER_CHILD,
  HAS_CHILD_LIMIT,
  CHILD_LIMIT,
  INCOME_INCREASE_WHEN_CHILD_ADDED,
} from '@/data/parameters.js';

const MILLION = 100000;

Vue.use(Vuex);

const setValue = (key, value) => {
  localStorage.setItem(key, value);
};
const getValue = (key, defaultValue = null, parseJSON = false) => {
  const value = localStorage.getItem(key);

  if (value === null) return defaultValue;

  return parseJSON ? JSON.parse(value) : value;
};

export default new Vuex.Store({
  state: {
    gameConfig: {
      FREE_CONDITION: getValue(
        'FREE_CONDITION',
        FINANCIAL_FREEDOM_MODE.GREATER,
      ),
      FREE_CONDITION_META: getValue('FREE_CONDITION_META', 0),
      HAS_CHILD_LIMIT: getValue('HAS_CHILD_LIMIT', HAS_CHILD_LIMIT),
      CHILD_LIMIT: getValue('CHILD_LIMIT', CHILD_LIMIT),
      INCOME_INCREASE_WHEN_CHILD_ADDED: getValue(
        'INCOME_INCREASE_WHEN_CHILD_ADDED',
        INCOME_INCREASE_WHEN_CHILD_ADDED,
      ),
    },
    // 玩家名稱
    playerName: getValue('playerName', ''),
    // 玩家職業
    playerOccupation: getValue(
      'playerOccupation',
      {
        // 職業名稱（中文）
        nameZh: '',
        // 職業名稱（英文）
        nameEn: '',
        // 星等（1~3）
        starLevel: 1,
        // 工作收入
        workIncome: 0,
        // 生活總開銷
        initialExpense: 0,
        // 每生一個小孩所增加支出
        expenseIncreasePerChild: 0,
        // 起始儲蓄
        initialSavings: 0,
        // 是特殊職業卡（有角色技能）
        isSpecial: false,

        meta: {
          iconType: '',
          icon: '',
        },
      },
      true,
    ),
    // 工作收入
    currentWorkIncome: getValue('currentWorkIncome', 0),
    // 有保險
    hasInsurance: getValue('hasInsurance', false),
    // 小孩數量
    childAmount: getValue('childAmount', 0),
    // 目前貸款金額
    currentLoanAmount: getValue('currentLoanAmount', 0),
    // 總儲蓄
    totalSaving: getValue('totalSaving', 0),
    // 股票
    stockInventory: [],
  },
  getters: {
    Occupations: () => {
      return Occupations.map(occupation => occupation);
    },
    Stocks: () => {
      return Stocks.map(stock => stock);
    },
    StocksById: () => {
      return Stocks.reduce((prev, curr) => {
        prev[curr.id] = curr;
        return prev;
      }, {});
    },

    // childLimit:

    // 最高貸款額度
    loanLimit: state => {
      return MAX_LOAN_PER_STAR * state.playerOccupation.starLevel;
    },
    // 最高貸款額度（百萬）
    loanLimitMillion: state => {
      return (MAX_LOAN_PER_STAR * state.playerOccupation.starLevel) / MILLION;
    },

    // =========================================================================
    // 收入

    // TODO: 股票收入
    stockIncome: state => {
      return 0;
    },

    // TODO: 房地產收入
    estateIncome: state => {
      return 0;
    },

    // TODO: 生意收入
    businessIncome: state => {
      return 0;
    },

    // 持續性收入
    continuousIncome: (_, getters) => {
      return (
        getters.stockIncome + getters.estateIncome + getters.businessIncome
      );
    },
    // 總收入
    totalIncome: (state, getters) => {
      return state.currentWorkIncome + getters.continuousIncome;
    },

    // =========================================================================
    // 支出

    // 銀行貸款
    loanExpense: state => {
      return (state.currentLoanAmount / MILLION) * LOAN_INTEREST_PER_MILLION;
    },
    // // 孩子數量
    // childAmount: state => {
    //   return state.children.length;
    // },
    // 養兒支出
    childExpense: state => {
      return state.childAmount * state.playerOccupation.expenseIncreasePerChild;
    },
    // 總支出
    totalExpense: (state, getters) => {
      return (
        state.playerOccupation.initialExpense +
        state.loanExpense +
        getters.childExpense
      );
    },

    // =========================================================================
    // 月現金流

    // 月現金流 = 總收入 - 總支出
    monthlyCashFlow: (_, getters) => {
      return getters.totalIncome - getters.totalExpense;
    },
    // 財富自由距離 = 持續性收入 - 總支出差距
    financialFreedomGap: (_, getters) => {
      return getters.continuousIncome - getters.totalExpense;
    },
    // 是否財富自由
    isFinancialFreedom: (_, getters) => {
      // TODO: 判斷 FINANCIAL_FREEDOM_MODE
      return getters.financialFreedomGap > 0;
    },
  },
  mutations: {
    _setPlayerName(state, playerName) {
      state.playerName = playerName;
      setValue('playerName', state.playerName);
    },
    _setPlayerOccupation(state, occupation) {
      state.playerOccupation = {
        ...occupation,
        expenseIncreasePerChild: EXPENSE_PER_CHILD[occupation.starLevel],
      };
      setValue('playerOccupation', JSON.stringify(state.playerOccupation));
    },
    _setWorkIncome(state, amount) {
      state.currentWorkIncome = amount;
      setValue('currentWorkIncome', state.currentWorkIncome);
    },
    _increaseWorkIncome(state, amount) {
      state.currentWorkIncome += amount;
      setValue('currentWorkIncome', state.currentWorkIncome);
    },
    _setTotalSavings(state, amount) {
      state.totalSaving = amount;
      setValue('currentWorkIncome', state.totalSaving);
    },
    _increaseTotalSavings(state, amount) {
      state.totalSaving += amount;
      setValue('totalSaving', state.totalSaving);
    },
    _setInsurance(state, value) {
      state.hasInsurance = value;
      setValue('hasInsurance', state.hasInsurance);
    },
    _increaseChildAmount(state) {
      state.childAmount += 1;
      setValue('childAmount', state.childAmount);
    },
    _setCurrentLoanAmount(state, amount) {
      state.currentLoanAmount = amount;
      setValue('currentLoanAmount', amount);
    },
    _appendStock(state, stock) {
      state.stockInventory.push(stock);
      setValue('stockInventory', state.stockInventory);
    }
  },
  actions: {
    // 開始遊戲
    startGame({ commit }, { playerName, occupation }) {
      return new Promise(resolve => {
        // 設定玩家名稱
        commit('_setPlayerName', playerName);
        // 設定玩家職業
        commit('_setPlayerOccupation', occupation);
        // 設定起始工作收入
        commit('_setWorkIncome', occupation.workIncome);
        // 設定起始儲蓄
        commit('_setTotalSavings', occupation.initialSavings);

        resolve();
      });
    },

    // 更改保險狀態
    toggleInsurance({ commit }, value) {
      return new Promise(resolve => {
        commit('_setInsurance', value);
        resolve();
      });
    },

    // =========================================================================
    // 收入

    buyStock({ commit }, { id, price, amount }) {
      commit('_appendStock', { id, price, amount });
    },

    // =========================================================================
    // 支出

    // 生孩子
    giveBirth({ commit, state, getters }) {
      return new Promise((resolve, reject) => {
        if (
          state.gameConfig.HAS_CHILD_LIMIT &&
          getters.childAmount < CHILD_LIMIT
        ) {
          commit('_increaseChildAmount');
          resolve();
        } else {
          reject(new Error(`超過養兒數量限制，每人最多生 ${CHILD_LIMIT} 胎`));
        }
      });
    },

    /**
     * 貸／還款
     * @param {Number} amount 金額（以 100 為單位）
     */
    changeLoan({ commit, state, getters }, amount) {
      return new Promise((resolve, reject) => {
        if (state.currentLoanAmount < getters.loanLimit) {
          commit('_setCurrentLoanAmount', amount * MILLION);
          resolve();
        } else {
          reject(
            new Error(
              `貸款失敗，你的貸款額度為 ${getters.loanLimitMillion}萬元。`,
            ),
          );
        }
      });
    },
  },
});
