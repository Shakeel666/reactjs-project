import React from 'react'
import './burger.styles.scss'
// import { useDispatch } from 'react-redux'
// import { cartActions } from '../../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItem } from "../../store/cart.actions"
// import addItem from




const Burger = (props ,{ addItem}) => {
    const {id, title, description, image, price} = props

    // const dispatch = useDispatch();

    // const addToCart = () => {
    //   dispatch(cartActions.addItem({
    //     id,
    //     title,
    //     image,
    //     price
    //   })
    //   );
    // };

  return (
    <div className='cards'>
        
      <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <img src='./Vector1.png' className='vector1' alt='..'/>
  <div className="card-body">
    <h5 className="card-title">
      <Link to={`/foods/${id}`}>{title}</Link>
     </h5>
    <p className="card-text">{description}</p> 
    <p className='price'>${price}</p>
    <button className='button' ><img src="./Vector.png" alt="" /></button>
    <button className="addTOCart__btn" onClick={addItem} >
            Add to Cart
    </button>
   </div> 
 </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

// export default Burger;

export default connect(null, mapDispatchToProps)(Burger);