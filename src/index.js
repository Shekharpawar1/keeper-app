import React, { StrictMode}  from "react";
import ReactDom from "react-dom";

import "./style.css"

//importing the module from the different js files
import App from "./App"


const rootElement=document.getElementById("root");

ReactDom.render(<StrictMode><App/></StrictMode>,rootElement)
