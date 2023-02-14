import React from "react";
// import CustomButton from "../custom/custom-button";
import { connect } from 'react-redux';
import { addItem } from "../../store/cart.actions";

import './shop-item.scss'

const ShopItem = ({ item, addItem }) => {
    const { name, price, imageUrl, description } = item;

    return (
            // <div className="row">
                // <div className="col-md-3">
        <div className='cards'>

            <div className="card" style={{width: "18rem"}}>
         <img src={imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
            
                <h5 className="card-title">{name}</h5>
                <span className="card-text">{description}</span>
                <p className="price">{price}</p>

                <button className='button' onClick={() => addItem(item)} ><img src="./Vector.png" alt="" /></button>

                {/* <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton> */}
            </div>
        </div>
    </div>
    // </div>
    // </div>
)
 }

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

// export default ShopItem;

export default connect( null, mapDispatchToProps)(ShopItem);