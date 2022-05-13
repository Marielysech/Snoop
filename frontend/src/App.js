import './App.css';
import {Routes, Route, useParams} from 'react-router-dom'
import Auth from './pages/Auth';
import Register from './oldComponents (before MUI)/Register';
import Home from './pages/Home';
import AuthContextProvider from './contexts/AuthContext';
import UpdateUser from './components/UpdateUser';
import NewPost from './pages/NewPost';
import PostContainer from './components/PostsContainer';
import UserProfile from './pages/Profile';
import RequireAuth from './contexts/RequireAuth';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewHome from './pages/newHome';
import HomeDrawer from './pages/HomeDrawer';
import ResponsiveDrawer from './components/responsiveDR';

function App() {



  return (
    <div className="App">
      <CssBaseline />
      <AuthContextProvider>
        <main>
        <Routes>
          <Route path='/' element={ <RequireAuth> <ResponsiveDrawer /> </RequireAuth>} >
              <Route path="explore" element={<RequireAuth>    
                                                <PostContainer fetchUrl={("/posts/")}/>
                                            </RequireAuth>} />
              <Route path="feed" element={<RequireAuth>
                                                  <PostContainer fetchUrl={("/users/feed")}/> 
                                          </RequireAuth>} />
          </Route>

          <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<SignUp/>} />
                    <Route path="update" element={<RequireAuth>
                                                      <UpdateUser />
                                                  </RequireAuth>}/>
          </Route> 

          <Route path="/posts/new" element={<RequireAuth>       
                                                <NewPost />
                                            </RequireAuth>} />
          
  
          <Route path="/users/:userName" element={<RequireAuth>
                                                        <UserProfile/>
                                                  </RequireAuth>} />


          {/* <Route path='' element={ <ComponentToDisplay />} /> */}
        </Routes>
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default App;
