/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clicksState, gridState } from "../state";

import "../styles/GridTile.scss";

interface IGridTileProps {
	row: number;
	column: number;
}

function GridTile({row, column}: IGridTileProps) {
	const [active, setActive] = useState(false);
	const [grid, setGrid] = useRecoilState(gridState);
	const setClicks = useSetRecoilState(clicksState);
	
	function switchLight() {
		setClicks((curClicks) => curClicks + 1);
		setGrid((curGrid) => {
			let gr: number[][] = [[], [], [], [], []];
			curGrid.forEach((row, rowNum) => {
				row.forEach((col, colNum) => {
					gr[rowNum][colNum] = col;
				})
			});
			gr[row][column] = 1;

			if(gr[row][column - 1] !== undefined) {
				gr[row][column - 1] = (gr[row][column - 1] === 0) ? 1 : 0;
			}
			if(gr[row][column + 1] !== undefined) {
				gr[row][column + 1] = (gr[row][column + 1] === 0) ? 1 : 0;
			}
			if(gr[row-1] !== undefined) {
				gr[row-1][column] = (gr[row-1][column] === 0) ? 1 : 0;
			}
			if(gr[row+1] !== undefined) {
				gr[row+1][column] = (gr[row+1][column] === 0) ? 1 : 0;
			}

			return gr;
		});
	}
	
	useEffect(() => {
		if(grid[row][column] === 1)
			setActive(true);
	}, []);
	useEffect(() => {
		if(grid[row][column] === 1)
			setActive(true)
		else
			setActive(false);
	}, [grid]);

	return (
		<div className={`GridTile${(active) ? " ActiveGridTile" : ""}`} onClick={ switchLight }></div>
	);
}

export default GridTile;