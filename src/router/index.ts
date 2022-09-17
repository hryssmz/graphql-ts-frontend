// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthorListPage from "../views/AuthorListPage.vue";
import AuthorDetailPage from "../views/AuthorDetailPage.vue";
import BookInstanceListPage from "../views/BookInstanceListPage.vue";
import BookListPage from "../views/BookListPage.vue";
import GenreListPage from "../views/GenreListPage.vue";
import IndexPage from "../views/IndexPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "", component: IndexPage },
  { path: "/authors", component: AuthorListPage },
  { path: "/author/:id", component: AuthorDetailPage },
  { path: "/books", component: BookListPage },
  { path: "/book-instances", component: BookInstanceListPage },
  { path: "/genres", component: GenreListPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
