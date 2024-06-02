import './App.css';
import Navbar from './Components/navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/home'
import Signup from './Components/signup'
import Signin from './Components/signin'
import PageNotFound from './Components/pageNotFound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
