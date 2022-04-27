import React from 'react';
import './styles/App.scss';
import AppHeader from './components/AppHeader';
import Grid from './components/Grid';
import ClicksCounter from './components/ClicksCounter';

function App() {
	return (
		<div id="App">
			<AppHeader />
			<ClicksCounter />			
		</div>
	)
}

export default App;
