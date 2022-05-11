import './App.css';
import {Routes, Route, useParams} from 'react-router-dom'
import Login from './components/Login';
import Auth from './pages/Auth';
import Register from './components/Register';
import Home from './pages/Home';
import AuthContextProvider from './contexts/AuthContext';
import UpdateUser from './components/UpdateUser';
import NewPost from './pages/NewPost';
import PostContainer from './components/PostsContainer';
import UserProfile from './pages/Profile';

function App() {

 
  let { userName } = useParams();


  return (
    <div className="App">
      <AuthContextProvider>
        <main>
        <Routes>
          <Route path='/' element={ <Home />} >
              <Route path="explore" element={<PostContainer fetchUrl={("/posts/")}/>} />
              <Route path="feed" element={<PostContainer fetchUrl={("/users/feed")}/>} />
          </Route>
          <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="update" element={<UpdateUser />}/>
          </Route>          
          <Route path="/posts/new" element={ <NewPost />} />
          <Route path="/users/:userName" element={<UserProfile/>} />


          {/* <Route path='' element={ <ComponentToDisplay />} /> */}
        </Routes>
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default App;
