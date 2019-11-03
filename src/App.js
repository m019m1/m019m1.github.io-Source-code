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

const App = ({children}) => {
  return (
    <div className="app">
			<Header/>
			<Nav/>
			{children}
    </div>
  );
}

export default App;