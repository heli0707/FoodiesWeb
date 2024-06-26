import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MenuPage from './pages/MenuPage';
import About from './pages/About';
import Rateus from './pages/Rateus';
import SectionPage from './pages/SectionPage';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Loader from './components/Loader/Loader';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { ThemeProvider } from './themeContext';

import ContactUs from './pages/ContactUs';

import { AuthProvider } from './authContext'
import EditProfile from './pages/EditProfile';


const Layout = ({ children }) => {
  return (
    <div className="bg-cover bg-center min-h-screen bg-gradient-to-t from-blue-950 via-blue-950 to-gray-900 bg-no-repeat dark:bg-none">
      {children}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
    <ThemeProvider>
      <div className=''>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Layout><Home /></Layout>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<ContactUs />} />

          <Route path='/forgotPassword' element={<ForgotPassword/>} />
          <Route path='/api/v1/newPassword/:id/:token' element={<ResetPassword/>} />

          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/rateus' element={<Layout><Rateus /></Layout>} />
          <Route path='/section/:_id' element={<Layout><SectionPage /></Layout>} />
          <Route path="/menu/:_id" element={<Layout><MenuPage /></Layout>} />
          <Route path='/news' element={<Layout><News /></Layout>} />
          <Route path='/loader' element={<Layout><Loader /></Layout>} />
          <Route path="/edit-profile/:_id" element={<Layout><EditProfile /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </div>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
