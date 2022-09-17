<!-- views/GenreListPage.vue -->
<template>
  <div>
    <h1>Genre List</h1>
    <ul>
      <li v-for="genre in genres" :key="genre.id">
        <a href="#">{{ genre.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const genreListData = ref<GenreListApiData["genreList"]>([]);

    const genres = computed(() =>
      genreListData.value.map(genre => ({ ...genre }))
    );

    client.get<GenreListApiData>("/genres").then(({ data }) => {
      genreListData.value = data.genreList;
    });

    return { genres };
  },
});
</script>
