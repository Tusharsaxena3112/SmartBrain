import React from "react";
import "./ImageLink.css";

const ImageLinkForm=({onInputChange,onButtonPress})=>{
	return (
			<div className="f3" >
				<p className="center white">
					{"This magic Brain will detects face in your pictures.Try it.."}
				</p>
				<div className="center">
					<div className="form pa4 br3 shadow-5">
						<input className="f4 pa2 w-70" type="text" onChange={onInputChange} />
						<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonPress} >Detect </button>
					</div>
				</div>
			</div>

		);
}
export default ImageLinkForm; 