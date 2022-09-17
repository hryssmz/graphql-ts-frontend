<!-- views/AuthorListPage.vue -->
<template>
  <div>
    <h1>Author List</h1>
    <ul>
      <li v-for="author in authors" :key="author.id">
        {{ author.name }} ({{ author.lifespan }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { prettifyISODate } from "../utils";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const authorList = ref<Author[]>([]);
    const authors = computed(() =>
      authorList.value.map(author => ({
        ...author,
        name: `${author.firstName}, ${author.familyName}`,
        lifespan: `${prettifyISODate(author.dateOfBirth)} - ${prettifyISODate(
          author.dateOfDeath
        )}`,
      }))
    );

    client.get<AuthorListApiData>("/authors").then(({ data }) => {
      authorList.value = data.authorList;
    });

    return { authors };
  },
});
</script>
