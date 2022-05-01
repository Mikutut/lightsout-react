import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { gameStartedState } from './state';

import './styles/App.scss';
import AppHeader from './components/AppHeader';
import HomeRoute from "./routes/Home";
import GameRoute from "./routes/Game";
import PageNotFoundRoute from './routes/PageNotFound';

function App() {
	const gameStarted = useRecoilValue(gameStartedState);

	return (
		<div id="App">
			<AppHeader />
			<div id="RouteWrapper">
				<Routes>
					<Route path='/' element={
						(gameStarted)
							? <GameRoute />
							: <HomeRoute />
					} />
					<Route path="*" element={<PageNotFoundRoute />} />
				</Routes>
			</div>
		</div>
	)
}

export default App;
