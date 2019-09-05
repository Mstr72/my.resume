import React ,{Component} from "react"
import Fullpage from "../components/Fullpage"
import data from "../data.json"
import "./AboutSections.css"
import "./TitlesAndIcons.css"
import DownIcon from "../components/DownIcon"
import { Link, Element  } from 'react-scroll'


class   AboutSections extends  Component  {
    render() {
        return (<div>       <Fullpage className="two">
        <h2>{data.sections[0].title}</h2> 
        
          <h3>{data.sections[0].items[0].content}<br/><br/></h3>
          <h3>{data.sections[0].items[1].content}<br/><br/></h3>
          <h3>{data.sections[0].items[2].content}<br/><br/></h3>
          <h3>{data.sections[0].items[3].content}<br/><br/></h3>
         </Fullpage>
         <div>
        
             <Link activeClass="active" to="Skill" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                 
               
                 <DownIcon 
                  icon={data.icons.down}
                 /></Link>
                    <Element name="Skill" className="element">
                       
                       </Element>
         </div></div>
     
        )
        
    }
    
}

        
export default AboutSections;
