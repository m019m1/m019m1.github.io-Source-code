import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contacts from './components/contacts/contacts';
import Error from './components/error/error';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
	<Provider store={store}>
		<HashRouter >
			<App>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/projects' component={Projects} />
					<Route path='/skills' component={Skills} />
					<Route path='/contacts' component={Contacts} />
					<Route path='*' component={Error} />
				</Switch>
			</App>
		</HashRouter >
	</Provider>
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
