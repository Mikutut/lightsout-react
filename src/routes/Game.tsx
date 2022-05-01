import React, {useEffect} from "react";
import { useRecoilValue } from "recoil";
import { winConditionMetState } from "../state";
import useTimer from "../hooks/useTimer";

import "../styles/GameRoute.scss";
import Grid from '../components/Grid';
import ClicksCounter from '../components/ClicksCounter';
import LightsCounter from "../components/LightsCounter";
import Timer from "../components/Timer";
import GameWon from "../components/GameWon";

function GameRoute() {
	const winConditionMet = useRecoilValue(winConditionMetState);
	const { currentTime, start, stop } = useTimer(0);	
	useEffect(() => {
		start();

		return () => stop();
	}, []);
	useEffect(() => {
		if(winConditionMet)
			stop();	
	}, [winConditionMet]);

		return (
			<div className="Route" id="GameRoute">
				{
					(winConditionMet)
						? (
							<GameWon />
						)
						: (
							<>
								<Timer time={ currentTime() }/>
								<LightsCounter />
								<ClicksCounter />
								<Grid />
							</>
						)
				}
			</div>
		);
}

export default GameRoute;