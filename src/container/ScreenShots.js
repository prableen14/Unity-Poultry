import React from "react";
import Slider from "react-slick";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.PNG";
import s4 from "../assets/s4.PNG";
import s5 from "../assets/s5.PNG";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./screenshot.css";

export default class ScreenShots extends React.Component {
     
renderArrows = () => {
return (
<div className="slider-arrow">
<ButtonBase
className="arrow-btn prev"
onClick={() => this.slider.slickPrev()}
>
<ArrowLeft style={{color:"black", border:"5px black solid"}}/>
</ButtonBase>
<ButtonBase
className="arrow-btn next"
onClick={() => this.slider.slickNext()}
>
<ArrowRight style={{color:"black", border:"5px black solid"}} />
</ButtonBase>
</div>
);
};
render() {
    var settings = {
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]};
return (
<>
<div className="App"><br></br><br></br><br></br><br></br><br></br><br></br>
<h3 style={{ textAlign: "center",padding:"4%", display:"flex", justifyContent:"center", fontWeight:"bolder", fontSize:"41px", fontFamily:"Italics" }}>SCREENSHOTS</h3>
<h4 className="container" style={{ textAlign: "center"}}>It's easy to track your time by project and task manually.</h4><br></br>
<div style={{ position: "relative", marginTop: "2rem" }}>
{this.renderArrows()}
<Slider {...settings}
ref={c => (this.slider = c)}
dots={true}
arrows={false}
centerMode={true}
slidesToShow={4}
>
<img src={s1}/>
<img src={s3}/>
<img src={s2}/>
<img src={s4}/>
<img src={s5}/>
</Slider><br></br>
</div>
</div>
</>
);
}
}
