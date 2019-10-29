import React from 'react';
import './home.css';
import myPhoto from '../../img/17_1-min.jpg';

const Home = () => {
	return (
		<div className='home'>
			<img className='myPhoto' src={myPhoto} alt='myPhoto'/>
			<p className='about'>Hi! I'm a Javascript developer! I'm at the begginning of my interesting and long way of developing, I hope!)</p>
		</div>
	)
}
export default Home;