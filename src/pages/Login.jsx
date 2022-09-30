import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
   const loginEmailRef = useRef();
   const loginPassRef = useRef();
   const submitHandle = (e) => {
      e.preventDefault();
   };
   return (
      <Helmet title="login">
         <CommonSection title="Login" />
         <section>
            <Container>
               <Row>
                  <Col lg="6" md="6" sm="12" className="m-auto text-center">
                     <form className="form mb-5" onSubmit={submitHandle}>
                        <div className="form_group">
                           <input
                              type="email"
                              placeholder="Email"
                              ref={loginEmailRef}
                           />
                        </div>
                        <div className="form_group">
                           <input
                              type="password"
                              placeholder="Password"
                              ref={loginPassRef}
                           />
                        </div>
                        <button type="submit" className="addToCart_btn">
                           Login
                        </button>
                     </form>
                     <Link to="/register">
                        Don't have an account? Create an account
                     </Link>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Login;
