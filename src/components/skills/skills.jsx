import React from 'react';
import './skills.css';

const skills = [
	{
		name: 'HTML',
		description: 'HTML5, semantic',
	},
	{
		name: 'CSS',
		description: 'CSS3, Sass/SCSS, flex/grid, adaptive, valid, mobile-first',
	},
	{
		name: 'JavaScript',
		description: 'ES6, AJAX/Fetch, WebSockets, also know jQuery',
	},
	{
		name: 'React.js',
		description: 'React.js+Redux - basic knowledge',
	},
	{
		name: 'The rest...',
		description: 'REST API, git, SQL, npm, babel',
	},

]

const Skills = () => {
	return (
		<div className="skills">
			<ul className="skills_list skillsList">
				{ skills.map( ({name, description}) => (
						<li className='skillsList__item' onPointerEnter={() => {}}>
							{name}
						</li>					
				 ))}
			</ul>
		</div>
	)
}
export default Skills;