import React from 'react';
import './home.css';
import myPhoto from '../../img/me.jpg';
import { connect } from 'react-redux';

const aboutMe = [
	{
		text: "Hi! I'm a Javascript developer! I'm at the beginning of my interesting and long way of Development in every sense of this word, I hope!)",
	},
	{
		text: "I enjoy both solving non-standard multi-level interactive problems and creating nice looking interface.",
	},
	{
		text: "I follow a thorough approach in studying, work and life. Highly interested in quality professional growth.",
	},
]
const aboutMeRus = [
	{
		text: "Приветствую! Я Javascript разработчик! Я нахожусь в начале моего интересного, и, надеюсь, долгого пути развития себя как разработчика!)",
	},
	{
		text: "Мне нравится как решать нестандартные многоуровневые интерактивные задачи, так и создавать красивый интерфейс.",
	},
	{
		text: "Сторонник основательного подхода в учебе, работе и жизни. Высоко заинтересован в качественном профессиональном росте.",
	},
]

const Home = ({ language }) => {
	const about = language == 'EN' ? aboutMe : aboutMeRus;
	return (
		<div className='home'>
			<img className='myPhoto' src={myPhoto} alt='myPhoto' title='share this portfolio ;-)' />
			<article className='aboutMe'>
				{ about.map( ({ text }) => (
						<p className={`aboutMe__paragraph ${ language == 'RUS' && 'aboutMe__paragraph--rus' }` }>{text}</p>
				 ))}
			</article>
		</div>
	)
}

export default connect( ({ language }) => ({
  language,
}) )(Home);