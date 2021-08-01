/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import goto from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// add current page to title
router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  next()
})

// scroll to top of page after page change
router.afterEach((to, from) => {
  goto(0, { duration: 0 })
})

export default router