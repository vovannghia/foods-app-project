import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shoppping-cart/CartUISlice";
import "../../../styles/shopping-cart.css";
const Cart = () => {
   const dispatch = useDispatch();
   const cartProducts = useSelector((state) => state.cart.cartItems);
   const toggleCart = () => {
      dispatch(cartUiActions.toggle());
   };
   const totalAmount = useSelector((state) => state.cart.totalAmount);
   return (
      <div>
         <div className="cart_container">
            <ListGroup className="cart">
               <div className="cart_close">
                  <span onClick={toggleCart}>
                     <i className="ri-close-fill"></i>
                  </span>
               </div>
               <div className="cart_item-list">
                  {cartProducts.length === 0 ? (
                     <h6 className="text-center mt-5">
                        No item added to the cart
                     </h6>
                  ) : (
                     cartProducts.map((item, index) => (
                        <CartItem item={item} key={index} />
                     ))
                  )}
               </div>
               <div className="cart_bottom ">
                  <h6>
                     Subtotal: <span>${totalAmount}</span>
                  </h6>
                  <button>
                     <Link to="/checkout">Checkout</Link>
                  </button>
               </div>
            </ListGroup>
         </div>
      </div>
   );
};

export default Cart;
