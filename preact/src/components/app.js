import { h } from 'preact';
import { Router } from 'preact-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
		</Router>
	</div>
)

export default App;
