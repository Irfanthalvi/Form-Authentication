import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import { Routes,Route } from 'react-router-dom';
import Details from './component/Details';
import Error from './Error';

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Details' element={<Details/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
  
      </div>
    </>
  );
}

export default App;
