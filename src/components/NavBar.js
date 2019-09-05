import React ,{Component} from "react"
import "./NavBar.css"
import { Link, Element  } from 'react-scroll'



class NavBar extends Component{
    


    
    render() {
        return (
            <div className="nav">
<button   className="changetheme">Theme </button>

<Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} delay={0}>


<a className="a1" href="">About</a> </Link>
<Element name="About" className="element">
</Element>


<Link activeClass="active" to="Skill"
 spy={true} smooth={true} offset={50} duration={500} delay={0}>


<a className="a2" href="">Skill</a></Link>


<Element name="Skill" className="element">
</Element></div> 
        
        )
    }
}
export default NavBar