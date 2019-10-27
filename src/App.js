import React from 'react';
import Header from './components/header/header';
import './App.css';
import Nav from './components/nav/nav';

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