import React from "react";
import { clicksState, winConditionMetState, formattedTimerState } from "../state";
import { useRecoilValue, useSetRecoilState } from "recoil";

import "../styles/GameWon.scss";

function GameWon() {
	const clicks = useRecoilValue(clicksState);
	const timer = useRecoilValue(formattedTimerState);
	const setWinConditionMet = useSetRecoilState(winConditionMetState);

	return (
		<div id="GameWon">
			<h1>Congratulations!</h1>
			<h2>You have turned off all the lights!</h2>
			<h3>Clicks: { clicks }</h3>
			<h3>Time: { timer }</h3>

			<button onClick={() => setWinConditionMet(false)}>Play again</button>
		</div>
	)
}

export default GameWon;