import logo from './logo.svg';
import React from 'react'
//import Banner from './Banner'
import './App.css';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import ViewBlogs from './blogComponents/ViewBlogs'
import PostBlog from './blogComponents/PostBlog'
import UpdateBlog from './blogComponents/UpdateBlog'
import DeleteBlog from './blogComponents/DeleteBlog'
import {Home} from './blogComponents/Home'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/ViewBlogs'>View BLogs</Link></li>
            <li><Link to='/PostBlog'>Post Blog</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ViewBlogs' element={<ViewBlogs/>} />
          <Route path='/PostBlog' element={<PostBlog/>} />
          <Route path='/UpdateBlog/:blogId' element={<UpdateBlog/>} />
          <Route path='/DeleteBlog/:blogId' element={<DeleteBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
