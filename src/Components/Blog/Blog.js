import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import AddComment from './AddComment';
import Comment from './Comment';

const Blog = () => {
    const [comments, setComments] = useState([])
    const [user] = useContext(UserContext)
    const [blog, setBlog] = useState({})
    const id = useParams().id;
    let url = ''
    if(id.length <= 1){
        url = "https://jsonplaceholder.typicode.com/posts/" + id;
    }else{
        url = "https://ishtiak-blog-app.herokuapp.com/post/getPost/" + id;
    }
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[url])
    // Load Comments
    useEffect(()=> {
        fetch('https://ishtiak-blog-app.herokuapp.com/comment/getAllComments/'+ id)
        .then(res => res.json())
        .then(data => setComments(data.data.comments))
    },[id])
    return (
        <div>
            <h1 style={{fontSize: '45px'}}>{blog.title}</h1>
            <img style={{maxWidth: '100%'}} src="https://picsum.photos/1200/500" alt="thumbs" />
            <p>{blog.body}{blog.content}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, excepturi commodi fuga nihil nisi veritatis eaque accusamus assumenda. Reiciendis deserunt, fuga officia animi laboriosam quisquam sint totam reprehenderit aliquam consequuntur saepe, dolor rem maxime provident aliquid distinctio numquam obcaecati eaque. Sequi in nulla alias placeat. Odit iusto doloremque est corporis quaerat animi, natus ipsum veniam harum, commodi, tempora voluptates expedita error praesentium! Possimus dolor sapiente optio.</p>
            {
                user.userName ? <button>Delete</button> : ''
            }
            <div className="comments">
                <AddComment postID={id}></AddComment>
                {
                    comments.map(comment => <Comment key={comment._id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Blog;