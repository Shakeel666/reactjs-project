import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom/custom-button";
// import { selectCartItems } from "../../redux/card/card.selectors";
import { selectCartItems } from "../../store/cart.selectors";
// import CheckoutPage

import { useNavigate } from "react-router";


const CartDropdown =  ({cartItems}) => {
    const navigate = useNavigate();
    return (
<div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.length ? (
    cartItems.map(cartItem => (
    <CartItem key={cartItem.id} item={cartItem}/>
  ))
):(
    <span className="empty-message">Your cart is empty.</span>  
)}
</div> 
    <CustomButton onClick={() => navigate('/checkout')}>GOTOCHECKOUT</CustomButton>

    {/* <CheckoutPage/> */}
</div>
)
}

// const mapStateToProps = ({cart: {cartItems}}) => ({
//         cartItems
//     })


    //  const mapStateToProps = state => ({
    //    cartItems: selectCartItems(state)
    // })



    const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
    })
    

// export default CartDropdown;

export default connect(mapStateToProps)(CartDropdown);