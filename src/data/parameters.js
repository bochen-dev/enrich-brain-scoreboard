export default {
  // 財富自由設定
  FINANCIAL_FREEDOM_MODE: {
    // 持續性收入 > 總支出
    GREATER: 1,
    // 持續性收入 > 總支出 * 百分比
    OVER_PERCENTAGE: 2,
    // 持續性收入 > 總支出 + 金額
    OVER_AMOUNT: 3,
  },

  // 養兒支出
  EXPENSE_PER_CHILD: {
    1: 7000,
    2: 10000,
    3: 15000,
  },

  // 貸款上限
  MAX_LOAN_PER_STAR: 2000000,

  // 每一百萬貸款利息
  LOAN_INTEREST_PER_MILLION: 10000,

  // 有養兒數量上限
  HAS_CHILD_LIMIT: true,

  // 養兒數量上限
  CHILD_LIMIT: 2,

  // 生小孩時收入同支出增加
  INCOME_INCREASE_WHEN_CHILD_ADDED: false,
};
