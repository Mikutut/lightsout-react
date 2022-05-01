import React, {useEffect, useLayoutEffect} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { winConditionMetState, formattedTimerState, gameRestartedState } from "../state";
import useTimer from "../hooks/useTimer";
import useResetGame from "../hooks/useResetGame";

import "../styles/GameRoute.scss";
import Grid from '../components/Grid';
import ClicksCounter from '../components/ClicksCounter';
import LightsCounter from "../components/LightsCounter";
import Timer from "../components/Timer";
import GameWon from "../components/GameWon";
import GameControlPanel from "../components/GameControlPanel";

function GameRoute() {
	const winConditionMet = useRecoilValue(winConditionMetState);
	const setFormattedTimerState = useSetRecoilState(formattedTimerState);
	const gameRestarted = useRecoilValue(gameRestartedState);
	const { formattedTime, start, stop, reset } = useTimer(0);	
	const resetGame = useResetGame();

	useLayoutEffect(() => {
		resetGame();
	}, []);
	useEffect(() => {
		start();

		return () => stop();
	}, []);
	useEffect(() => {
		setFormattedTimerState(formattedTime);
	}, [formattedTime])
	useEffect(() => {
		if(winConditionMet) {
			stop();	
		} else {
			reset();
			start();
		}
	}, [winConditionMet]);
	useEffect(() => {
		reset();
	}, [gameRestarted]);

		return (
			<div className="Route" id="GameRoute">
				{
					(winConditionMet)
						? (
							<GameWon />
						)
						: (
							<>
								<Timer />
								<LightsCounter />
								<ClicksCounter />
								<GameControlPanel />
								<Grid />
							</>
						)
				}
			</div>
		);
}

export default GameRoute;