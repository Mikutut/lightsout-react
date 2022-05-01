import { useState, useEffect } from "react";

function useTimer(initValue: number) {
	const [formattedValue, setFormattedValue] = useState("00:00");
	const [value, setValue] = useState(0);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		let interval: any;

		if(running) {
			interval = setInterval(() => { 
				setValue((prevVal) => prevVal+1)
			}, 1000);
		} else if(!running) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [running]);
	useEffect(() => {
		if(running) {
			formatTimer();
		}
	}, [value]);

	const formatTimer = () => {
		const minutes = Math.floor(value / 60);
		const remainingSeconds = value - (minutes * 60);

		setFormattedValue(
			`${
				(minutes > 9) ? minutes : `0${minutes}`
			}:${
				(remainingSeconds > 9) ? remainingSeconds : `0${remainingSeconds}`
			}`
		);
	};

	const start = () => setRunning(true);
	const stop = () => setRunning(false);
	const reset = () => setValue(0);

	return {
		currentTime: value, 
		formattedTime: formattedValue, 
		start, 
		stop,
		reset
	};
};

export default useTimer;