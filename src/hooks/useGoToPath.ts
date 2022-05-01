import { useNavigate } from "react-router";
import { useRecoilValue, useRecoilState } from "recoil";
import { gameStartedState, winConditionMetState } from "../state";
import useResetGame from "./useResetGame";

function useGoToPath() {
	const [ gameStarted, setGameStarted ] = useRecoilState(gameStartedState);
	const winConditionMet = useRecoilValue(winConditionMetState);
	const resetGame = useResetGame();
	const navigate = useNavigate();

	return (path: string) => {
		if(gameStarted && !winConditionMet) {
			const redirectConsent = window.confirm("The game is still in progress.\n\nAre you sure you want to leave it?\nAll your progress will be lost.");

			if(redirectConsent) {
				setGameStarted(false);
				resetGame();
				navigate(path);
			}
		} else navigate(path);
	}
}

export default useGoToPath;