import { useResetRecoilState } from "recoil";
import { clicksState, gridState, winConditionMetState, formattedTimerState } from "../state";

function useResetGame() {
	const clicksReset = useResetRecoilState(clicksState);
	const gridReset = useResetRecoilState(gridState);
	const winConditionMetReset = useResetRecoilState(winConditionMetState);
	const formattedTimerReset = useResetRecoilState(formattedTimerState);
	
	return () => {
		clicksReset();
		gridReset();
		winConditionMetReset();
		formattedTimerReset();
	}
}

export default useResetGame;