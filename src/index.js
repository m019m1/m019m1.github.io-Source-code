import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Works from './components/works/works';
import Skills from './components/skills/skills';
import Contacts from './components/contacts/contacts';

ReactDOM.render((
	<BrowserRouter>
		<App>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/works' component={Works} />
				<Route path='/skills' component={Skills} />
				<Route path='/contacts' component={Contacts} />
			</Switch>
		</App>
	</BrowserRouter>
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
