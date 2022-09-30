import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppping-cart/cartSlice";
import "../../../styles/cart-item.css";
const CartItem = ({ item }) => {
   const dispatch = useDispatch();
   const { id, title, price, img1, quantity, totalPrice } = item;
   const incrementItem = () => {
      dispatch(
         cartActions.addItem({
            id,
            title,
            price,
            img1,
         })
      );
   };
   const descrementItem = () => {
      dispatch(cartActions.removeItem(id));
   };
   const deleteItem = () => {
      dispatch(cartActions.deleteItem(id));
   };
   return (
      <div>
         <ListGroupItem className="border-0 cart_item">
            <div className="cart_item-info d-flex gap-2">
               <img src={img1} alt="" />
               <div className="cart_product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                  <div>
                     <h6 className="cart_product-title">{title}</h6>
                     <p className="cart_product-price d-flex align-items-center gap-4">
                        SL: {quantity} <span>${totalPrice}</span>
                     </p>
                     <div className="gap-4 increase_descrease-btn">
                        <span
                           className="descrease_btn"
                           onClick={descrementItem}
                        >
                           <i className="ri-subtract-line"></i>
                        </span>
                        <span className="quantity">{quantity}</span>
                        <span className="increase_btn" onClick={incrementItem}>
                           <i className="ri-add-line"></i>
                        </span>
                     </div>
                  </div>
                  <span className="delete_btn" onClick={deleteItem}>
                     <i className="ri-close-fill"></i>
                  </span>
               </div>
            </div>
         </ListGroupItem>
      </div>
   );
};

export default CartItem;
