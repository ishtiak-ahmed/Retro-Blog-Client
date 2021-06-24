import React from 'react';

const AddComment = ({postID}) => {
    const handleComment = e => {
        e.preventDefault()
        const commenterName = e.target.children[1].value;
        const email = e.target.children[4].value;
        const content = e.target.children[6].value;
        
        fetch('http://localhost:3002/comment/addNewComment', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({commenterName,email,content, postID})
        }).then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleComment}>
            <span>Name: (*)</span>
            <input type="text" /> <br />
            <span>Email:</span>
            <input type="text" /> <br />
            <textarea name="" id="" cols="30" rows="3"></textarea> <br />
            <input type="submit" value="Add Comment" />
            </form>
        </div>
    );
};

export default AddComment;