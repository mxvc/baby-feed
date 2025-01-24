const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue')},
      { path: '/index', component: () => import('pages/IndexPage.vue')},
      { path: '/custom', component: () => import('pages/CustomPage.vue') },
      { path: '/chart', component: () => import('pages/ChartPage.vue') },
      { path: '/edit', component: () => import('pages/EditPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
