import React from "react";
import { useRecoilValue } from "recoil";
import { clicksState } from "../state";

function ClicksCounter() {
	const clicks = useRecoilValue(clicksState);

	return (
		<h3 id="ClicksCounter">
			Clicks: { clicks }
		</h3>
	)
}

export default ClicksCounter;