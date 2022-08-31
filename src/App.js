import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
      <div className="App">
        
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/menu' element={<Menu />} ></Route>
        <Route exact path='/login' element={<Login />} ></Route>
        <Route exact path='/sign' element={<Register />} ></Route>
        <Route exact path='/dashboard' element={<Dashboard />} ></Route>
        <Route exact path='/orders' element={<Orders />} ></Route>
        <Route exact path='/cart' element={<Cart />} ></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
