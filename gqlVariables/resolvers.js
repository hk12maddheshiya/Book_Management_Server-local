import { books, authors, publishers } from '../data.js';
// Define your resolvers
const resolvers = {
    Author: { 
      booksWritten: (parent,args)=>{ 
          return books.filter(book=> parent.booksWritten.includes(book.id));
      }

    }, Book: {
    author: (parent) => {
      return authors.find(author => author.id === parent.authorId);
    },
    publisher: (parent) => {
      return publishers.find(pub => pub.id === parent.publisherId);
    },
  },
  Query: {
   
    Books: () => books,
    Authors: () => authors,
    Publishers: () =>  publishers,
    Book: (parent,args)=>{ 
        return books.find(book=>book.id=== args.id);
    },
    Author: (parent,args)=>{
        return authors.find(author=>author.id=== args.id);
    },
    Publisher: (parent,args)=>{
        return publishers.find(publisher=>publisher.id=== args.id);
    }
    
  
  },
};
export default resolvers;