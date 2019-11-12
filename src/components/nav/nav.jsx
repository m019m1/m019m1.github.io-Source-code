import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './nav.css';

const Nav = ({links}) => {
	return (
		<nav>
			<ul className='nav__menu'>
				{links.map( ({name, href}) => (
					<li key={name} className='nav__menu__item'>
						<NavLink exact to={href} >
          		{name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
Nav.propTypes = {
	links: PropTypes.array,
};
Nav.defaultProps = {
	links: []
}
export default Nav;