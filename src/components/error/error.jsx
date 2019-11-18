import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './error.css';

const Error = ({language}) => {
	return (
		<div className='error'>
			{ language === 'EN' ? <p>Oh no no no! You've broken that site! Congratulations!</p> : <p> О нет нет нет! Вы сломали сайт! Поздравляем!</p> }
			{ language === 'EN' ? <p>Please, go	<NavLink to='/'> Home </NavLink> now!</p> : <p>Пожалуйста, пройдите на	<NavLink to='/'> Главную </NavLink> страницу!</p> }
		</div>
	)
}

Error.propTypes = {
	language: PropTypes.string,
}
Error.defaultProps = {
	language: 'EN',
}

export default connect( ({ language }) => ({
  language,
}) )(Error);