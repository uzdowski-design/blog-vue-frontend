<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-btn
        v-if="this.getRoutePath && this.getRoutePath !== '/'"
        icon
        link
        :to="'/'"
      >
        <v-icon>mdi-home</v-icon></v-btn
      >

      <v-spacer></v-spacer>
      <v-toolbar-title class="mb-auto mt-auto">
        {{ getAppTitle() }}</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-column>
        <login-dialog v-if="!$store.state.username" class="mt-2 ml-auto mb-5" />
        <v-btn
          color="normal"
          @click="logout"
          v-else
          class="mt-2 ml-auto float-right mb-1"
          >Log Out</v-btn
        >
        <h6 v-if="isAuthenticated">Logged in as: {{ loggedAs }}</h6>
        <!-- <v-btn color="primary" v-if="isAuthenticated" class="mt-auto"
          >Add New Post</v-btn
        > -->
        <new-post-dialog
          v-if="isAuthenticated"
          class="mt-auto"
        ></new-post-dialog>
      </v-column>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  components: {
    "login-dialog": require("@/components/Global/Dialogs/DialogLogin.vue")
      .default,
    "new-post-dialog": require("@/components/Global/Dialogs/NewPostDialog.vue")
      .default,
  },
  methods: {
    getAppTitle() {
      return process.env.VUE_APP_TITLE;
    },
    logout() {
      this.$store.commit("USER_LOGOUT");
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    getRoutePath() {
      return this.$route.path;
    },
    loggedAs() {
      return this.$store.state.username;
    },
  },
};
</script>