import React from "react";

const Rank=({name,entries})=>{
	return (
			<div className="center">
				<div className=" Blue f1">
					{`${name},your current rank is....${entries}.`}
				</div>
			</div>


		);
}
export default Rank; 