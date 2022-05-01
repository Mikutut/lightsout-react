import React from "react";

import AppNavBar from "./AppNavBar";
import "../styles/AppHeader.scss";

function AppHeader() {
	return (
		<header id="AppHeader">
			<h1>Lights Out</h1>
			<h2>Make all the lights disappear!</h2>
			<AppNavBar />
		</header>
	);
}

export default AppHeader;