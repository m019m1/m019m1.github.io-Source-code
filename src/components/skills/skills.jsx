import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './skills.css';

const skills = [
	{
		basic: 'HTML5',
		basicRus: 'HTML5',
		description: 'Semantic, valid',
		descriptionRus: 'Семантичная, валидная верстка',
	},
	{
		basic: 'CSS3',
		basicRus: 'CSS3',
		description: 'Sass/SCSS, BEM, flex/grid, adaptive',
		descriptionRus: 'Sass/SCSS, BEM, flex/grid, гибкость',
	},
	{
		basic: 'JavaScript',
		basicRus: 'JavaScript',
		description: 'Good knowledge. ES6, AJAX, jQuery',
		descriptionRus: 'Хороший уровень. ES6, AJAX, jQuery',
	},
	{
		basic: 'React.js',
		basicRus: 'React.js',
		description: 'React.js+Redux - basic knowledge',
		descriptionRus: 'React.js+Redux - базовый уровень',
	},
	{
		basic: 'The rest...',
		basicRus: 'Другие...',
		description: 'RESTful API, git, SQL, npm, babel',
		descriptionRus: 'RESTful API, git, SQL, npm, babel',
	},
]

const Skills = ({language}) => {

	return (
		<div className="skills">
			<ul className="skills__list">
				{ skills.map( ({ basic, basicRus, description, descriptionRus }) => (
						<li key={basic} className='skill'>
							<span className='skill__basic'>{ language === 'EN' ? basic : basicRus}</span>
							<span className='skill__description'>{ language === 'EN' ? description : descriptionRus}</span>
						</li>
				 ))}
			</ul>
		</div>
	)
}

Skills.propTypes = {
	language: PropTypes.string,
}
Skills.defaultProps = {
	language: 'EN',
}

export default connect( ({ language }) => ({
  language,
}) )(Skills);