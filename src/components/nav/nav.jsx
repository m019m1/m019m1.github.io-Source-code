import React from 'react';



const Nav = () => {

	const links = [
		{name: 'Main'},
		{name: 'Works'},
		{name: 'Skills'},
		{name: 'Contacts'}
	];

	return (
		<nav>
			<ul>
				{links.map( ({name}) => (
					<li key={name}>
          	{name}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav;