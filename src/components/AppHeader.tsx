import React from "react";
import Timer from "./Timer";

function AppHeader() {
	return (
		<header id="AppHeader">
			<h1>Lights Out</h1>
			<h2>Make all the lights disappear!</h2>
			<Timer />
		</header>
	);
}

export default AppHeader;