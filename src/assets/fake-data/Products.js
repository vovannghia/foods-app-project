//import all images
import product_01_img_01 from "../img/product_01.jpg";
import product_01_img_02 from "../img/product_01.1.jpg";
import product_01_img_03 from "../img/product_01.3.jpg";
// -----------------------------------------------------
import product_02_img_01 from "../img/product_2.1.jpg";
import product_02_img_02 from "../img/product_2.2.jpg";
import product_02_img_03 from "../img/product_2.3.jpg";
// -----------------------------------------------------
import product_03_img_01 from "../img/product_3.1.jpg";
import product_03_img_02 from "../img/product_3.2.jpg";
import product_03_img_03 from "../img/product_3.3.jpg";
// -----------------------------------------------------
import product_04_img_01 from "../img/product_4.1.jpg";
import product_04_img_02 from "../img/product_4.2.jpg";
import product_04_img_03 from "../img/product_4.3.png";
// -----------------------------------------------------
import product_05_img_01 from "../img/product_04.jpg";
import product_05_img_02 from "../img/product_08.jpg";
import product_05_img_03 from "../img/product_09.jpg";
// -----------------------------------------------------
import product_06_img_01 from "../img/bread(1).png";
import product_06_img_02 from "../img/bread(2).png";
import product_06_img_03 from "../img/bread(3).png";
// -----------------------------------------------------
const products = [
   {
      id: "01",
      title: "Chicken Burger",
      price: 24.0,
      img1: product_01_img_01,
      img2: product_01_img_02,
      img3: product_01_img_03,
      category: "Burger",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "02",
      title: "Vegetarian Pizza",
      price: 115.0,
      img1: product_02_img_01,
      img2: product_02_img_02,
      img3: product_02_img_03,
      category: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "03",
      title: "Double Cheese Margherita",
      price: 110.0,
      img1: product_03_img_01,
      img2: product_03_img_02,
      img3: product_03_img_03,
      category: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "04",
      title: "Maxican Green Wave",
      price: 110.0,
      img1: product_04_img_01,
      img2: product_04_img_02,
      img3: product_04_img_03,
      category: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "05",
      title: "Cheese Burger",
      price: 24.0,
      img1: product_05_img_01,
      img2: product_05_img_02,
      img3: product_05_img_03,
      category: "Burger",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "06",
      title: "Royal Cheese Burger",
      price: 24.0,
      img1: product_01_img_01,
      img2: product_01_img_02,
      img3: product_01_img_03,
      category: "Burger",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "07",
      title: "Seafood Pizza",
      price: 115.0,
      img1: product_02_img_01,
      img2: product_02_img_02,
      img3: product_02_img_03,
      category: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "08",
      title: "Thin Cheese Pizza",
      price: 110.0,
      img1: product_03_img_01,
      img2: product_03_img_02,
      img3: product_03_img_03,
      category: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "09",
      title: "Pizza With Mushroom",
      price: 110.0,
      img1: product_04_img_01,
      img2: product_04_img_02,
      img3: product_04_img_03,
      category: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "10",
      title: "Classic Hamburger",
      price: 24.0,
      img1: product_05_img_01,
      img2: product_05_img_02,
      img3: product_05_img_03,
      category: "Burger",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "11",
      title: "Crunchy Bread",
      price: 35.0,
      img1: product_06_img_01,
      img2: product_06_img_02,
      img3: product_06_img_03,
      category: "Bread",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "12",
      title: "Delicious Bread",
      price: 35.0,
      img1: product_06_img_01,
      img2: product_06_img_02,
      img3: product_06_img_03,
      category: "Bread",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
   {
      id: "13",
      title: "Loaf Bread",
      price: 35.0,
      img1: product_06_img_01,
      img2: product_06_img_02,
      img3: product_06_img_03,
      category: "Bread",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
   },
];
export default products;
