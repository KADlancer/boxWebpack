import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import MyContainer from './components/_demo/myContainer'

class App extends Component{
	render(){
		return(
			<div className="App">
				<h1> Hello, World! </h1>

				<MyContainer
					title="Super Container!"
					onClick={e=>console.log("card clicked")}
				>
					<b>test</b>
					<div>
						Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</div>
				</MyContainer>
			</div>
		);
	}
}

export default hot(module)(App);
