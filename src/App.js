import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
	return (
		<>
			<GlobalStyles />
			<Categories />
			<NewsList />
		</>
	);
}

export default App;
