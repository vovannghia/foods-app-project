import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/Products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCard from "../components/UI/Product-card/ProductCard";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shoppping-cart/cartSlice";
import "../styles/product-details.css";
const FoodDetails = () => {
   const [tabs, setTabs] = useState("desc");
   const [enteredName, setEnteredName] = useState("");
   const [enteredEmail, setEnteredEmail] = useState("");
   const [reviewMsg, setReviewMsg] = useState("");
   const { id } = useParams();
   const dispatch = useDispatch();
   const product = products.find((product) => product.id === id);
   const [previewImg, setPreviewImg] = useState(product.img1);
   const { title, price, img1, category, desc } = product;
   const relatedProduct = products.filter((item) => category === item.category);
   const addItem = () => {
      dispatch(cartActions.addItem({ id, title, price, img1 }));
   };
   useEffect(() => {
      setPreviewImg(product.img1);
   }, [product]);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [product]);
   const submitHandle = (e) => {
      e.preventDefault();
      console.log(enteredName, enteredEmail, reviewMsg);
   };
   return (
      <Helmet title="product-details">
         <CommonSection title={title} />
         <section>
            <Container>
               <Row>
                  <Col lg="2" md="2">
                     <div className="product_image">
                        <div
                           className="img_item mb-3"
                           onClick={() => setPreviewImg(product.img1)}
                        >
                           <img src={product.img1} alt="" className="w-50" />
                        </div>
                        <div
                           className="img_item mb-3"
                           onClick={() => setPreviewImg(product.img2)}
                        >
                           <img src={product.img2} alt="" className="w-50" />
                        </div>
                        <div
                           className="img_item mb-3"
                           onClick={() => setPreviewImg(product.img3)}
                        >
                           <img src={product.img3} alt="" className="w-50" />
                        </div>
                     </div>
                  </Col>
                  <Col lg="4" md="4">
                     <div className="product_main-image">
                        <img src={previewImg} alt="" className="w-100" />
                     </div>
                  </Col>

                  <Col lg="6" md="6">
                     <div className="single_product-content">
                        <h2 className="product_title mb-3">{title}</h2>
                        <span className="product_price">
                           Price: <span>${price}</span>
                        </span>
                        <p className="category mb-5">
                           Category: <span>{category}</span>
                        </p>
                        <button className="addToCart_btn" onClick={addItem}>
                           Add to Cart
                        </button>
                     </div>
                  </Col>
                  <Col lg="12">
                     <div className="tabs d-flex align-items-center gap-3 py-2">
                        <h6
                           className={`${tabs === "desc" ? "tabs_active" : ""}`}
                           onClick={() => setTabs("desc")}
                        >
                           Description
                        </h6>
                        <h6
                           className={`${tabs === "rev" ? "tabs_active" : ""}`}
                           onClick={() => setTabs("rev")}
                        >
                           Review
                        </h6>
                     </div>
                     {tabs === "desc" ? (
                        <div className="tabs_content">
                           {" "}
                           <p>{desc}</p>
                        </div>
                     ) : (
                        <div className="tabs_form mb-3">
                           <div className="review pt-5">
                              <p className="user_name mb-0">Jhon Doe</p>
                              <p className="user_email">jhon1@gmail.com</p>
                              <p className="feedback_text">great product</p>
                           </div>
                           <div className="review">
                              <p className="user_name mb-0">Jhon Doe</p>
                              <p className="user_email">jhon1@gmail.com</p>
                              <p className="feedback_text">great product</p>
                           </div>
                           <div className="review">
                              <p className="user_name mb-0">Jhon Doe</p>
                              <p className="user_email">jhon1@gmail.com</p>
                              <p className="feedback_text">great product</p>
                           </div>
                           <form className="form" onSubmit={submitHandle}>
                              <div className="form_group">
                                 <input
                                    type="text"
                                    value={enteredName}
                                    onChange={(e) =>
                                       setEnteredName(e.target.value)
                                    }
                                    placeholder="Enter your name"
                                    required
                                 />
                              </div>
                              <div className="form_group">
                                 <input
                                    type="text"
                                    value={enteredEmail}
                                    onChange={(e) =>
                                       setEnteredEmail(e.target.value)
                                    }
                                    placeholder="Enter your Email"
                                    required
                                 />
                              </div>
                              <div className="form_group">
                                 <textarea
                                    rows={5}
                                    type="text"
                                    value={reviewMsg}
                                    onChange={(e) =>
                                       setReviewMsg(e.target.value)
                                    }
                                    placeholder="Write your review"
                                 />
                              </div>
                              <button type="submit" className="addToCart_btn">
                                 Submit
                              </button>
                           </form>
                        </div>
                     )}
                  </Col>
                  <Col lg="12" className="mb-5 mt-4">
                     <h2 className="related_Product-title">
                        You might aslo like
                     </h2>
                  </Col>
                  {relatedProduct.map((item) => (
                     <Col
                        lg="3"
                        md="4"
                        sm="6"
                        xs="6"
                        className="mb-4"
                        key={item.id}
                     >
                        <ProductCard item={item} />
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default FoodDetails;
