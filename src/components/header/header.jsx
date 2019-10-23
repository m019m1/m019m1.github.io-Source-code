import React, { Component, Fragment } from 'react';
import Nav from '../nav/nav';

class Header extends Component {
	render() {

		return (
			<Fragment>
				<h1>Yaroslav Polyanskiy</h1>
				<h3>JavaScript Developer</h3>
				<Nav/>
			</Fragment>
		)
	}
}
export default Header;