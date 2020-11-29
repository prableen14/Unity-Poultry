import React from "react";
import about from "../assets/about.jpg";
import Workdone from "./workdone";
import Footer from "../component/footer";
import { Icon } from '@iconify/react';
import notePage from '@iconify-icons/emojione-v1/note-page';
function AboutUs(){ 

 return(
    <>  <div style={{paddingTop:"130px"}} class="container"> 
<h1 data-aos="fade-up" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            fontFamily:"Lexend Giga"}}>ABOUT US <Icon icon={notePage} style={{height: "60px", width:"40px"}}/></h1>
<div className="row">
<div className="col-lg-6">
<img  data-aos="fade-right"  className="img-fluid" src={about} />
</div>
<div className="col-lg-6 col-md-12">
                        <div >
                            
                            <p  data-aos="fade-right" style={{color:"#707B8E",margin:"0px 0px 56px"}}> We have a history of running the egg & poultry trading business across northern India for ages. Our family has been involved in the poultry farming, wholesale egg trading and related business since 1970. We have observed that there is a lack of transparency in the market regarding the pricing of eggs, broiler and feed ingredients etc. This website is a small initiative aimed at helping poultry farmers & traders by providing them daily market rates for eggs and other poultry products. We believe that providing daily poultry rates & updates will help both the small-scale and big-scale poultry farmers & traders to run their business more efficiently and hence will increase their profitability.</p>
                            
                        </div>
                        
                    </div>

</div>
<Workdone  data-aos="fade-right"/>

</div>
<Footer/>
</>)
}
export default AboutUs;
