import React, {useEffect} from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { formattedTimerState } from "../state";

import "../styles/Timer.scss";

function Timer() {
	const formattedTimer = useRecoilValue(formattedTimerState);
	const resetFormattedTimer = useResetRecoilState(formattedTimerState);

	useEffect(() => {
		resetFormattedTimer();
	}, []);

  return (
    <h3 id="Timer">
			Timer: { formattedTimer }
    </h3>
  );
}

export default Timer;