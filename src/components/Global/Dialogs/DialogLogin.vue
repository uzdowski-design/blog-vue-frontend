<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Log In </v-btn>
      </template>
      <v-card>
        <v-form @submit.prevent="login">
          <v-card-title>
            <span class="text-h5">User Credentials</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Username"
                    v-model="username"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small class="auth-error" v-if="incorrectAuth"
              >Username or password is incorrect.</small
            >
            <small v-else
              >Please provide your username and password to log in.</small
            >
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="primary" type="submit"> Login </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    username: "",
    password: "",
    incorrectAuth: false,
  }),
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          (this.dialog = false), (this.username = ""), (this.password = "");
        })
        .catch((err) => {
          console.log(err);
          this.incorrectAuth = true;
        });
    },
  },
};
</script>

<style scoped lang="sass">
.auth-error
  color: red !important
</style>