import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ( { language, toggleLanguage } ) => {
	// const 
	return (
		<div className='header'>
			{language === 'EN' ? <h1 className='name'>Yaroslav&nbsp;Polyanskiy</h1> : <h1 className='name'>Ярослав&nbsp;Полянский</h1>}
			{language === 'EN' ? <h2 className='speciality'>Front&#8209;end&nbsp;developer</h2> : <h2 className='speciality'>Front&#8209;end&nbsp;разработчик</h2>}
			<input type='checkbox' id='lang' onClick={toggleLanguage} />
			<label htmlFor="lang" className='header__language'></label>
		</div>
	)
}

Header.propTypes = {
	language: PropTypes.string,
	toggleLanguage: PropTypes.func,
}
Header.defaultProps = {
	language: 'EN',
	toggleLanguage: () => {},
}

export default Header;