import { useResetRecoilState } from "recoil";
import { clicksState, gridState, gameStartedState, winConditionMetState } from "../state";

function useResetGame() {
	const clicksReset = useResetRecoilState(clicksState);
	const gridReset = useResetRecoilState(gridState);
	const gameStartedReset = useResetRecoilState(gameStartedState);
	const winConditionMetReset = useResetRecoilState(winConditionMetState);
	
	return () => {
		clicksReset();
		gridReset();
		gameStartedReset();
		winConditionMetReset();
	}
}

export default useResetGame;