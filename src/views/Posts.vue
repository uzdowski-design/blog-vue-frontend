<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" cols="12">
          <v-card shaped height="250">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-subtitle>
              by {{ post.author.first_name + " " + post.author.last_name }}
            </v-card-subtitle>
            <v-card-text>{{ post.abstract }}</v-card-text>
            <v-row class="tags mx-1">
              <div v-for="tag in post.tags" :key="tag.id">
                <v-card-text>
                  {{ tag.name }}
                </v-card-text>
              </div>
            </v-row>
            <v-card-actions>
              <v-btn
                link
                :to="'/posts/' + post.id"
                color="primary"
                @click="setCurrentPost(post.id)"
                >Read</v-btn
              >
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
  methods: {
    setCurrentPost(id) {
      this.$store.dispatch("fetchPost", id);
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style lang="sass" scoped>
.tags
  margin-bottom: 5px
.v-card
  position: relative

  &__text
    height: 70px
    overflow: hidden

  &__actions
    position: absolute
    bottom: 3px
</style>