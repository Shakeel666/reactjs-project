import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import CheckoutItem from '../checkout/checkout-item';

// import {
//   selectCartItems,
//   selectCartTotal
// } from '../../store/cart.selectors';

import './checkout-component.scss';

const CheckoutComponent = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>

      <div className='header-block'>
        <span>Product</span>
      </div>

      <div className='header-block'>
        <span>Description</span>
      </div>

      <div className='header-block'>
        <span>Quantity</span>
      </div>

      <div className='header-block'>
        <span>Price</span>
      </div>

      <div className='header-block'>
        <span>Remove</span>
      </div>

    </div>

    {/* {
    cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))} */}
    <div className='total'>TOTAL: ${total}</div>

    {/* <CheckoutItem/> */}
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal
// });

export default CheckoutComponent;

// export default connect(mapStateToProps)(CheckoutComponent);