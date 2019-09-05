import React ,{Component} from 'react';
import TitlesAndIcons from "./sections/TitlesAndIcons"
import AboutSections from "./sections/AboutSections"
import SkillSections from "./sections/SkillSections"
import data from "./data.json"
import { SocialIcon } from "react-social-icons"
import Fullpage from "./components/Fullpage"
import NavBar from "./components/NavBar"
import SnowStorm from 'react-snowstorm';

import logo from './logo.svg';
import './App.css';
import { SIGKILL } from 'constants';
import { dirname } from 'path';
import { Link, Element } from "react-scroll";

class App extends Component {
  
  render(){
  return (
    <div className="App">

<div>
				<SnowStorm />
			</div>


<NavBar/>
<TitlesAndIcons />
<AboutSections/>
<SkillSections/>
    </div>
  );
}
}

export default App;
