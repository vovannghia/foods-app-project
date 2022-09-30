import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
   const signupFullNameRef = useRef();
   const signupEmailRef = useRef();
   const signupPassRef = useRef();
   const submitHandle = (e) => {
      e.preventDefault();
   };
   return (
      <Helmet title="register">
         <CommonSection title="Register" />
         <section>
            <Container>
               <Row>
                  <Col lg="6" md="6" sm="12" className="m-auto text-center">
                     <form className="form mb-5" onSubmit={submitHandle}>
                        <div className="form_group">
                           <input
                              type="text"
                              placeholder="Enter Full Name..."
                              ref={signupFullNameRef}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="email"
                              placeholder="Email"
                              ref={signupEmailRef}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="password"
                              placeholder="Password"
                              ref={signupPassRef}
                           />
                        </div>
                        <button type="submit" className="addToCart_btn">
                           Sign Up
                        </button>
                     </form>
                     <Link to="/register">Already have account? Login</Link>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Register;
