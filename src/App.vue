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
      <v-toolbar-title> {{ getAppTitle() }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn color="primary" @click="toggleLogin" v-if="!isAuthenticated"
        >Log In</v-btn
      > -->
      <login-dialog v-if="!$store.state.username" class="mt-2 ml-auto" />
      <v-btn color="normal" @click="logout" v-else class="mt-2 ml-auto"
        >Log Out</v-btn
      >
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
  },
};
</script>