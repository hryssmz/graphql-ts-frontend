// utils/constants.ts
export const dummyAuthor: Author = {
  id: -1,
  firstName: "",
  familyName: "",
  dateOfBirth: null,
  dateOfDeath: null,
};

export const dummyBook: Book = {
  id: -1,
  title: "",
  authorId: -1,
  summary: "",
  isbn: "",
};

export const dummyBookInstance: BookInstance = {
  id: -1,
  bookId: -1,
  imprint: "",
  status: null,
  dueBack: null,
};

export const dummyGenre: Genre = {
  id: -1,
  name: "",
};
