import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "../CSS/contactus.module.css";
import {FaHome} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import { Icon } from '@iconify/react';
import outlineContactMail from '@iconify-icons/ic/outline-contact-mail';
import {AiOutlineMail} from "react-icons/ai";
import "./contactus.css"



const Contact = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    
    return(
             <>
            <div className={classes.ContactUs}  style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                fontFamily:"Lexend Giga",
                backgroundColor:"white",
                backgroundSize:"100% 100%",
               color:"brown"
            }}>
                <h1 data-aos="fade-up" style={{textAlign:"center",fontFamily:"Lexend Giga"}}>CONTACT US <Icon icon={outlineContactMail} style={{height: "60px", width:"40px"}} /> </h1>
                <h3 data-aos="fade-down" style={{textAlign:"center", color:"black" ,fontFamily:"Lexend Giga"}}>We are happy to assist you.</h3>
                <h5 data-aos="fade-down" style={{textAlign:"center", color:"black" ,fontFamily:"Lexend Giga"}}>Reach Us At:</h5>

                <br/>
                <br/>
                
                
            
            <div className="outset" >   
             <div data-aos="fade-left" style={{backgroundColor:"white"}}>
               <FaHome size="2rem" color="black"/> 
                <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}>Karnal <br /> <span style={{color:"black"}} className="pl-5">India</span></span>
                 </div>
<div data-aos="fade-left" className="pt-5" style={{backgroundColor:"white"}}>
  <FaMobileAlt size="2rem" color="black"/> 
  <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}> 9896597003 <br /> <span style={{color:"black"}} className="pl-5"></span>9034997003</span>
   </div>
   <div data-aos="fade-left" className="pt-5">
 <AiOutlineMail  size="2rem" color="black"/> 
  <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}>info@poultryapp.com<br /> <span style={{color:"grey"}} className="pl-5"></span></span>
   </div>
   
</div>

</div>


        
          </>
    )
}
export default Contact;
