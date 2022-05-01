import React from "react";
import { clicksState, winConditionMetState } from "../state";
import { useRecoilValue, useSetRecoilState } from "recoil";

function GameWon() {
	const clicks = useRecoilValue(clicksState);
	const setWinConditionMet = useSetRecoilState(winConditionMetState);

	return (
		<div id="GameWon">
			<h1>Congratulations!</h1>
			<h2>You have turned off all the lights!</h2>
			<h3>Clicks: { clicks }</h3>

			<button onClick={() => setWinConditionMet(false)}>Play again</button>
		</div>
	)
}

export default GameWon;