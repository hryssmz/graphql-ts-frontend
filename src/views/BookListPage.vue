<!-- views/BookListPage.vue -->
<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <a href="#">{{ book.title }}</a> ({{ book.authorName }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const bookList = ref<Book[]>([]);
    const books = computed(() =>
      bookList.value.map(book => ({
        ...book,
        authorName: `${book.author.firstName}, ${book.author.familyName}`,
      }))
    );

    client.get<BookListApiData>("/books").then(({ data }) => {
      bookList.value = data.bookList;
    });

    return { books };
  },
});
</script>
