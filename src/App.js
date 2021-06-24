import './App.css';
import Home from "./Components/Home/Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import Blog from './Components/Blog/Blog';

export const UserContext = createContext()
function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={[user, setUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home></Home>    
        </Route>
        <Route path="/login">
          <Login setUser={setUser}></Login>
        </Route>
        <Route path='/blog/:id'>
          <Blog></Blog>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
