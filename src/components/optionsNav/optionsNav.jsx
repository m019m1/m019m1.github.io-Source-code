import React from 'react';
import './optionsNav.css';

const OptionsNav = ( { listOfOptions, currentIndex, btnsClickHandle } ) => {
	

	return (
		<nav className="nav">
		<ul className='nav__list'>
			{listOfOptions.map( ({title}, index) => (
				<li key={index} className='nav__list__items'>
					<button className={`nav__list__items__buttons ${index === currentIndex && 'nav__list__items__buttons--active'}`} onClick={btnsClickHandle.bind(null, index)}>{title}</button>
				</li>
			))}
		</ul>
	</nav>
	)
}

export default OptionsNav;