import React from "react";
import useGoToPath from "../hooks/useGoToPath";

import "../styles/PageNotFoundRoute.scss";

function PageNotFoundRoute() {
	const goToPath = useGoToPath();

	return (
		<div className="Route" id="PageNotFoundRoute">			
			<h1>Page not found!</h1>
			<button
				onClick={() => goToPath("/")}
			>Go to main page</button>
		</div>
	);
};

export default PageNotFoundRoute;