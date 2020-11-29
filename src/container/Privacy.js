import React from "react";
import { Row,Col } from "react-bootstrap";
import Footer from "../component/footer";
import Icon from '@iconify/react';
import twotonePrivacyTip from '@iconify-icons/ic/twotone-privacy-tip';

export default function Privacy(){
    return(
        <>
        <div style={{paddingTop:"130px"}} class="container"> 
<h1 data-aos="fade-up" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            color:"brown",
            fontFamily:"Lexend Giga",textAlign:"center"}}>PRIVACY POLICY <Icon icon={twotonePrivacyTip} style={{height: "60px", width:"40px"}} /> </h1>
      
<Row>
                 
                <h5 className="container" style={{ color:"black", fontWeight:"bold" }}>Jugadu.in built the Unity PoultryApp app as a Free app. This service is provided by Jugadu.in at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at PoultryApp unless otherwise defined in this Privacy Policy.</h5>

<br></br>
                 <Col md={6} xs={12} style={{}} >
                 <h2 style={{color:"brown" , fontSize:"25px" }}>INFORMATION COLLECTION AND USE</h2>
                 <h5  style={{ color:"black", fontWeight:"normal"}}>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. The app does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app</h5>
</Col>
    <Col md={6} xs={12} style={{}} >
                 <h2 style={{color:"brown" , fontSize:"25px" }}>LOG DATA</h2>
                 <h5  style={{ color:"black", fontWeight:"normal"}}>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. The app does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app</h5>
</Col>
<br></br>
                 <Col md={6} xs={12} style={{}} >
                 <h2 style={{color:"brown" , fontSize:"25px"  }}>COOKIES</h2>
                 <h5  style={{ color:"black", fontWeight:"normal"}}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</h5>
</Col>
    <Col md={6} xs={12} style={{}} >
                 <h2 style={{color:"brown", fontSize:"25px" }}>SECURITY</h2>
                 <h5  style={{ color:"black", fontWeight:"normal"}}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</h5>
</Col>
</Row>

        </div>
        <Footer/>
          </>
    )
}

