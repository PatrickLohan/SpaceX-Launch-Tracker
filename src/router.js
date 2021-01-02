import Vue from 'vue';
import Router from 'vue-router';

import NextLaunch from '@/views/NextLaunch';
//import FutureLaunches from '@/views/FutureLaunches';
//import PastLaunches from '@/views/PastLaunches';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'nextLaunch',
      component: NextLaunch,
      props: true
    },
    // {
    //   path: '/futureLaunches',
    //   name: 'futureLaunches',
    //   component: FutureLaunches,
    //   props: true
    // },
    // {
    //   path: '/pastLaunches',
    //   name: 'pastLaunches',
    //   component: PastLaunches,
    //   props: true
    // }
  ]
})
