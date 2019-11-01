import React from 'react';
import Header from './components/header/header';
import './App.css';
import Nav from './components/nav/nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(
	fab,
	// faCheckSquare, 
	// faCoffee
)

const App = ({children}) => {
  return (
    <div className="App">
			<Header/>
			<Nav/>
			{children}
    </div>
  );
}

export default App;