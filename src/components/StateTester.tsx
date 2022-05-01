import React from "react";
import * as States from "../state";
import { useRecoilValue } from "recoil";

function StateTester() {
	const clicks = useRecoilValue(States.clicksState);
	const lights = useRecoilValue(States.lightsSelectedState);
	const grid = useRecoilValue(States.gridState);
	const gameStarted = useRecoilValue(States.gameStartedState);
	const winConditionMet = useRecoilValue(States.winConditionMetState);

	return (
		<div id="StateTester">
			<span>Clicks: {clicks}</span>
			<span>Lights: {lights}</span>
			<span>Grid: {grid}</span>
			<span>Game started: {gameStarted.toString()}</span>
			<span>Win condition met: {winConditionMet.toString()}</span>
		</div>
	);
}

export default StateTester;