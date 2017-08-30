import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Ipage = ((resolve) => {
  import('components/ipage/ipage').then((ipage) => {
    resolve(ipage)
  })
})

const Release = ((resolve) => {
  import('components/release/release').then((release) => {
    resolve(release)
  })
})

const Message = ((resolve) => {
  import('components/message/message').then((message) => {
    resolve(message)
  })
})

const User = ((resolve) => {
  import('components/user/user').then((user) => {
    resolve(user)
  })
})

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ipage'
    },
    {
      path: '/ipage',
      component: Ipage
    },
    {
      path: '/release',
      component: Release
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/upage',
      component: User
    }
  ]
})

