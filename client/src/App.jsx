import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import { getAllData } from './lib/utils/api';

const App = () => {
	const users = getAllData();
	console.log(users);
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;
