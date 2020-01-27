import React from "react";
import "./F.css";

const FaceRecoginition=({imageUrl,box})=>{
	return(
			<div className="center ma">
				<div className="absolute mt3">
					<img alt=" " id="inputimage" src={imageUrl} width="500px" height="auto"/>
					<div className="boundingBox" style={{ top:box.topRow,right:box.rightcol,bottom:box.bottomRow,left:box.leftcol}}></div>
				</div>
			</div>
		)
}
export default FaceRecoginition;