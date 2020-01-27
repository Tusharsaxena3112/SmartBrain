import React from "react";
import Tilt from 'react-tilt';
import  brain from"./brain.png";
import "./Logo.css";

const Logo=()=>{
	return (
			<div className="ma3">
				<Tilt className="Tilt ma2 br4 shadow-5 logo" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
 				<div className="Tilt-inner "><img style={{paddingTop:"25px"}}  alt="brain" src={brain}/></div>
				</Tilt>
			</div>

		)
}
export default Logo; 