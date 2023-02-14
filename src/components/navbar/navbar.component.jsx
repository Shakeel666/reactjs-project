import React from 'react'
import { connect } from 'react-redux'
import './navbar.styles.scss'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import Menu from '../menu/menu';
// import { Link } from 'react-router-dom';
import { selectCartHidden } from '../../store/cart.selectors';
import { createStructuredSelector } from 'reselect';
// import CheckoutComponent from '../checkout-component/checkout-component';


const Navbar = ({hidden}) => {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar- bg-white">
  <div className="container-fluid">
  <img src="./butter.png" className='logo' alt=""/>
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <div className="collapse-navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="menu"><b>Menu</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/deals"><b>Deals</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about"><b>AboutUs</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact"><b>ContactUs</b></a>
        </li>
        
      </ul>
        </div>
       
        <CartIcon/>
        <Menu/>
        
  </div>
      {
         hidden ? null: <CartDropdown/>
      } 

      {/* <CheckoutComponent/> */}
</nav>



 <div className='first'> 
 <img src="./Rectangle 4.png" className='size' alt=""/> 
 <p className='menu'>Our Menu</p>
 </div> 


 <div className='pizza'>
  <img src='./pizza.png' className='pizza-img' alt=''/>
  <h5 className='pizza-text'>Pizza</h5>
 </div>

 <div className='sandwich'>
  <img src='./Sandwich.png' className='sandwich-img' alt=''/>
  <h5 className='sandwich-text'>Sandwich</h5>
 </div>

 <div className='Burgers'>
  <img src='./Burgers.png' className='Burgers-img' alt=''/>
  <h5 className='Burgers-text'>Burgers</h5>
 </div>

 <div className='Appetizers'>
  <img src='./Appetizers.png' className='Appetizers-img' alt=''/>
  <h5 className='Appetizers-text'>Appetizers</h5>
 </div>

 <div className='Sea-Food'>
  <img src='./Sea Food.png' className='Sea-Food-img' alt=''/>
  <h5 className='Sea-Food-text'>Sea Food</h5>
 </div>

 <div className='Japenese'>
  <img src='./Japenese.png' className='Japenese-img' alt=''/>
  <h5 className='Japenese-text'>Japenese</h5>
 </div>

 <div className='Rice-Noodles'>
  <img src='./Rice & Noodles.png' className='Rice-Noodles-img' alt=''/>
  <h5 className='Rice-Noodles-text'>Rice & Noodles</h5>
 </div>

 <div className='Drinks'>
  <img src='./Drinks.png' className='Drinks-img' alt=''/>
  <h5 className='Drinks-text'>Drinks</h5>
 </div>



   </>
  );
}

// const mapStateToProps = ({cart: {hidden}}) => ({
//   hidden
// })

const mapStateToProps = createStructuredSelector ({
  hidden: selectCartHidden
})

// export default Navbar;

export default connect(mapStateToProps)(Navbar) 