import React ,{Component} from "react"
import Fullpage from "../components/Fullpage"
import data from "../data.json"
import "./Skillsections.css"

class   SkillSections extends  Component  {
    render() {
        return (
            <Fullpage className="three">
    <div >
<div className="h3"><h3>{data.sections[1].title}</h3></div>
<div className="card-wrapper">
{
  data.sections[1].items.map(
    skill =>{
      return(<div className="card">
      <div className="image-card">
<img className="img1" src={skill.content.image}/> </div>

<div className="title-card">
       <h4>{skill.content.title}</h4> 
      </div>
      </div>
       
       
      )
    })
}
   
</div>

  </div>     
      
  
  


  </Fullpage>
        )
    }
}
export default  SkillSections;
