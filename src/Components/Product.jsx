import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider';


const Product = ({ Product }) => {
    const { dispatch } = useContext(CartContext);
    return (
        <div className="col">
            <div className="card h-75" >
                <img src={Product.thumbnail} class="card-img-top h-50" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">{Product.title} </h4>
                    <h5 class="">${Product.price}</h5>
                    <button class="btn btn-primary"
                        onClick={() => dispatch({ type: "Add", product: Product })}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product