import React from "react";
import ReactDOM from "react-dom";
import MyReadApp from "./MyReadApp";
import {HashRouter} from "react-router-dom";
import "./index.css";

ReactDOM.render(
	<HashRouter>
		<MyReadApp />
	</HashRouter>,
	document.getElementById("root")
);
