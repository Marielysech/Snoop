import './App.css';
import {Routes, Route, useParams} from 'react-router-dom'
import Auth from './pages/Auth';
import AuthContextProvider from './contexts/AuthContext';
import UpdateUser from './pages/UpdateUser';
import NewPost from './pages/NewPost';
import PostContainer from './components/PostsContainer';
import UserProfile from './pages/Profile';
import RequireAuth from './contexts/RequireAuth';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageStructure from './pages/PageStructure';
import ProfileUser from './components/newUserProfile';
import UserProPropFile from './components/UserProProFile';

function App() {



  return (
    <div className="App">
      <CssBaseline />
      <AuthContextProvider>
        <main>
        <Routes>
          <Route path="/auth/*" element={<Auth />} >
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<SignUp/>} />
                
          </Route> 
          
          <Route path='/*' element={ <RequireAuth> <PageStructure /> </RequireAuth>} >
              <Route path="explore" element={<RequireAuth>    
                                              <PostContainer fetchUrl={("/posts/")}/>
                                            </RequireAuth>} />
              <Route path="feed" element={<RequireAuth>
                                            <PostContainer fetchUrl={("/users/feed")}/> 
                                          </RequireAuth>} />

              <Route path="posts/new" element= {<NewPost />} />


              <Route path="update" element={<RequireAuth>
                                                <UpdateUser />
                                              </RequireAuth>}/>          
  
              <Route path="users/:userName" element={<RequireAuth>
                                                    <UserProPropFile/>
                                                  </RequireAuth>} />

          </Route>

        </Routes>
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default App;
