import React from "react";
import { useRecoilValue } from "recoil";
import { lightsSelectedState } from "../state";

import "../styles/Counters.scss";

function LightsCounter() {
	const lights = useRecoilValue(lightsSelectedState);
	
	return (
		<h3 id="LightsCounter">
			Lights counter: { lights }
		</h3>
	);
}

export default LightsCounter;