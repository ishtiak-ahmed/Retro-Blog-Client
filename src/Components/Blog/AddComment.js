import React from 'react';

const AddComment = ({postID, addComment, setAddComment}) => {
    const handleComment = e => {
        e.preventDefault()
        const commenterName = e.target.children[0].value;
        const email = e.target.children[2].value;
        const content = e.target.children[4].value;
        
        fetch('https://ishtiak-blog-app.herokuapp.com/comment/addNewComment', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({commenterName,email,content, postID})
        }).then(res => res.json())
        .then(() => setAddComment(addComment + 1))
    }
    return (
        <div className='addblog'>
            <h3>Add a comment</h3>
            <form onSubmit={handleComment}>
            <input type="text" placeholder='name (required)' /> <br />
            <input type="text" placeholder="email" /> <br />
            <textarea name="" id="" cols="30" rows="3"></textarea> <br />
            <input type="submit" value="Add Comment" />
            </form>
        </div>
    );
};

export default AddComment;