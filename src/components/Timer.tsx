import React from "react";

function Timer({ time }: { time: number }) {
	const formatTimer = () => {
		const minutes = Math.floor(time / 60);
		const remainingSeconds = time - (minutes * 60);

		return `${
			(minutes > 9) ? minutes : `0${minutes}`
		}:${
			(remainingSeconds > 9) ? remainingSeconds : `0${remainingSeconds}`
		}`;
	}

  return (
    <h3 id="Timer">
			Timer: { formatTimer() }
    </h3>
  );
}

export default Timer;