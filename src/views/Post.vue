<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-card class="mt-5" shaped width="90%">
          <v-card-title>{{ post.title || "" }}</v-card-title>
          <v-card-subtitle class="username">
            by
            {{
              post.author.first_name +
              " " +
              post.author.last_name +
              " " +
              "(" +
              post.author.username +
              ")"
            }}
          </v-card-subtitle>
          <v-card-text>{{ post.body }}</v-card-text>
          <v-card-text class="ml-1 mt-5">Tags</v-card-text>
          <v-row class="tags mx-1">
            <div v-for="tag in post.tags" :key="tag.id">
              <v-card-text>
                {{ tag.name }}
              </v-card-text>
            </div>
          </v-row>
          <v-card-actions v-if="isAuthor()">
            <v-btn text color="primary">Edit</v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="error">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    // isAuthor: false,
  }),
  methods: {
    isAuthor() {
      return this.post.author.username === this.$store.state.username;
    },
  },
  computed: {
    post() {
      return this.$store.state.currentPost;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPost", { id: this.$route.params.id });
    return this.post.author.username === this.$store.state.username;
  },
};
</script>

<style lang="sass" scoped>
.username
  font-style: italic
</style>