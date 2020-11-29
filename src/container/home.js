import React from 'react';
import AboutUs from "./about";
import ContactUs from "./contact";
import Services from "./Services";
import Privacy from "./Privacy";
import Header from "./navbar";
import MarketPrices from "./MarketPrices";
import Review from "./review";
import User from "./user";
import Land from "./land";

import {
  Switch,
  Route
} from "react-router-dom";

function Home() {
  return (
    <div className="App">        
        <Header/>
        <Switch>
          <Route exact path="/" component={Land}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/Services" component={Services}/>
          <Route path="/user" component={User}/>
          <Route path="/MarketPrices" component={MarketPrices}/>
          <Route path="/review" component={Review}/>
          <Route path="/Privacy" component={Privacy}/>
          <Route path="/contact" component={ContactUs}/>
        </Switch>
    </div>
  );
}
export default Home;
