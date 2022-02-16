import './UpdateBlog.css'
import { useParams } from 'react-router-dom'
import React from "react";

export default function UpdateBlog() {
    const params = useParams()
    const [blog, setBlog] = React.useState({
        title:"",
        body: "",
        snippet: ""
    })

    fetch("http://localhost:3002/blog/" + params.blog_id).then(data => data.json().then(setBlog))

    return(
        <div align='center'>
            <h1>Update a Blog</h1>
            <div className='create-blog content'>
                <form name='updateform' action='' method='POST'>
                    <table>
                        <tr>
                            <td><label>Enter Title</label></td>
                            <td><input type='text' name='name' value={blog.title} placeholder='Enter Blog Title here ....'/></td>
                        </tr>
                        <tr>
                            <td><label>Blog Snippet</label></td>
                            <td><input type='text' name='snippet' value={blog.snippet} placeholder='Enter Blog Snippet here ....'/></td>
                        </tr>
                        <tr>
                            <td><label>Blog Body</label></td>
                            <td><textarea name='body' value={blog.body} placeholder='Enter Blog Body here ....'></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'>
                                <button type='submit' value='Update'>Update</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
