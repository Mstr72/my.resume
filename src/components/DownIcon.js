import React , {Component} from 'react';
import "./DownIcon.css"
const DownIcon = (props) =>{
    return(
        <div className="bigdown">
    
        <img  className="down" src={props.icon} alt="down"/>
          
  </div>
  
    )

}
export default DownIcon