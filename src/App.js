import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
	return (
		<>
			<GlobalStyles />
			<Route path='/:category?' component={NewsPage} />;
		</>
	);
}

export default App;
