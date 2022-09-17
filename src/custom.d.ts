declare interface Author {
  id: number;
  firstName: string;
  familyName: string;
  dateOfBirth: string | null;
  dateOfDeath: string | null;
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
