// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "../views/IndexPage.vue";
import AuthorListPage from "../views/AuthorListPage.vue";
import AuthorDetailPage from "../views/AuthorDetailPage.vue";
import BookListPage from "../views/BookListPage.vue";
import BookDetailPage from "../views/BookDetailPage.vue";
import BookInstanceListPage from "../views/BookInstanceListPage.vue";
import BookInstanceDetailPage from "../views/BookInstanceDetailPage.vue";
import GenreListPage from "../views/GenreListPage.vue";
import GenreDetailPage from "../views/GenreDetailPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "", component: IndexPage },
  { path: "/authors", component: AuthorListPage },
  { path: "/author/:id", component: AuthorDetailPage },
  { path: "/author/:id/update", component: AuthorDetailPage },
  { path: "/author/:id/delete", component: AuthorDetailPage },
  { path: "/books", component: BookListPage },
  { path: "/book/:id", component: BookDetailPage },
  { path: "/book/:id/update", component: BookDetailPage },
  { path: "/book/:id/delete", component: BookDetailPage },
  { path: "/book-instances", component: BookInstanceListPage },
  { path: "/book-instance/:id", component: BookInstanceDetailPage },
  { path: "/book-instance/:id/update", component: BookInstanceDetailPage },
  { path: "/book-instance/:id/delete", component: BookInstanceDetailPage },
  { path: "/genres", component: GenreListPage },
  { path: "/genre/:id", component: GenreDetailPage },
  { path: "/genre/:id/update", component: GenreDetailPage },
  { path: "/genre/:id/delete", component: GenreDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
