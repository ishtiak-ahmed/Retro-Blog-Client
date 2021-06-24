import React, { useEffect, useState } from 'react';
import ShortBlog from './ShortBlog';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const [myBlogs, setMyBlogs] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3002/post/getAllPosts')
        .then(res => res.json())
        .then(data => {
            setMyBlogs(data.data.posts)
        })
    }, [])

    return (
        <main>
            {
                myBlogs.slice(0,10).map(blog => <ShortBlog key={blog._id} blog={blog}></ShortBlog>)
            }
            {
                blogs.slice(0,10).map(blog => <ShortBlog key={blog.id} blog={blog}></ShortBlog>)
            }
        </main>
    );
};

export default Home;