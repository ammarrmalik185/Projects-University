import React from "react"
import './ViewBlogs.css'
import {Link} from 'react-router-dom'
import {blogs} from './blogs'

class ViewBLogs extends React.Component{
    render(){
        return(
            <div className='blogs content'>
                <h2>All Blogs</h2>
                {blogs.map(blog => 
                    <div>
                        <a>
                            <h3 className="title">{blog.title}</h3>
                            <p className="snippet" >{blog.snippet} </p>
                            <Link to={`/UpdateBlog/${blog.blog_id}`} >Update</Link>
                            <Link to={`/DeleteBlog/${blog.blog_id}`} >Delete</Link>
                        </a>
                    </div>
                    )}
            </div>
        )
    }
}
export default ViewBLogs