import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../CSS/review.css";
import Footer from "../component/footer";
import { Icon } from '@iconify/react';
import codeReview16 from '@iconify-icons/octicon/code-review-16';

export default class Review extends Component {
  render() {
    return (
      <>
      <div style={{paddingTop:"130px"}} class="container"> 
    <h1 data-aos="fade-up" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"35px",
                flexDirection:"column",
                fontFamily:"Lexend Giga"}}>TESTIMONIALS <Icon icon={codeReview16} style={{height: "60px", width:"40px"}} /> </h1>
    <h4 data-aos="fade-down" style={{textAlign:"center", fontFamily:"Lexend Giga", fontWeight:"bolder"}}>Check out what other users think about our App :)</h4>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Avantika</h3>
            <p>
            Unity Poultry App helped in our Poultry business alot. Easily accessible and understandable features which makes it as the top app for poultry and boiler rate prices.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Vaibhav</h3>
            <p>
            Great facilities provided by this Poultry app. One can easily place order with best time supply.Thanks for catering us Unity Poultry.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Rohan</h3>
            <p>
            One of the best app for poultry business. 
Easily Understood features and the documentation of app is widely detailed which makes it best for use.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    
    
    <Footer/>
  </>
    );
  }
}
