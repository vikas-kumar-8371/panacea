import { HashRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import PageNotFound from './components/PageNotFound';
import Services from './components/Services';
import EmployeeLogin from './components/EmployeeLogin';
import Login from './components/Login';
function App(){
  return(
    <div className='App'>
      <HashRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<EmployeeLogin/>}/>
        <Route path='/login/logged' element={<Login/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      </HashRouter>
      </div>
  )
}
export default App;