import React from "react";
import ShopItem from "../shop-item/shop-item";

import './shop-preview.scss'
// import ShopPreviews from "./shop-previews";


const  ShopPreview = ({items}) => (
     <div className="shop-preview">
        <div className="preview">
        {/* <div className="row"> */}
            {/* <div className="col-md-3">  */}
            {items
            .filter((item, idx) => idx < 4)
            .map(item => (
                <ShopItem key={item.id} item={item}/>
            ))}
            {/* </div> */}
            {/* </div> */}
             </div>
             

        {/* <div className="preview1">
             {items.filter((item, idx) => idx > 3) 
             .map(item => (
                <ShopItem key={item.id} item={item}/>
            ))}
            </div> */}

        </div>
     
)

export default ShopPreview;
