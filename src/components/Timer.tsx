import React, { useState, useEffect, useMemo } from "react";
import useTimer from "../hooks/useTimer";

function Timer() {
	const { currentTime, start, stop } = useTimer(0);	

	useEffect(() => { 
		start();
	}, []);

	const formatTimer = () => {
		const minutes = Math.floor(currentTime() / 60);
		const remainingSeconds = currentTime() - (minutes * 60);

		return `${
			(minutes > 9) ? minutes : `0${minutes}`
		}:${
			(remainingSeconds > 9) ? remainingSeconds : `0${remainingSeconds}`
		}`;
	}

  return (
    <h3 id="App">
			Timer: { formatTimer() }
    </h3>
  );
}

export default Timer;