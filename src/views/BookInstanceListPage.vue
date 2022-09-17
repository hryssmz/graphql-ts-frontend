<!-- views/BookInstanceListPage.vue -->
<template>
  <div>
    <h1>Book Instance List</h1>
    <ul>
      <li v-for="bookInstance in bookInstances" :key="bookInstance.id">
        <a href="#">
          {{ bookInstance.book.title }} : {{ bookInstance.imprint }}
        </a>
        -
        <span :style="{ color: bookInstance.color }">
          {{ bookInstance.status }}
        </span>
        <span v-if="bookInstance.status !== 'Available'">
          (Due: {{ bookInstance.prettyDueBack }})
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import client from "../utils/client";
import { prettifyISODate } from "../utils";

export default defineComponent({
  setup() {
    const bookInstanceListData = ref<
      BookInstanceListApiData["bookInstanceList"]
    >([]);

    const bookInstances = computed(() =>
      bookInstanceListData.value.map(bookInstance => ({
        ...bookInstance,
        prettyDueBack: prettifyISODate(bookInstance.dueBack),
        color:
          bookInstance.status === "Available"
            ? "green"
            : bookInstance.status === "Maintenance"
            ? "red"
            : "yellow",
      }))
    );

    client.get<BookInstanceListApiData>("/book-instances").then(({ data }) => {
      bookInstanceListData.value = data.bookInstanceList;
    });

    return { bookInstances };
  },
});
</script>
