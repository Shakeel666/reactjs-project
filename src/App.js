import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/navbar/navbar.component';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Details from './components/home/Details';
// import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"    
import CheckoutComponent from './components/checkout-component/checkout-component';
// import ShopPage from './components/shop/shop.component';

function App() {
  return (
  <> 
  
    {/* <Header /> */}
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      {/* <Route path='/menu' element={<ShopPage/>}/> */}
      {/* <Route path='*' element={<Errror />} /> */}
      <Route path='/checkout' element={<CheckoutComponent/>}/>
    </Routes>
    
  </>
  );
}

export default App;
