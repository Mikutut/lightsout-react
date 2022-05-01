import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { gameStartedState, winConditionMetState } from "../state";
import useResetGame from "../hooks/useResetGame";

import "../styles/AppNavBar.scss";

/* eslint-disable react-hooks/exhaustive-deps */

interface IAppNavBarBtn {
	name: string;
	label: string;
	path: string;
}

function AppNavBar() {
	const location = useLocation();
	const navigate = useNavigate();
	const gameStarted = useRecoilValue(gameStartedState);
	const winConditionMet = useRecoilValue(winConditionMetState);
	const resetGame = useResetGame();

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

	function goToPath(path: string) {
		if(gameStarted || !winConditionMetState) {
			const redirectConsent = window.confirm("The game is still in progress.\n\nAre you sure you want to leave it?\nAll your progress will be lost.");

			if(redirectConsent) {
				resetGame();
				navigate(path);
			}
		} else navigate(path);
	}

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