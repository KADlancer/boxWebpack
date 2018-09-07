import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Dashboard extends Component{
	render(){
		return(
			<div className="Dashboard">
				<h1> Hello Dashboard! </h1>
			</div>
		);
	}
}

export default hot(module)(Dashboard);
