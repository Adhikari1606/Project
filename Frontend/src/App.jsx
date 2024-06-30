export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Select from '../pages/select';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Cyhome from '../pages/Collages/collagehome';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Select/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Cyhome/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}