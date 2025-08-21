import Home from "./pages/home";
import './app.css'
import Cart from "./pages/cart";
import Placeholder from "./pages/placeholder";
import Dish from "./components/dishes";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App=()=>{
return(
  <div>
    <Router>
    <Routes>
<Route path='/' element={<Home/>} />    
<Route path='/cart' element={<Cart/>} />  
      <Route path='/order' element={<Placeholder/>}/>
    </Routes>
    </Router>
  </div>
);
}
export default App;