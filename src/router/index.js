import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Counter from '../components/Counter'
import Todolist from '../components/Todolist'
import Chart from '../components/Chart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist,
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
    },
  ]
})
