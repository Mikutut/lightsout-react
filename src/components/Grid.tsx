/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { gridState, winConditionMetState, gameStartedState } from "../state";
import GridTile from "./GridTile";

import "../styles/Grid.scss";

function Grid() {
	const [lightsRandomized, setLightsRandomized] = useState(false);
	const gameStarted = useRecoilValue(gameStartedState);
	const [ grid, setGrid ] = useRecoilState(gridState);
	const setWinConditionMet = useSetRecoilState(winConditionMetState);
	
	function randomiseLights() {
		setGrid((curGrid) => {
			let gr: number[][] = [[], [], [], [], []];
			curGrid.forEach((row, rowNum) => {
				row.forEach((col, colNum) => {
					gr[rowNum][colNum] = col;
				})
			});

			gr.forEach((row, rowNum) => {
				row.forEach((col, colNum) => {
					const rand = Math.floor(Math.random() * 2);

					gr[rowNum][colNum] = rand;
				});
			});

			return gr;
		});
	}

	useEffect(() => {
		randomiseLights();
		setLightsRandomized(true);
	}, []);
	useEffect(() => {
		if(gameStarted && lightsRandomized) {
			let count = 0;

			grid.forEach(row => {
				row.forEach(col => {
					if(col === 1)
						count++;
				})
			});

			if(count === 0)
				setWinConditionMet(true);
		}
	}, [grid]);

	return (
		<div id="Grid">
			{
				grid.map((row, rowNum) => {
					return (
						<div className="GridRow" key={(rowNum + 1)}>
							{
								row.map((col, colNum) => {
									return (
										<GridTile key={(rowNum + 1) * (colNum + 1)} row={rowNum} column={colNum} />
									);
								})
							}
						</div>
					);
				})
			}
		</div>
	);
}

export default Grid;