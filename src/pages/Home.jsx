import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import ProductCard from "../components/UI/Product-card/ProductCard";
import Category from "../components/UI/Category/Category";
import TestimonialSlider from "../components/UI/Slider/TestimonialSlider";
import products from "../assets/fake-data/Products";
import "../styles/hero-section.css";
import "../styles/Home.css";
import heroImg from "../assets/img/hero.png";
import featureImg01 from "../assets/img/service-01.png";
import featureImg02 from "../assets/img/service-02.png";
import featureImg03 from "../assets/img/service-03.png";
import foodCategoryImg01 from "../assets/img/hamburger.png";
import foodCategoryImg02 from "../assets/img/pizza.png";
import foodCategoryImg03 from "../assets/img/bread.png";
import whyImg from "../assets/img/location.png";
import networkImg from "../assets/img/network.png";
const featureData = [
   {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laudantium.",
   },
   {
      title: "Super Dine in",
      imgUrl: featureImg02,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laudantium.",
   },
   {
      title: "Ease Pick Up",
      imgUrl: featureImg03,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laudantium.",
   },
];
const Home = () => {
   const [category, setCategory] = useState("ALL");
   const [allProducts, setAllProducts] = useState(products);
   const [hotPizza, setHotPizza] = useState([]);
   useEffect(() => {
      const filterPizza = products.filter((item) => item.category === "Pizza");
      const slicePizza = filterPizza.slice(0, 4);
      setHotPizza(slicePizza);
   }, []);
   useEffect(() => {
      if (category === "ALL") {
         setAllProducts(products);
      }
      if (category === "BURGER") {
         const filterProducts = products.filter(
            (item) => item.category === "Burger"
         );
         setAllProducts(filterProducts);
      }
      if (category === "PIZZA") {
         const filterProducts = products.filter(
            (item) => item.category === "Pizza"
         );
         setAllProducts(filterProducts);
      }
      if (category === "BREAD") {
         const filterProducts = products.filter(
            (item) => item.category === "Bread"
         );
         setAllProducts(filterProducts);
      }
   }, [category]);
   return (
      <Helmet title="Home">
         <section>
            <Container>
               <Row>
                  <Col lg="6" md="6">
                     <div className="hero_content">
                        <h5 className="mb-3">Easy way to make an order</h5>
                        <h1 className="hero__title mb-4">
                           <span>Hungry?</span> Just wait food at
                           <span> your door</span>
                        </h1>
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit. Esse culpa eaque cupiditate ex ab, excepturi
                           similique iure, quaerat suscipit commodi omnis
                           corporis quasi porro, neque quisquam natus
                           reiciendis? Doloremque, ipsa.
                        </p>
                        <div className="hero_btn">
                           <button className="order_btn">
                              Order now
                              <i className="ri-arrow-right-s-line"></i>
                           </button>
                           <button className="all_foods-btn">
                              <Link to="/foods">See all foods</Link>
                           </button>
                        </div>
                        <div className="hero_service d-flex align-items-center gap-5 mt-5">
                           <p className="d-flex align-items-center gap-2">
                              <span className="shipping_icon">
                                 <i className="ri-car-fill"></i>
                              </span>
                              No shipping charge
                           </p>
                           <p className="d-flex align-items-center gap-2">
                              <span className="shipping_icon">
                                 <i className="ri-shield-check-fill"></i>
                              </span>
                              100% secure checkout
                           </p>
                        </div>
                     </div>
                  </Col>
                  <Col lg="6" md="6">
                     <div className="hero_img">
                        <img src={heroImg} alt="hero-img" className="w-100" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section>
            <Category />
         </section>
         <section>
            <Container>
               <Row>
                  <Col className="text-center" lg="12">
                     <h5 className="feature_subtitle">What we serve</h5>
                     <h2 className="feature_title">Just sit back at home</h2>
                     <h2 className="feature_title">
                        we will <span>take care</span>
                     </h2>
                     <p className="mb-1 mt-4 feature_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis, similique!
                     </p>
                     <p className="feature_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci, iure.
                     </p>
                  </Col>
                  {featureData.map((item, index) => (
                     <Col lg="4" md="4" sm="6" key={index} className="mt-5">
                        <div className="feature_item text-center px-5 py-3">
                           <img
                              src={item.imgUrl}
                              alt="feature_item"
                              className="w-25 mb-3"
                           />
                           <h5 className="fw-bold mb-3">{item.title}</h5>
                           <p>{item.desc}</p>
                        </div>
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>
         <section>
            <Container>
               <Row>
                  <Col lg="12" className="text-center">
                     <h2>Popular Foods</h2>
                  </Col>
                  <Col lg="12">
                     <div className="food_category">
                        <button
                           onClick={() => setCategory("ALL")}
                           className={`all_foods_btn ${
                              category === "ALL" ? "foodBtnActive" : ""
                           }`}
                        >
                           All
                        </button>
                        <button
                           onClick={() => setCategory("BURGER")}
                           className={`all_foods_btn ${
                              category === "BURGER" ? "foodBtnActive" : ""
                           }`}
                        >
                           <img src={foodCategoryImg01} alt="" />
                           Burger
                        </button>
                        <button
                           onClick={() => setCategory("PIZZA")}
                           className={`all_foods_btn ${
                              category === "PIZZA" ? "foodBtnActive" : ""
                           }`}
                        >
                           <img src={foodCategoryImg02} alt="" />
                           Pizza
                        </button>
                        <button
                           onClick={() => setCategory("BREAD")}
                           className={`all_foods_btn ${
                              category === "BREAD" ? "foodBtnActive" : ""
                           }`}
                        >
                           <img src={foodCategoryImg03} alt="" />
                           Bread
                        </button>
                     </div>
                  </Col>
                  {allProducts.map((item, index) => (
                     <Col
                        lg="3"
                        md="4"
                        sm="6"
                        xs="6"
                        key={index}
                        className="mt-5"
                     >
                        <ProductCard item={item} />
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>
         <section className="why_choose-us">
            <Container>
               <Row>
                  <Col lg="6" md="6">
                     <img src={whyImg} alt="" className="w-100" />
                  </Col>
                  <Col>
                     <div className="why_tasty-treat">
                        <h2 className="tasty_treat-title">
                           Why <span>Tasty Treat</span>
                        </h2>
                        <p className="tasty_treat-desc">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Praesentium, debitis recusandae sapiente
                           aliquid, ipsam dolor deleniti eos at veniam vel optio
                           sit consectetur sunt corrupti ea beatae temporibus
                           aperiam! Voluptatem.
                        </p>
                        <ListGroup className="mt-4">
                           <ListGroupItem className="border-0 ps-0">
                              <p className="choose_us-title d-flex align-items-center gap-2">
                                 <i className="ri-checkbox-circle-line"></i>
                                 Fresh and Tasty foods
                              </p>
                              <p className="choose_us-desc">
                                 Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Dignissimos, porro.
                              </p>
                           </ListGroupItem>
                           <ListGroupItem className="border-0 ps-0">
                              <p className="choose_us-title d-flex align-items-center gap-2">
                                 <i className="ri-checkbox-circle-line"></i>
                                 Quality support
                              </p>
                              <p className="choose_us-desc">
                                 Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Dignissimos, porro.
                              </p>
                           </ListGroupItem>
                           <ListGroupItem className="border-0 ps-0">
                              <p className="choose_us-title d-flex align-items-center gap-2">
                                 <i className="ri-checkbox-circle-line"></i>
                                 Order from any location
                              </p>
                              <p className="choose_us-desc">
                                 Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Dignissimos, porro.
                              </p>
                           </ListGroupItem>
                        </ListGroup>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className="pt-0">
            <Container>
               <Row>
                  <Col lg="12" className="text-center mb-5">
                     <h2>Hot Pizza</h2>
                  </Col>
                  {hotPizza.map((item) => (
                     <Col lg="3" md="4" key={item.id}>
                        <ProductCard item={item} />
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>
         <section>
            <Container>
               <Row>
                  <Col lg="6" md="6">
                     <div className="testimonial ">
                        <h5 className="testimonial_subtitle mb-4">
                           Testimonial
                        </h5>
                        <h2 className="testimonial_title mb-4">
                           What our <span>customers</span> saying?
                        </h2>
                        <p className="testimonial_desc">
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit. Saepe nihil asperiores in nesciunt! Sapiente
                           debitis, earum tempore rem, praesentium,
                           reprehenderit aspernatur delectus velit quia dolores
                           error porro non hic ipsam!
                        </p>
                        <TestimonialSlider />
                     </div>
                  </Col>
                  <Col lg="6" md="6">
                     <img src={networkImg} alt="" className="w-100" />
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Home;
