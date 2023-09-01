import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Activities from './components/Activities';
import Main from './components/Main';

function App() {
  
        
  return (
      <div className='App'>
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<><Navbar/>
          <Main/></>}/>
          <Route path='/Aboutus' element={<Aboutus />}/>
          <Route path='/Activities' element={<Activities/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
