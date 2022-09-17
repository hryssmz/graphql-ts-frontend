<!-- views/AuthorDetailPage.vue -->
<template>
  <div>
    <h1>Author: {{ author.name }}</h1>
    <p>{{ author.lifespan }}</p>

    <div>
      <h2>Books</h2>
      <dl v-if="authorsBooks.length > 0">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="book in authorsBooks" :key="book.id">
          <dt>
            <a href="#">{{ book.title }}</a>
          </dt>
          <dd>{{ book.summary }}</dd>
        </template>
      </dl>
      <p v-else>This author has no books.</p>
    </div>

    <hr />
    <p><a href="#">Update author</a></p>
    <p><a href="#">Delete author</a></p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { prettifyISODate } from "../utils";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = route.params.id as string;

    const authorData = ref<AuthorDetailApiData["author"]>({
      id: -1,
      firstName: "",
      familyName: "",
      dateOfBirth: null,
      dateOfDeath: null,
    });
    const authorsBooksData = ref<AuthorDetailApiData["authorsBooks"]>([]);

    const author = computed(() => ({
      ...authorData.value,
      name: `${authorData.value.firstName}, ${authorData.value.familyName}`,
      lifespan: `${prettifyISODate(
        authorData.value.dateOfBirth
      )} - ${prettifyISODate(authorData.value.dateOfDeath)}`,
    }));
    const authorsBooks = computed(() =>
      authorsBooksData.value.map(book => ({ ...book }))
    );

    client.get<AuthorDetailApiData>(`/author/${id}`).then(({ data }) => {
      authorData.value = data.author;
      authorsBooksData.value = data.authorsBooks;
    });

    return { author, authorsBooks };
  },
});
</script>
