import React, { useState } from 'react';
import Post from './posts'

function Pagination({ posts, title}) {

    const [postPerPage] = useState(6)
    const [currentPage,setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    let currentPost= posts.slice(indexOfFirstPost,indexOfLastPost);


    
    function goToPreviousPage() {
      if (currentPage === 1) {
        setCurrentPage(17)
      }
      else {
        setCurrentPage((currentPost) => currentPost - 1);
      }
      
    }

    function goToNextPage() {
      if (currentPage === 17) {
        setCurrentPage(1)
      }
      else{
        setCurrentPage((currentPost) => currentPost + 1);
      }   
    }
    
 
    return (
        <div>
          <h1>{title}</h1>
          <div className="dataContainer">
            {currentPost.map((p) => (
              <Post body={p.body} title={p.title} id={p.id}/>
            ))}
            <nav>
              <ul>
              <button onClick={goToPreviousPage}>Previous Page</button>
              <button onClick={goToNextPage}>Next Page </button>
              </ul>
            </nav>
          </div>
        </div>
      );
}

export default Pagination