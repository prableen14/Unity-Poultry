import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "../CSS/gallery.css";
import "react-alice-carousel/lib/alice-carousel.css";
import s1 from "../assets/s3.PNG"
import s2 from "../assets/s5.PNG"
import s3 from "../assets/s4.PNG"

function Gallery()
{
  return (
    <>
    <div className="Gallery">
    <div  style={{
            justifyContent:"center",
            fontFamily:"Lexend Giga",
            backe1oundColor:"black",
            padding:"4%"}}>
    <AliceCarousel  className="caraouselr" disableDotsControls="false" disableButtonsControls="false" infinite="boolean" autoPlay autoPlayInterval="2000">
      <img src={s1} style={{height:"550px", width:"260px"}}  className="sliderimg"/>
      <img src={s2} style={{height:"550px", width:"260px"}}  className="sliderimg"/>
      <img src={s3} style={{height:"550px", width:"260px"}}  className="sliderimg"/>
</AliceCarousel>
</div>
</div>
</>
  );
}
export default Gallery;
