import React from "react";
import './heading.css'

function Heading(props){
    return(
        <div className="text-center heading">
            <h1 className="heading-main">{props.subsystem}</h1>
        </div>
    )
}

export default Heading;
