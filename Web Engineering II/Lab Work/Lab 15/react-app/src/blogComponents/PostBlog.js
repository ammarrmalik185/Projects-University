import './PostBlog.css'

export default function PostBlog() {
    return(
        <div align='center'>
            <h1>Post New Blog</h1>
            <div className='create-blog content'>
                <form name='postform' action='' method='POST'>
                    <table>
                        <tr>
                            <td><label>Enter Title</label></td>
                            <td><input type='text' name='title' placeholder='Enter Blog Title here ....'/></td>
                        </tr>
                        <tr>
                            <td><label>Blog Snippet</label></td>
                            <td><input type='text' name='snippet' placeholder='Enter Blog Snippet here ....'/></td>
                        </tr>
                        <tr>
                            <td><label>Blog Body</label></td>
                            <td><textarea name='body' placeholder='Enter Blog Body here ....'></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'>
                                <button type='submit' value='Submit'>Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}