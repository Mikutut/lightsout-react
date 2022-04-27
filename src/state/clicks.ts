import { atom } from "recoil";

const clicksState = atom({
	key: 'clicks',
	default: 0
});

export default clicksState;