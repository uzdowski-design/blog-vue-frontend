/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const baseURL = process.env.VUE_APP_BASE_URL;

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    URL: baseURL,
    appTitle: process.env.VUE_APP_TITLE,
    posts: [
      {
        "id": 1,
        "url": "http://127.0.0.1:8000/posts/1/",
        "title": "New player for Real Madrit",
        "abstract": "asdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaasdasd",
        "body": "asfasdassssssssssssssssssssssssssssssssssssssa",
        "created_date": "2021-07-17",
        "author": 1,
        "tags": [
          {
            "id": 1,
            "name": "sport"
          },
          {
            "id": 2,
            "name": "football"
          }
        ]
      },
      {
        "id": 2,
        "url": "http://127.0.0.1:8000/posts/2/",
        "title": "post 2",
        "abstract": "asdassaaaaa",
        "body": "asdsadsadsadsadasd",
        "created_date": "2021-07-17T14:25:09Z",
        "author": 1,
        "tags": [
          {
            "id": 2,
            "name": "football"
          },
          {
            "id": 3,
            "name": "food"
          }
        ]
      }
    ]
  },
  mutations: {
    TOGGLE_LOGIN(state) {
      state.isAuthenticated = !state.isAuthenticated;
      console.log('User Authenticated: ' + state.isAuthenticated)
    }
  },
  actions: {
    async toggleLogin({ commit }) {
      commit('TOGGLE_LOGIN');
    }
  },
  getters: {}
})

