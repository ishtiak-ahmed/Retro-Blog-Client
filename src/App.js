import './App.css';
import Home from "./Components/Home/Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import Blog from './Components/Blog/Blog';

export const UserContext = createContext()
export const FetchContext = createContext()
function App() {
    const [fetchData, setFetchData] = useState(1)
    const [user, setUser] = useState({})
    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const [myBlogs, setMyBlogs] = useState([])
    useEffect(()=> {
        fetch('https://ishtiak-blog-app.herokuapp.com/post/getAllPosts')
        .then(res => res.json())
        .then(data => {
            setMyBlogs(data.data.posts)
        })
    }, [fetchData])
  return (
    <UserContext.Provider value={[user, setUser]}>
    <FetchContext.Provider value={[fetchData, setFetchData]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home blogs={blogs} myBlogs={myBlogs}></Home>    
        </Route>
        <Route path="/login">
          <Login setUser={setUser}></Login>
        </Route>
        <Route path='/blog/:id'>
          <Blog></Blog>
        </Route>
      </Switch>
    </Router>
    </FetchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
