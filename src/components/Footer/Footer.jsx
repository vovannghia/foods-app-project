import React from "react";
import logo from "../../assets/img/res-logo.png";
import "../../styles/Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
const Footer = () => {
   return (
      <footer className="footer">
         <Container>
            <Row>
               <Col lg="3" md="4" sm="6">
                  <div className="logo footer_logo text-start">
                     <img src={logo} alt="logo" />
                     <h5>Tasty Treat</h5>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam corporis deserunt repudiandae
                     </p>
                  </div>
               </Col>
               <Col lg="3" md="4" sm="6">
                  <h4 className="footer_title">Delivery Time</h4>
                  <ListGroup className="delivery_time-list">
                     <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Sunday - Thursday</span>
                        <p>10:00am - 11am</p>
                     </ListGroupItem>
                     <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Friday - Saturday</span>
                        <p>Off day</p>
                     </ListGroupItem>
                  </ListGroup>
               </Col>
               <Col lg="3" md="4" sm="6">
                  <h4 className="footer_title">Contact</h4>
                  <ListGroup className="delivery_time-list">
                     <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>
                           Location: ZindaBazar, Sylhet-3100, Bangladesh
                        </span>
                     </ListGroupItem>
                     <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Phone: 017125384</span>
                     </ListGroupItem>
                     <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Email: foodexample@gmail.com</span>
                     </ListGroupItem>
                  </ListGroup>
               </Col>
               <Col lg="3" md="4" sm="6">
                  <h4 className="footer_title">Newsletter</h4>
                  <p>Subscribe our newsletter</p>
                  <div className="newsletter">
                     <input type="email" placeholder="Enter your email" />
                     <span>
                        <i className="ri-send-plane-fill"></i>
                     </span>
                  </div>
               </Col>
            </Row>
            <Row className="mt-5">
               <Col lg="6" md="6">
                  <p className="copyright_text">
                     Copyright - 2022, website make by ***, All Rights Reserved.
                  </p>
               </Col>
               <Col lg="6" md="6">
                  <div className="social_link">
                     <p className="m-0">Follow: </p>
                     <span>
                        <i className="ri-facebook-fill"></i>
                     </span>
                     <span>
                        <i className="ri-github-fill"></i>
                     </span>
                     <span>
                        <i className="ri-youtube-fill"></i>
                     </span>
                     <span>
                        <i className="ri-linkedin-fill"></i>
                     </span>
                  </div>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;
