import React from 'react';
import './header.css';

const Header = ( { language, toggleLanguage } ) => {
	// const 
	return (
		<div className='header'>
			{language == 'EN' ? <h1 className='name'>Yaroslav&nbsp;Polyanskiy</h1> : <h1 className='name'>Ярослав&nbsp;Полянский</h1>}
			{language == 'EN' ? <h2 className='speciality'>Front&#8209;end&nbsp;developer</h2> : <h2 className='speciality'>Front&#8209;end&nbsp;разработчик</h2>}
			<input type='checkbox' id='lang' onClick={toggleLanguage} />
			<label for="lang" className='header__language'></label>
		</div>
	)
}
export default Header;