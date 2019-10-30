import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {

	const links = [
		{name: 'Home', href: '/'},
		{name: 'Works', href: '/works'},
		{name: 'Skills', href: '/skills'},
		{name: 'Contacts', href: '/contacts'}
	];

	return (
		<nav>
			<ul className='navMenu'>
				{links.map( ({name, href}) => (
					<li key={name}>
						<NavLink exact to={href} >
          		{name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav;