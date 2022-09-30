import React from "react";
import Slider from "react-slick";
import avatar01 from "../../../assets/img/ava-1.jpg";
import avatar02 from "../../../assets/img/ava-2.jpg";
import avatar03 from "../../../assets/img/ava-3.jpg";
import "../../../styles/slider.css";
const TestimonialSlider = () => {
   const setting = {
      dots: true,
      autoplay: true,
      isFinite: true,
      speed: 3000,
      autoplaySpeed: 3000,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <Slider {...setting}>
         <div>
            <h3>
               <p className="review_text">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  quam perferendis voluptatum consectetur qui culpa,
                  reprehenderit omnis sint accusantium laudantium. Corporis
                  exercitationem magni consequuntur. Vero nihil obcaecati totam
                  magnam quia!"
               </p>
               <div className="slider_content d-flex align-items-center gap-3">
                  <img src={avatar01} alt="" className="w-25 rounded" />
                  <h6>John Doe</h6>
               </div>
            </h3>
         </div>
         <div>
            <h3>
               <p className="review_text">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  quam perferendis voluptatum consectetur qui culpa,
                  reprehenderit omnis sint accusantium laudantium. Corporis
                  exercitationem magni consequuntur. Vero nihil obcaecati totam
                  magnam quia!"
               </p>
               <div className="slider_content d-flex align-items-center gap-3">
                  <img src={avatar02} alt="" className="w-25 rounded" />
                  <h6>Dave2D</h6>
               </div>
            </h3>
         </div>
         <div>
            <h3>
               <p className="review_text">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  quam perferendis voluptatum consectetur qui culpa,
                  reprehenderit omnis sint accusantium laudantium. Corporis
                  exercitationem magni consequuntur. Vero nihil obcaecati totam
                  magnam quia!"
               </p>
               <div className="slider_content d-flex align-items-center gap-3">
                  <img src={avatar03} alt="" className="w-25 rounded" />
                  <h6>Vinh Xo</h6>
               </div>
            </h3>
         </div>
      </Slider>
   );
};

export default TestimonialSlider;
