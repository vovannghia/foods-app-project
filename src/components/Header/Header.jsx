import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shoppping-cart/CartUISlice";
import logo from "../../assets/img/res-logo.png";
import "../../styles/Header.css";
const nav_link = [
   {
      display: "Home",
      path: "/home",
   },
   {
      display: "Foods",
      path: "/foods",
   },
   {
      display: "Cart",
      path: "/cart",
   },
   {
      display: "Contact",
      path: "/contact",
   },
];
const Header = () => {
   const menuRef = useRef(null);
   const headerRef = useRef(null);
   const dispatch = useDispatch();
   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
   const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
   const toggleCart = () => {
      dispatch(cartUiActions.toggle());
   };
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
         ) {
            headerRef.current.classList.add("header_shrink");
         } else {
            headerRef.current.classList.remove("header_shrink");
         }
         return () => window.removeEventListener("scroll");
      });
   }, []);
   return (
      <header className="header" ref={headerRef}>
         <Container>
            <div className="nav_wrapper">
               <Link to="/home">
                  <div className="logo">
                     <img src={logo} alt="logo" />
                     <h5>Tasty Treat</h5>
                  </div>
               </Link>

               {/* menu */}
               <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                  <div className="menu">
                     {nav_link.map((item, index) => (
                        <NavLink
                           onClick={toggleMenu}
                           to={item.path}
                           key={index}
                           className={(navClass) =>
                              navClass.isActive ? "active_menu" : ""
                           }
                        >
                           {item.display}
                        </NavLink>
                     ))}
                  </div>
               </div>
               {/* nav right icon */}
               <div className="nav_right">
                  <span className="cart_icon" onClick={toggleCart}>
                     <i className="ri-shopping-cart-2-fill"></i>
                     <span className="cart_badge">{totalQuantity}</span>
                  </span>
                  <span className="user">
                     <Link to="/login">
                        <i className="ri-user-fill"></i>
                     </Link>
                  </span>
                  <span className="mobile_menu" onClick={toggleMenu}>
                     <i className="ri-menu-line"></i>
                  </span>
               </div>
            </div>
         </Container>
      </header>
   );
};

export default Header;
