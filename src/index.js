import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'

import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
<Router>
<Home />
</Router>
,document.getElementById("root"));
