import React from "react";
import useResetGame from "../hooks/useResetGame";
import { gameStartedState, gameRestartedState } from "../state";
import { useSetRecoilState } from "recoil";

import "../styles/GameControlPanel.scss";

function GameControlPanel() {
	const resetGame = useResetGame();
	const setGameStarted = useSetRecoilState(gameStartedState);
	const setGameRestarted = useSetRecoilState(gameRestartedState);

	return (
		<div id="GameControlPanel">
			<button
				onClick={() => {
					setGameRestarted(true); 
					resetGame();
				}}
			>
				Start new session
			</button>
			<button
				onClick={() => {
					setGameStarted(false);
					resetGame();
				}}
			>
				End session
			</button>
		</div>
	);
}

export default GameControlPanel;