import React from 'react'
import "./Description.css"
function Description(props) {
  return (
    <div><div className="job_description">
    <div className="job_description_title">
      <h1>{props.title} :</h1>
    </div>
    <div className="job_description_content">
      <ul>
        {props.requirement.map((ele,index)=>{
            return(

                <li key={index}>{ele}</li>
            )
        })}
        
      </ul>
    </div>
  </div>
  <div className="required_skill"></div></div>
  )
}

export default Description