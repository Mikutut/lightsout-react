import React from "react";
import { useRecoilValue } from "recoil";
import { clicksState } from "../state";

import "../styles/Counters.scss";

function ClicksCounter() {
	const clicks = useRecoilValue(clicksState);

	return (
		<h3 id="ClicksCounter">
			Clicks: { clicks }
		</h3>
	)
}

export default ClicksCounter;