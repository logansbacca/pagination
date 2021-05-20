import React from 'react';

function Post({body, id, title}) {
  
    return (
      <div className="post">
        <small>{id}</small>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }

  export default Post