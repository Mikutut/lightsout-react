import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useGoToPath from "../hooks/useGoToPath";

import "../styles/AppNavBar.scss";

/* eslint-disable react-hooks/exhaustive-deps */

interface IAppNavBarBtn {
	name: string;
	label: string;
	path: string;
}

function AppNavBar() {
	const location = useLocation();
	const goToPath = useGoToPath();

	useEffect(() => {
		console.log(location);
	}, []);

	const navBarBtns: IAppNavBarBtn[] = [
		{
			name: "home",
			label: "Home",
			path: "/"
		},
		{
			name: "about",
			label: "About",
			path: "/about"
		}
	];

	return (
		<nav id="AppNavBar">
			{
				navBarBtns.map((v, k) => {
					return (<button className={`AppNavBarBtn ${v.path === location.pathname ? "AppNavBarCurrentRoute" : ""}`} key={k} onClick={() => goToPath(v.path)} >{v.label}</button>)
				})
			}
		</nav>
	);
}

export default AppNavBar;