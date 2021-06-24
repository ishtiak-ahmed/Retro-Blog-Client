import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import AddBlog from '../AddBlog/AddBlog';
const Header = () => {
    const [user] = useContext(UserContext);
    const [createBlog, setCreateBlog] = useState(false);
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to='/'>
            <img src="" alt="logo" />
            </Link>
            {
                user.userName === 'Admin' ?
                <button onClick={()=> setCreateBlog(true)}>Write a post</button> :
                <Link to='/login'><button>Login</button></Link>
            }
            {
                createBlog ? <AddBlog setCreateBlog={setCreateBlog}></AddBlog> : ""
            }
        </header>
    );
};

export default Header;