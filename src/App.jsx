import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import Post from './components/Post/Post.jsx';

import { dummyFeed } from './components/Post/dummyPostData.jsx';

function App() {





  return (
    <div>
      <NavBar />
      {dummyFeed.map((post) => (
        <Post key={post.title} post={post} />
      ))}


    </div>
  )
}

export default App
