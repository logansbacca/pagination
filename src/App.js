import React, { useState, useEffect } from 'react';
import Pagination from './components/pagination'
import axios from 'axios'

const url = ("https://jsonplaceholder.typicode.com/posts/")

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(url).then (res=> {
      setPosts(res.data)
      console.log("posts rendered")
    }, err=>{
      console.log("error" + err)
    })
  },[])


  return (
    <div>
          <Pagination posts={posts} title="Posts"/>
    </div>
  );
}