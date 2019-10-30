import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {

		return (
			<div className='header'>
				<h1 className='name'>Yaroslav Polyanskiy</h1>
				<h2 className='speciality'>Front-end Developer</h2>
			</div>
		)
	}
}
export default Header;