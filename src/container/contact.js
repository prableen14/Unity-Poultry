import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "../CSS/contact.module.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "react-bootstrap";
import Footer from "../component/footer";
import {FaHome} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import { Row,Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import outlineContactMail from '@iconify-icons/ic/outline-contact-mail';

const useStyles = makeStyles(() => ({
    root: {
        background: "white",
        padding:"0 1%",
        borderRadius:"10px"
      },
      input: {
        color: "black",
        padding:"1%"
      }
    }));

const ContactUs = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const myclasses = useStyles();
    return(
             <>
              <div className={classes.Contact} id="contact" style={{paddingTop:"130px"}} class="container"> 
    <h1 data-aos="fade-up" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                textAlign:"center", 
                color:"brown",
                fontFamily:"Lexend Giga"}}>CONTACT US <Icon icon={outlineContactMail} style={{height: "60px", width:"40px"}} /> </h1>
           
                <br/>
                <h3 data-aos="fade-down" style={{textAlign:"center", color:"black" }}>Contact <span style={{color: "brown"}}>UNITY POULTRY</span> to get the Best Services at the lowest price in the entire industry.</h3>
                <br/>
                <br/>
                <Row>
                 <Col md={6} xs={12} style={{}} >
                <h4 data-aos="fade-up" style={{ color:"black", fontWeight:"bolder"}}>Drop your information:</h4>
                <TextField  data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Name" /><br/><br/>
                <TextField data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Phone number" /><br/><br/>
                <TextField data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Email" /><br/><br/>
                <TextField data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Your Message" /><br/><br/>
              
                  <Button style={{marginRight:"10px",borderRadius:"20px", backgroundColor:"#ffd54f", height:"60px",fontFamily:"Segoe UI",fontWeight:"bolder"}} variant="light">S U B M I T</Button>
            
               </Col>
            <Col md={6} xs={12}>
            <h4 data-aos="fade-up" style={{ color:"black",fontWeight:"bolder"}}>Reach us at:</h4>
             <div data-aos="fade-left">
               <FaHome size="2rem" color="black"/> 
                <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}>Karnal <br /> <span style={{color:"black"}} className="pl-5">India</span></span>
                 </div>
<div data-aos="fade-left" className="pt-5">
  <FaMobileAlt size="2rem" color="black"/> 
  <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}> 9896597003 <br /> <span style={{color:"black"}} className="pl-5"></span>9034997003</span>
   </div>
<div data-aos="fade-left" className="pt-5">
 <AiOutlineMail  size="2rem" color="black"/> 
  <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}>info@poultryapp.com<br /> <span style={{color:"grey"}} className="pl-5"></span></span>
   </div>
   
</Col>
</Row>
</div>

<div><Footer/></div>
        
          </>
    )
}
export default ContactUs;

