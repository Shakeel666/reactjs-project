import React from "react";
import ShopItem from "../shop-item/shop-item";

import './shop2.scss'


const  ShopPreviews = ({items}) => (
     <div className="shop-preview1">
         <div className="preview1">
             {items.filter((item, idx) => idx < 4) 
             .map(item => (
                <ShopItem key={item.id} item={item}/>
            ))}
            </div> 
        </div>
     
)

export default ShopPreviews;
