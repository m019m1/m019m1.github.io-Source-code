import React, {Component} from 'react';
import './home.css';
import myPhoto from '../../img/me.jpg';

class Home extends Component {

	render() {
	/* 	const tooltip = () => {
			const title='';
		} */
		return (
			<div className='home'>
				<img className='myPhoto' src={myPhoto} alt='myPhoto' title='share this portfolio ;-)' /*  onPointerEnter={()=> {tooltip('share this portfolio ;-)')}} *//>
				<article className='aboutMe'>
					<p className='aboutMe__paragraph'>Hi! I'm a Javascript developer! I'm at the beginning of my interesting and long way of Development in every sense of this word, I hope!)</p>
					<p className='aboutMe__paragraph'>I enjoy both solving non-standard multi-level interactive problems and creating nice looking interface.</p>
					<p className='aboutMe__paragraph'>I follow a thorough approach in studying, work and life. Highly interested in quality professional growth.</p>
				</article>
			</div>
		)
	}
}
export default Home;