import React,{createContext} from 'react';


const LibraryContext = createContext();
const BookContext = createContext();

function Library(){
  const librarydetails = {
    name:'Science Libarary',
    location :'Marathahalli',
    type :'Big'
  }
  const bookdetails =[{
    name : 'Science',
    author : 'Albert'
  }]
  return(
    <LibraryContext.Provider value={librarydetails}>
      <BookContext.Provider value={bookdetails}>
        <div>
          <h1>Hello, This Is Library Component</h1>
        </div>
        </BookContext.Provider>
      </LibraryContext.Provider>
  )
}
export default Library;
export default {LibraryContext,BookContext};