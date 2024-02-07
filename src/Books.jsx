import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Books() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then((res) => {
      setData(res.data.books);
    })
    .catch((err) => console.log(err))
  }, []);


  const filteredBooks = data.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='booksData'>
   <input type="text" placeholder="Search by book name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
   <div className='bookStore'> 
   {filteredBooks.map((book, index) => (
        <div key={index} className='book'>
        <div className='title'>{book.title}</div>
        <img src={book.imageLinks.thumbnail} alt={book.title} className='bookImg' />
        <div>{book.authors}</div>
        <div className='star'><img src='./src/assets/download.png' className='star'/>4/5</div>
        <div className='addOns'>
         <button>Buy Now for $0.00</button>
         <button>Description</button>
        </div>
        </div>
      ))}
      </div>  
    </div>
  );
}

export default Books;



