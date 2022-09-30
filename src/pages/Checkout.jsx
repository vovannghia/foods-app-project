import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
const Checkout = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");
   const [postalCode, setPostalCode] = useState("");
   const shippingInfo = [];
   const submitHandle = (e) => {
      e.preventDefault();
      const userShippingAddress = {
         name: name,
         email: email,
         phone: phoneNumber,
         country: country,
         city: city,
         postalCode: postalCode,
      };
      shippingInfo.push(userShippingAddress);
      console.log(shippingInfo);
   };
   const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
   const shippingCost = 30;
   const totalAmount = cartTotalAmount + Number(shippingCost);
   return (
      <Helmet title="Checkout">
         <CommonSection title="Checkout" />
         <section>
            <Container>
               <Row>
                  <Col lg="8" md="6">
                     <h6>Shipping Address</h6>
                     <form className="checkout_form" onSubmit={submitHandle}>
                        <div className="form_group">
                           <input
                              type="text"
                              placeholder="Enter Your Name"
                              onChange={(e) => setName(e.target.value)}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="email"
                              placeholder="Enter Your Email"
                              onChange={(e) => setEmail(e.target.value)}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="number"
                              placeholder="Phone Number"
                              onChange={(e) => setPhoneNumber(e.target.value)}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="text"
                              placeholder="Country"
                              onChange={(e) => setCountry(e.target.value)}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="text"
                              placeholder="City"
                              onChange={(e) => setCity(e.target.value)}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="text"
                              placeholder="Postal Code"
                              onChange={(e) => setPostalCode(e.target.value)}
                           />
                        </div>
                        <button className="addToCart_btn btns">Payment</button>
                     </form>
                  </Col>
                  <Col lg="4" md="6">
                     <div className="checkout_bill">
                        <div>
                           <h6 className="d-flex align-items-center justify-content-between mb-3">
                              Subtotal: <span>${cartTotalAmount}</span>
                           </h6>
                           <h6 className="d-flex align-items-center justify-content-between">
                              Shipping: <span>${shippingCost}</span>
                           </h6>
                           <div className="checkout_total">
                              <h5 className="d-flex align-items-center justify-content-between">
                                 Total: <span>${totalAmount}</span>
                              </h5>
                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Checkout;
