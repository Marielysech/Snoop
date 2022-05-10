import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Component } from 'react';
import Login from './components/Login';
import Auth from './pages/Auth';
import Register from './components/Register';
import Home from './pages/Home';
import AuthContextProvider from './contexts/AuthContext';

function App() {




  return (
    <div className="App">
      <AuthContextProvider>
        <main>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="logout" />
          </Route>          
          {/* <Route path='' element={ <ComponentToDisplay />} />
          <Route path='' element={ <ComponentToDisplay />} /> */}
        </Routes>
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default App;
