import React from "react";
import eggs from "../assets/eggs.jpg";
import eggs2 from "../assets/eggs2.jpg";
import googleplay from '../assets/googleplay.png';
import Footer from "../component/footer";
import { Icon } from '@iconify/react';
import { Col } from "react-bootstrap";
import servicesIcon from '@iconify-icons/flat-color-icons/services';
import "./service.css";
function Services(){ 

 return(
    <>  <div style={{paddingTop:"130px"}} class="container"> 
<h1 data-aos="fade-up" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            textAlign:"center",
            fontFamily:"Lexend Giga"}}>OUR SERVICES <Icon icon={ servicesIcon } style={{height: "60px", width:"40px"}}/></h1>
            <h3  data-aos="fade-up" style={{textAlign:"center",fontStyle: "italic",  color:"white"}}>&nbsp;<span style={{backgroundColor:"black"}}> " Our Poultry App is one of the leading Poultry Rate SMS provider in India."&nbsp;</span></h3>
<div className="row">
<div className="col-lg-6">
<img  data-aos="fade-right"  className="img-fluid" src={eggs} />
</div>
<div className="col-lg-6 col-md-12">
                        <div >
                        <h4 data-aos="fade-right">EGG TRADING</h4>
                            <p  data-aos="fade-right" style={{backgroundColor:"#f5f5f5",margin:"0px 0px 56px"}}> We have a history of running the egg & poultry trading business across northern India for ages. Our family has been involved in the poultry farming, wholesale egg trading and related business since 1970. We have observed that there is a lack of transparency in the market regarding the pricing of eggs, broiler and feed ingredients etc. This website is a small initiative aimed at helping poultry farmers & traders by providing them daily market rates for eggs and other poultry products. We believe that providing daily poultry rates & updates will help both the small-scale and big-scale poultry farmers & traders to run their business more efficiently and hence will increase their profitability.</p>
                        </div>
                        
                    </div>

</div>
<div className="row">
<div className="col-lg-6">
<img  data-aos="fade-right"   className="img-fluid imgg" src={eggs2} />
</div>
<div className="col-lg-6 col-md-12">
                        <div >
                        <h4 data-aos="fade-right">POULTRY TRADING</h4>
                            <p  data-aos="fade-right" style={{backgroundColor:"#f5f5f5",margin:"0px 0px 56px"}}> We have a history of running the egg & poultry trading business across northern India for ages. Our family has been involved in the poultry farming, wholesale egg trading and related business since 1970. We have observed that there is a lack of transparency in the market regarding the pricing of eggs, broiler and feed ingredients etc. This website is a small initiative aimed at helping poultry farmers & traders by providing them daily market rates for eggs and other poultry products. We believe that providing daily poultry rates & updates will help both the small-scale and big-scale poultry farmers & traders to run their business more efficiently and hence will increase their profitability.</p>
                        </div>
                        
                    </div>

</div><br></br>
<div className="boxx">
                  
                  <h4 data-aos="fade-up" style={{ color:"black", fontWeight:"bolder"}}>The Final Destination Of Indian Poultry Rates</h4>
                 <h3 data-aos="fade-up" style={{ color:"black", fontWeight:"bolder"}}>Indian Poultry Rates Via SMS!</h3>
 
 <h5 data-aos="fade-up" style={{ color:"black", fontWeight:"bolder"}}>We provide hourly poultry rate updates on SMS for many cities in India.<br></br> Our Poultry SMS Alerts are amongst the most accurate ones and trusted by egg & poultry traders in India.<br></br> Subscribe to our Poultry SMS Alerts & stay updated.</h5>
                 
                 
                 <Col md={7} xs={12}>
                 <a href={'https://play.google.com/store/apps/details?id=com.unity.poultry'}><img  src={googleplay} style={{height:"60px"}} /></a>
                 </Col>
                 
                 </div>
</div>
  <br></br>
<Footer/>
</>
)
}
export default Services;
