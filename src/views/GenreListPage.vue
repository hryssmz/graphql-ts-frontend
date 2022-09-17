<!-- views/GenreListPage.vue -->
<template>
  <div>
    <h1>Genre List</h1>
    <ul>
      <li v-for="genre in genreList" :key="genre.id">
        <a href="#">{{ genre.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const genreList = ref<Genre[]>([]);
    client.get<GenreListApiData>("/genres").then(({ data }) => {
      genreList.value = data.genreList;
    });

    return { genreList };
  },
});
</script>
