import React,{} from 'react';
import {LibraryContext,BookContext} from '../Context_Component/Library.js';

const Books = (props)=>{

   return(
     <LibraryContext.Consumer>
       {(librarydetails)=>{
         return(
          <BookContext.Consumer>
          {(bookdetails)=>{
            return(
              <div>
              <p>This Is {librarydetails.name}</p>
              <p>In This Library The Book We Have is{bookdetails[0].name}</p>
            </div>
            );
          }};
          </BookContext.Consumer>
         );
        
       }};
       </LibraryContext.Consumer>
   );
};
export default Books;