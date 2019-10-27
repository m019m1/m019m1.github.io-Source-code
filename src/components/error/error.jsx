import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
	return (
		<Fragment>
			<p>Oh no no no! You've broken that site! Congratulations!</p>
			<p>Please, go	<NavLink to='/'> Home </NavLink> now!</p>
		</Fragment>
	)
}
export default Error;