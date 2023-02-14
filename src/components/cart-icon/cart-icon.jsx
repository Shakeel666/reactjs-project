import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../store/cart.actions";
// import cartDropdown from "../cart-dropdown/cart-dropdown";
// import { selectCartItemsCount } from "../../store/cart.selectors";
import './cart-icon.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
    <div className="cart-to" onClick={toggleCartHidden} >
          <img src='shopping.svg' className='shopping' alt='....'/>
          <span className="cart-badge">{itemCount}</span>
    
    </div>
    
    )
    }

const mapDispatchToProps= dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
//   });

//   const mapStateToProps = ({ cart: {cartItems}}) => ({
//     itemCount: cartItems.reduce(
//         (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
//     )
//   })
  

// export default CartIcon;

export default connect(null, mapDispatchToProps) (CartIcon);

// export default connect(null, mapDispatchToProps, mapStateToProps) (CartIcon);