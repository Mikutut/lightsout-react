import { useState, useEffect } from "react";

function useTimer(initValue: number) {
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

	const currentTime = () => value;
	const start = () => setRunning(true);
	const stop = () => setRunning(false);

	return {
		currentTime, start, stop
	};
};

export default useTimer;