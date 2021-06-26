import React from 'react';
import { Link } from 'react-router-dom';

const ShortBlog = ({blog}) => {
    const id = blog.id || blog._id
    return (
        <div className='shortblog'>
            <Link to={`/blog/${id}`}><h3>{blog.title}</h3></Link>
            <p>{blog.body} {blog.content}</p>
            <Link to={`/blog/${id}`}><button>Read More</button></Link>
        </div>
    );
};

export default ShortBlog;