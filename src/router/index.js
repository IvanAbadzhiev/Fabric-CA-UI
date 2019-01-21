import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/Dashboard';
import Enroll from '@/components/Enroll';
import Register from '@/components/Register';
import Revoke from '@/components/Revoke';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },{
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/revoke',
      name: 'Revoke',
      component: Revoke
    }
  ]
});
