import React from 'react';
import PropTypes from 'prop-types';
import './optionsNav.css';

const OptionsNav = ( { listOfOptions, currentIndex, btnsClickHandle, language } ) => {
	return (
		<nav className="nav">
		<ul className='nav__list'>
			{listOfOptions.map( ({title, titleRus}, index) => (
				<li key={index} className='nav__list__items'>
					<button className={`nav__list__items__buttons ${index === currentIndex && 'nav__list__items__buttons--active'}`} onClick={btnsClickHandle.bind(null, index)}>{language === 'EN' ? title : titleRus}</button>
				</li>
			))}
		</ul>
	</nav>
	)
}
OptionsNav.propTypes = {
	listOfOptions: PropTypes.array.isRequired,
	currentIndex: PropTypes.number,
	btnsClickHandle: PropTypes.func,
	language: PropTypes.string,
}
OptionsNav.defaultProps = {
	currentIndex: 0,
	btnsClickHandle: () => {},
	language: 'EN',
}


export default OptionsNav;