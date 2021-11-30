import React  from "react";
import Header from "./Header"
import Footer  from "./Footer";
import Notes from "./Note";

import notes from "./notes"
import "./Styles.css"


function notesDetails(notes){
   return  <Notes  key={notes.key}title={notes.title} content={notes.content}/>
}

export default function App(){
    return (<div> 
        <Header/>
        {notes.map(notesDetails)}
        <Footer/>
    </div>)
}