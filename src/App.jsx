import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import Post from './components/Post/Post.jsx';

import dummyPostData from './components/Post/dummyPostData.jsx';

function App() {

  const post = {
    data: dummyPostData
  };



  return (
    <div>
      <NavBar />
      <Post post={post.data} />

















    </div>
  )
}

export default App
