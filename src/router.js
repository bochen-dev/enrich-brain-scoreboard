import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

import GameBoardLayout from './layouts/GameBoardLayout.vue';
import Income from './views/partials/Income.vue';
import Expense from './views/partials/Expense.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
      ],
    },
    {
      path: '/gameboard',
      component: GameBoardLayout,
      children: [
        {
          path: 'income',
          name: 'income',
          component: Income,
        },
        {
          path: 'expense',
          name: 'expense',
          component: Expense,
        },
      ],
    },
  ],
});
