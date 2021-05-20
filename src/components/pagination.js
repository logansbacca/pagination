import React, { useState } from 'react';
import Post from './posts'

function Pagination({ posts, title}) {

    const [dataLimit] = useState(6)
    const [currentPage] = useState(1);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    let slice= posts.slice(startIndex, endIndex);
 
    return (
        <div>
          <h1>{title}</h1>
          <div className="dataContainer">
            {slice.map((p) => (
              <Post body={p.body} title={p.title} id={p.id}/>
            ))}
          </div>
        </div>
      );
}

export default Pagination