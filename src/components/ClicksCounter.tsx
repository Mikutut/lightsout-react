import React from "react";
import { useRecoilValue } from "recoil";
import clicksState from "../state/clicks";

function ClicksCounter() {
	const clicks = useRecoilValue(clicksState);

	return (
		<h3 id="ClicksCounter">
			Lights changes: { clicks }
		</h3>
	)
}

export default ClicksCounter;