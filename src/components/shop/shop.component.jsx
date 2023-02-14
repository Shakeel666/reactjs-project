import React from "react";
// import { Component } from "react";
import SHOP_DATA from "../../shop.data";
import ShopPreview from "../shop-preview/shop-preview";
import ShopPreviews from "../shop-preview/shop2";
import SHOP_DATAS from "../shop.datas";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
            collections2: SHOP_DATAS
        }
    }
    render() {
        const {collections} = this.state;
        const {collections2} = this.state
        return(
            
             <div className="shop-page"> 
                { 
                    collections.map(({id, ...otherCollectionProps}) => (
                        <ShopPreview key={id} {...otherCollectionProps} />
                        ))
                    }

                    { 
                    collections2.map(({id, ...otherCollectionProps}) => (
                        <ShopPreviews key={id} {...otherCollectionProps} />
                        ))
                    }
            
             </div> 
            
        )
    }
}

export default ShopPage;