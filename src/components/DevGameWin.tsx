import React from "react";
import { winConditionMetState } from "../state";
import { useSetRecoilState } from "recoil";

function DevGameWin() {
	const setWinConditionMet = useSetRecoilState(winConditionMetState);

	return (
		<button 
			id="DevGameWin"
			onClick={() => setWinConditionMet(true)}
		>
			Win game
		</button>
	)
}

export default DevGameWin;