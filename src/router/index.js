import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/home/Index.vue'
import BookDetail from '../components/book/Detail.vue'
import BookOfCategory from '../components/book/ListOfCategories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/:slug',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/category/:slug',
      name: 'BookOfCategory',
      component: BookOfCategory
    },
  ]
})
