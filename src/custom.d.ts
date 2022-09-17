declare interface Author {
  id: number;
  firstName: string;
  familyName: string;
  dateOfBirth: string | null;
  dateOfDeath: string | null;
}

declare interface Book {
  id: number;
  title: string;
  author: Author;
}

declare type BookStatus = "Available" | "Maintenance" | "Loaned" | "Reserved";

declare interface BookInstance {
  id: number;
  book: Book;
  imprint: string;
  status: BookStatus | null;
  dueBack: string | null;
}

declare interface Genre {
  id: number;
  name: string;
}

declare interface IndexApiData {
  bookCount: number;
  bookInstanceCount: number;
  bookInstanceAvailableCount: number;
  authorCount: number;
  genreCount: number;
}

declare interface AuthorListApiData {
  authorList: Author[];
}

declare interface BookListApiData {
  bookList: Book[];
}

declare interface BookInstanceListApiData {
  bookInstanceList: BookInstance[];
}

declare interface GenreListApiData {
  genreList: Genre[];
}
