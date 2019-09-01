import Vue from 'vue';
import Router from 'vue-router';

import UpcomingLaunches from '@/views/UpcomingLaunches';
import PastLaunches from '@/views/PastLaunches';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'upcomings',
      component: UpcomingLaunches,
      props: true
    },
    {
    path: '/past',
    name: 'past',
    component: PastLaunches,
    props: true
    }
  ]
})
