import React from "react"
import './ViewBlogs.css'
import {Link} from 'react-router-dom'
// import {blogs} from './blogs'

export default function ViewBlogs(){
    const [blogs, setBlogs] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3002/blog").then(data => {
        return data.json().then(jsonData => {
            setBlogs(jsonData)
        })
    })})
    return(
        <div className='blogs content'>
            <h2>All Blogs</h2>
            {blogs.map(blog =>
                <div key={blog._id.toString()}>
                    <a>
                        <h3 className="title">{blog.title}</h3>
                        <p className="snippet" >{blog.snippet} </p>
                        <Link to={`/UpdateBlog/${blog._id.toString()}`} >Update</Link>
                        <Link to={`/DeleteBlog/${blog._id.toString()}`} >Delete</Link>
                    </a>
                </div>
                )}
        </div>
    )
}
