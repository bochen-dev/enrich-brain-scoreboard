import Vue from 'vue';
import Vuex from 'vuex';

import Occupations from '@/data/occupations.js';
import Stocks from '@/data/stocks.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game_parameters: {},
  },
  getters: {
    Occupations: () => {
      return Occupations.map(occupation => occupation);
    },
    Stocks: () => {
      return Stocks.map(stock => stock);
    },
  },
  mutations: {},
  actions: {},
});
