import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';

const Error = () => {
	return (
		<div className='error'>
			<p>Oh no no no! You've broken that site! Congratulations!</p>
			<p>Please, go	<NavLink to='/'> Home </NavLink> now!</p>
		</div>
	)
}
export default Error;