import React from "react"

import "./Styles.css"

export default function Notes(props){
    return (<div className="notes">
        {/* <h1>this is the notes title</h1>
        <p> this is the notes content</p> */}
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>)
}


