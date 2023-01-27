
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Products from './components/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path ='/register' element={<Register/>}/>
      <Route path='/products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
