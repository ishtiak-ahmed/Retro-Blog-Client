import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Comment = ({comment, addComment, setAddComment}) => {
    const [user] = useContext(UserContext)
    const deleteComment = () => {
        fetch('https://ishtiak-blog-app.herokuapp.com/comment/deleteComment/' + comment._id, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(() => setAddComment(addComment - 1))
    }
    return (
        <div>
            <p><strong>{comment.commenterName}</strong></p>
            <p>{comment.content}</p>
            {
                user.userName ? <button onClick={deleteComment}>Delete</button> : ''
            }
        </div>
    );
};

export default Comment;