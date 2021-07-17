<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" cols="4">
          <v-card shaped height="200">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-subtitle> {{ post.author }} </v-card-subtitle>
            <v-card-text>{{ post.abstract }}</v-card-text>
            <v-card-actions>
              <v-btn link :to="'/posts/' + post.id" color="primary">Read</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>