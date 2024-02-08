import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Description from './Description';

function Books() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [details,setDetails]=useState('');

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then((res) => {
      setData(res.data.books);
      console.log(res)
    })
    .catch((err) => console.log(err))
  }, []);


  const filteredBooks = data.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const handleDescription=(description)=>{
  //   setDetails(description);
  // };

  return (

    
    <div className='booksData'>
    <div className='topBar'>
    <div>
    
      <img src='../src/assets/logo.png' className='logo'/>
      <div className='booksHaven'>Books Haven</div>
    </div>
    <div className='handleSearch'>
    <span>Enter the book name</span>
   <input type="text" placeholder="Search by book name" onChange={(e) => setSearchTerm(e.target.value)} className='searchBox'/>
   
   </div></div>
   <div className='bookStore'> 
   {filteredBooks.map((book, index) => (
        <div key={index} className='book'>
        <div className='title'>{book.title}</div>
        <img src={book.imageLinks.thumbnail} alt={book.title} className='bookImg' />
        <div className='author'>{book.authors}</div>
        <div className='star'><img src='./src/assets/download.png' className='star'/>{book.averageRating}/5</div>
        <div className='addOns'>
         <button className='addButton'>Buy Now (free)</button>
         <button className='addButton'>Description</button>
        </div>
        </div>
      ))}
      </div> 
    </div>
  );
}

export default Books;



