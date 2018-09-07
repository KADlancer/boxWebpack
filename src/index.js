import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Dashboard from "./components/pages/dashboard/Dashboard";

if (process.env.NODE_ENV !== 'production') {
	const {whyDidYouUpdate} = require('why-did-you-update');
	whyDidYouUpdate(React);
}

ReactDOM.render(
	<Dashboard />,
	document.getElementById("root")
);
