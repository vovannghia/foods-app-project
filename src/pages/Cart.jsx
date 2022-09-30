import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shoppping-cart/cartSlice";
import { Link } from "react-router-dom";
import "../styles/cart-page.css";
const Cart = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   const totalAmount = useSelector((state) => state.cart.totalAmount);
   return (
      <Helmet title="Cart">
         <CommonSection title="Your Cart" />
         <section>
            <Container>
               <Row>
                  <Col lg="12">
                     {cartItems.length === 0 ? (
                        <h5 className="text-center">Your cart is empty</h5>
                     ) : (
                        <table className="table table-bordered">
                           <thead>
                              <tr>
                                 <th>Image</th>
                                 <th>Product Title</th>
                                 <th>Price</th>
                                 <th>Quantity</th>
                                 <th>Delete</th>
                              </tr>
                           </thead>
                           <tbody>
                              {cartItems.map((item) => (
                                 <Tr item={item} key={item.id} />
                              ))}
                           </tbody>
                        </table>
                     )}
                     <div className="mt-4">
                        <h6>
                           Subtotal:
                           <span className="cart_subtotal">
                              $ {totalAmount}
                           </span>
                        </h6>
                        <p>Taxes and shipping will calculate at checkout</p>
                     </div>
                     <div className="cart_page-btn">
                        <button className="addToCart_btn me-3">
                           <Link to="/foods">Continue Shopping</Link>
                        </button>
                        <button className="addToCart_btn">
                           <Link to="/checkout">Checkout</Link>
                        </button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};
const Tr = (props) => {
   const { id, img1, title, price, quantity } = props.item;
   const dispatch = useDispatch();
   const deleteItems = () => {
      dispatch(cartActions.deleteItem(id));
   };
   return (
      <tr>
         <td className="text-center cart_img-box">
            <img src={img1} alt="" />
         </td>
         <td className="text-center">{title}</td>
         <td className="text-center">${price}</td>
         <td className="text-center">{quantity}</td>
         <td className="text-center cart_item-del">
            <i className="ri-delete-bin-6-line" onClick={deleteItems}></i>
         </td>
      </tr>
   );
};
export default Cart;
