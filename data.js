// mockData.js

export const authors = [
  {
    id: "A1",
    name: "J.K. Rowling",
    booksWritten: ["B1", "B3"]
  },
  {
    id: "A2",
    name: "George R.R. Martin",
    booksWritten: ["B2", "B4"]
  },
  {
    id: "A3",
    name: "Haruki Murakami",
    booksWritten: ["B5"]
  }
];

export const publishers = [
  {
    id: "P1",
    name: "Bloomsbury Publishing",
    booksPublished: ["B1", "B3"]
  },
  {
    id: "P2",
    name: "Bantam Books",
    booksPublished: ["B2", "B4"]
  },
  {
    id: "P3",
    name: "Vintage International",
    booksPublished: ["B5"]
  }
];

export const books = [
  {
    id: "B1",
    title: "Harry Potter and the Philosopher's Stone",
    author: "A1",
    publisher: "P1"
  },
  {
    id: "B2",
    title: "A Game of Thrones",
    author: "A2",
    publisher: "P2"
  },
  {
    id: "B3",
    title: "Harry Potter and the Chamber of Secrets",
    author: "A1",
    publisher: "P1"
  },
  {
    id: "B4",
    title: "A Clash of Kings",
    author: "A2",
    publisher: "P2"
  },
  {
    id: "B5",
    title: "Kafka on the Shore",
    author: "A3",
    publisher: "P3"
  }
];
