import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/fake-data/Products";
import ProductCard from "../components/UI/Product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";
const AllFoods = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [pageNumber, setPageNumber] = useState(0);
   const searchProducts = products.filter((item) => {
      if (searchTerm.valueOf === "") return item;
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
         return item;
   });
   const productPerPage = 12;
   const visitedPage = pageNumber * productPerPage;
   const displayPage = searchProducts.slice(
      visitedPage,
      visitedPage + productPerPage
   );
   const pageCount = Math.ceil(searchProducts.length / productPerPage);
   const changePage = ({ selected }) => {
      setPageNumber(selected);
   };
   return (
      <Helmet title="All-Foods">
         <CommonSection title="All Foods" />
         <section>
            <Container>
               <Row>
                  <Col lg="6" md="6" sm="6" className="mb-4">
                     <div className="search_widget">
                        <input
                           type="text"
                           placeholder="I'm looking for....."
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span>
                           <i className="ri-search-line"></i>
                        </span>
                     </div>
                  </Col>
                  <Col lg="6" md="6" sm="6" className="mb-4">
                     <div className="sorting_widget">
                        <select className="w-50">
                           <option>Default</option>
                           <option value="ascending">
                              Alphabetically, A-Z
                           </option>
                           <option value="descending">
                              Alphabetically, Z-A
                           </option>
                           <option value="high-price">HIGH PRICE</option>
                           <option value="low-price">LOW PRICE</option>
                        </select>
                     </div>
                  </Col>
                  {displayPage.map((item) => (
                     <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                        <ProductCard item={item} />
                     </Col>
                  ))}
                  <div>
                     <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={changePage}
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        containerClassName="paginationBtn"
                     />
                  </div>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default AllFoods;
