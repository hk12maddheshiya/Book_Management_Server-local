
  import { gql } from 'apollo-server-express';
  const typeDefs = gql`

    type Author{
      id: ID!
      name: String!
      booksWritten: [Book] 
    }
      type Book{
      id: ID!
      title: String!
      author: Author!
      publisher: Publisher!
      }
      type Publisher{
      id: ID!
      name: String!
      BooksPublished: [Book]
    } 
    type Query {

      Books: [Book]
      Authors: [Author]
      Publishers: [Publisher]
      Book(id: ID!): Book
      Author(id: ID!): Author
      Publisher(id: ID!): Publisher
      
    }
  `;
  export default typeDefs;