<template>
  <v-row class="tags mx-1">
    <div v-for="tag in post.tags" :key="tag.id">
      <v-card-text>
        {{ tag.name }}
      </v-card-text>
    </div>
  </v-row>
</template>

<script>
export default {};
</script>
