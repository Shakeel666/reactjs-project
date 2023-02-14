// import Button from 'react-bootstrap/Button'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/navbar.component'
// import Data from './Data';
// import Background from '../background/background'
import Burger from '../burgers/burger.component'
import './Details.styles.scss'
import ShopItem from '../shop-item/shop-item'
import ShopPage from '../shop/shop.component'
// import Cart from '../item/Cart'
// import Menu from '../menu/menu'
// import CartDropdown from "../cart-dropdown/cart-dropdown"
// import Cart from '../item/Cart'
// import { useSelector } from 'react-redux'

const Details = () => {
  // const showCart = useSelector(store =>store.cartUi.cartIsVisible)
    // const history = useNavigate();

    // const userlogout = ()=>{
        // localStorage.removeItem("userlogin")
        // history("/");
    // }

    return (    
     <div>
    {/* <Button onClick={userlogout}>LogOut</Button> */}
      {/* <CartDropdown/> */}
    <Navbar/>
    {
      // showCart && <Cart/>
    }
{/* <Cart/> */}
    {/* <div className='container my-2'></div> */}
    {/* <div className='row'>
  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='Beef Fillet Burger.png' price='5.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger1.png' price='25.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger2.png' price='25.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger3.png' price='15.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger4.png' price='5.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger5.png' price='25.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger6.png' price='25.00' />
  </div>

  <div className='col-md-3'>
    <Burger title='Beef Fillet Burger ' description='Lorem ipsum dolor sit amet, consectetur aquis adipiscing elit ut aliquam, purus sit amet  venenatis.' image='./Beef Fillet Burger7.png' price='15.00' />
  </div>

   </div> */}
   
   {/* <div className='row'> */}
   {/* <div className='col-md-4'> */}
   <ShopPage/>
   {/* </div> */}
   {/* </div> */}

    </div>     
            
    )
}

export default Details