import React from "react";
import "./land.css";
import googleplay from '../assets/googleplay.png';
import ios from '../assets/ios.png';
import "./style.css";
import Footer from "../component/footer";
import "./w3.css"
import  Icon  from '@iconify/react';
import chickenIcon from '@iconify-icons/emojione/chicken';
import Banner from "./banner";
import Contact from "./contactus";
import Gallery from "./Gallery";
import ScreenShots from "./ScreenShots";


function Land(){
    return (
    <>

<div className="context" >
<div className="container">

<div className="row">
    <div className="col-lg-6  " style={{marginTop:"110px" }}><br></br>
    <h1  className="Heading w3-animate-left "  style={{display:"flex", alignItems:"center",
                justifyContent:"center"}}  >Unity<br /> Poultry <Icon icon={chickenIcon} /></h1><br></br>  
    <div>
  <p className="para" style={{color:"white",fontSize:"19px", fontFamily:"Lexend Giga", textAlign:"center"}}>Our Motto and intensions are just clear.
 <br></br>We are here to educate users, bringing awareness to users in the Poultry Boiler rate industry.
<br></br>We provide the user a vast range of options to fulfil the needs of all the Industry to achieve the desired output at any level.
<br></br><span style={{fontWeight:"bolder"}}> In Business Since 2009.</span>
</p>
&nbsp;&nbsp;&nbsp;<a href={'https://play.google.com/store/apps/details?id=com.unity.poultry'}><img className="google" src={googleplay} style={{height:"180px",paddingTop:"100px"}} /></a>
<img src={ios} className="apple" style={{height:"153px",width:"210px", paddingTop:"100px",paddingLeft:"25px"}}/>
</div> 

    </div>
   <div className="d-none d-sm-block col-sm-6" style={{marginTop:"60px"}}><br></br>
   
       <div className="gallery">
   <Gallery/>
  </div>
   </div> 
</div>
</div>
</div>  
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
     <ScreenShots />
      <Banner/>
    <Contact/>
    <Footer/>
    </>
   
)
}
export default Land;
