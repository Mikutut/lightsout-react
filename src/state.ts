import { atom, selector } from "recoil";

const clicksState = atom({
	key: 'clicks',
	default: 0
});
const gridState = atom({
	key: "grid",
	default: [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	]
});
const gameStartedState = atom({
	key: "gameStarted",
	default: false
});
const winConditionMetState = atom({
	key: "winConditionMet",
	default: false
});
const lightsSelectedState = selector({
	key: "lights",
	get: ({get}) => {
		const grid = get(gridState);
		let count = 0;
		
		grid.forEach((row) => {
			row.forEach((col) => {
				if(col === 1) count++;
			})
		});

		return count;
	}
});

export {
	clicksState,
	gridState,
	gameStartedState,
	winConditionMetState,
	lightsSelectedState,
};