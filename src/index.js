import React, {Fragment, StrictMode}  from "react";
import ReactDom from "react-dom";

import "./style.css"

//importing the module from the different js files
//import App from "./App"
import Header from "./Header"
import Footer  from "./Footer";

const rootElement=document.getElementById("root");
const element=(<React.Fragment>
  <Header/>
  <Footer/>
</React.Fragment>)

// ReactDom.render({return (
//   <React.Fragment>
//     <Header/>
//     <Footer/>
//   </React.Fragment>
// );
// },rootElement)

ReactDom.render(element,rootElement)
 


