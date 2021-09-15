/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const baseURL = process.env.VUE_APP_BASE_URL;
const postsURL = process.env.VUE_APP_POSTS_URL;
const accessTokenURL = process.env.VUE_APP_ACCESS_TOKEN_URL;
const refreshTokenURL = process.env.VUE_APP_REFRESH_TOKEN_URL;




export default new Vuex.Store({
  state: {
    // using local storage for persistence on page refresh
    username: localStorage.getItem('username') || null,
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isAuthenticated: localStorage.getItem('isAuthenticated') || false,
    appTitle: process.env.VUE_APP_TITLE,
    posts: [],
    currentPost: null
  },
  mutations: {
    TOGGLE_LOGIN(state) {
      state.isAuthenticated = !state.isAuthenticated;
      console.log('User Authenticated: ' + state.isAuthenticated);
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    USER_LOGIN(state, { access, refresh, username }) {
      state.accessToken = access;
      state.refreshToken = refresh;
      state.username = username;
      state.isAuthenticated = true;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('username', username);
    },
    USER_LOGOUT(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.username = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');

    },
    SET_POST(state, data) {
      state.currentPost = data;
    }
  },
  actions: {
    async toggleLogin({ commit }) {
      commit('TOGGLE_LOGIN');
    },
    async fetchPosts({ commit }) {
      const res = await axios.get(postsURL);
      commit('SET_POSTS', res.data);
    },
    async userLogin({ commit }, data) {
      const payload = {
        username: data.username,
        password: data.password
      };
      const res = await axios.post(accessTokenURL, payload);
      const outputData = res.data;
      outputData["username"] = data.username;
      commit('USER_LOGIN', outputData);
    },
    async fetchPost({ commit }, data) {
      const res = await axios.get(postsURL + data.id);
      commit('SET_POST', res.data);
      console.log(res.data);
    }
  },
  getters: {}
});

