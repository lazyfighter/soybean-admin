const bookManagement: AuthRoute.Route = {
  name: 'book',
  path: '/book',
  component: 'basic',
  children: [
    {
      name: 'book_management',
      path: '/book/management',
      component: 'self',
      meta: {
        title: '书目管理',
        requiresAuth: true,
        icon: 'ic:baseline-security'
      }
    }
  ],
  meta: {
    title: '图书管理',
    icon: 'carbon:cloud-service-management',
    order: 9
  }
};

export default bookManagement;
