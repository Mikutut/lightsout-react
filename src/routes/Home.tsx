/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSetRecoilState } from "recoil";
import { gameStartedState } from "../state";

import "../styles/HomeRoute.scss";

function HomeRoute() {
	const setGameStarted = useSetRecoilState(gameStartedState);

	return (
		<div className="Route" id="HomeRoute">
			<button onClick={() => setGameStarted(true)}>Start the game</button>
		</div>
	);
}

export default HomeRoute;