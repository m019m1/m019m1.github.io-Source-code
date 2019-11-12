import React from 'react';
import Header from './components/header/header';
import './App.css';
import Nav from './components/nav/nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

library.add(
	fab,
	faEnvelope,
	faPhoneSquareAlt
)

const links = [
	{name: 'Home', href: '/'},
	{name: 'Projects', href: '/projects'},
	{name: 'Skills', href: '/skills'},
	{name: 'Contacts', href: '/contacts'},
];

const App = ({children}) => {
  return (
    <div className="app">
			<Header/>
			<Nav links={links}/>
			{children}
    </div>
  );
}

export default App;