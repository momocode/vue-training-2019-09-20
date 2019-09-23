import Vue from 'vue'
import Router from 'vue-router'

import ParticipantsView from '@/views/Participants'
import SignInView from '@/views/SignIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignInView
    },
    {
      path: '/participants',
      name: 'Participants',
      component: ParticipantsView
    }
  ]
})
