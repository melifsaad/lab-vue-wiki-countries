import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'countries',
      component: () => import(/* webpackChunkName: 'list' */ '../views/CountriesList.vue'),
      children: [
        {
          path: ':code',
          name: 'details',
          component: () => import(/* webpackChunkName: 'details' */ '../views/CountriesDetails.vue')
        },
      ]
    }
  ];
  
  const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
      document.getElementById('app').scrollIntoView();
    }
  });
  
  export default router;