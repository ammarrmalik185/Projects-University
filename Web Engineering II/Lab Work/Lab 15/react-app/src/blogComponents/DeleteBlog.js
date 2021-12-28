import './DeleteBlog.css'
import {blogs} from './blogs'
import { useParams } from 'react-router-dom'

export default function DeleteBlog() {
    var params = useParams()

    var blog = blogs.find(item=>{
        return item.blog_id == params.blogId
    })

    return(
        <div className='details content'>
            <div>
                <h2>{blog.title}</h2>
                <div className='content'>
                    <p>{blog.body}</p>
                    <a className='delete'>Delete</a>
                </div>
            </div>
        </div>
    )
}