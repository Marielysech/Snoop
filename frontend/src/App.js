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
import RequireAuth from './contexts/RequireAuth';


function App() {



  return (
    <div className="App">
      <AuthContextProvider>
        <main>
        <Routes>
          <Route path='/' element={ <RequireAuth> <Home /> </RequireAuth>} >
              <Route path="explore" element={<RequireAuth> <PostContainer fetchUrl={("/posts/")}/></RequireAuth>} />
              <Route path="feed" element={<RequireAuth><PostContainer fetchUrl={("/users/feed")}/> </RequireAuth>} />
          </Route>

          <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="update" element={<RequireAuth><UpdateUser /></RequireAuth>}/>
          </Route> 

          <Route path="/posts/new" element={<RequireAuth> <NewPost /></RequireAuth>} />
          
          <Route path="/users/:userName" element={<RequireAuth><UserProfile/></RequireAuth>} />


          {/* <Route path='' element={ <ComponentToDisplay />} /> */}
        </Routes>
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default App;
