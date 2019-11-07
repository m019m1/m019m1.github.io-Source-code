import React from 'react';
import './skills.css';

const skills = [
	{
		basicSkill: 'HTML5',
		description: 'Semantic, valid',
	},
	{
		basicSkill: 'CSS3',
		description: 'Sass/SCSS, BEM, adaptive, flex/grid',
	},
	{
		basicSkill: 'JavaScript',
		description: 'Good knowledge. ES6, AJAX, jQuery',
	},
	{
		basicSkill: 'React.js',
		description: 'React.js+Redux - basic knowledge',
	},
	{
		basicSkill: 'The rest...',
		description: 'REST API, git, SQL, npm, babel',
	},
]

const Skills = () => {

	return (
		<div className="skills">
			<ul className="skills__list">
				{ skills.map( ({basicSkill, description}) => (
						<li key={basicSkill} className='skill' >
							<span className='basicSkill'>{basicSkill}</span>
							<span className='description'>{description}</span>
						</li>
				 ))}
			</ul>
		</div>
	)
}

export default Skills;