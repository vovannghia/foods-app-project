import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppping-cart/cartSlice";
import "../../../styles/Product-card.css";
const ProductCard = (props) => {
   const { id, title, img1, price } = props.item;
   const dispatch = useDispatch();
   const addToCart = () => {
      dispatch(
         cartActions.addItem({
            id,
            title,
            img1,
            price,
         })
      );
   };
   return (
      <div className="product_item">
         <div className="product_img">
            <Link to={`/foods/${id}`}>
               <img src={img1} alt="product_img" className="w-50" />
            </Link>
            <div className="product_content">
               <h5>{title}</h5>
               <div className="d-flex align-items-center justify-content-between">
                  <span className="product_price">${price}</span>
                  <button className="addToCart_btn" onClick={addToCart}>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
