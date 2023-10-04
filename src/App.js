import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import { Login } from './pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';


function App() {

  const [isauth,setauth] = useState(false);

  const signout = () =>{
    signOut(auth).then(() =>{
      localStorage.clear();
      setauth(false);
      window.location.pathname = "/login"
    })
  }

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        
       {!isauth ? <Link to='/login'>Login</Link> :(
       <>
       <Link to='/createpost'>CreatePost</Link>
       <button onClick={signout}>Log Out</button>
       </> )
       }
       
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth = {isauth} />}></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isauth} />}></Route>
        <Route path='/login' element={<Login setauth={setauth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
