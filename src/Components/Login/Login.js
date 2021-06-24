import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user.userName)
    const handleLogin = e => {
        e.preventDefault();
        const data = {
            email: e.target.children[1].value,
            password: e.target.children[4].value,
        }
        fetch('http://localhost:3002/auth/login', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            setUser(data.success);
            window.history.back()
        });
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <p>Email:</p>
                <input type="text" name="email" />
                <br />
                <p>Password:</p>
                <input type="password" name="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;