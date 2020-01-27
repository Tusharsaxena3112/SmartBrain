import React from "react";
import "./Navi.css"

const Nav=({onRouteChange}) => {
	return (
				<div>
					<nav>
						<p onClick={()=>onRouteChange("signin")} className="pointer underline black link pa3">Sign Out</p>
					</nav>
				</div>

			);
}
export default Nav;
			