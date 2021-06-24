import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Comment = ({comment}) => {
    const [user] = useContext(UserContext)
    return (
        <div>
            <p><strong>{comment.commenterName}</strong></p>
            <p>{comment.content}</p>
            {
                user.userName ? <button>Delete</button> : ''
            }
        </div>
    );
};

export default Comment;