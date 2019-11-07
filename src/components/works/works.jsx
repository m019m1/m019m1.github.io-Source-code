import React, { Component, Fragment } from 'react';
import './works.css';

const works =  [
	{hash: 'VwZqowp', userName: 'm019m1', title: 'Exchange'},
	{hash: 'eYOVWdv', userName: 'm019m1', title: 'Todo'},
	{hash: 'WNeRoje', userName: 'm019m1', title: 'Table'},
	{hash: 'XWrabPr', userName: 'm019m1', title: 'Loupe'},
	{hash: 'WNeppRM', userName: 'm019m1', title: 'Cube'},
]

class Works extends Component {
	state = {
		currentIndex: 0,
	}

	shift = num => {
		this.setState( ({currentIndex}) => ({
			currentIndex: (currentIndex + num < 0 ? works.length - 1 : currentIndex + num > works.length - 1 ? 0 : currentIndex + num)
		}));
	}

	render () {

		const {currentIndex} = this.state;
		const width = document.documentElement.clientWidth;
		const height = document.documentElement.clientHeight;
		const frameWidth = (width > height || width > 1025) ? Math.min(700, width*0.72) : width*0.92;
		const style =  {transform: `translateX(${-currentIndex*frameWidth}px)`};
		
		return (
			<Fragment>
				<section className='frame'>
					<button className="frame__buttons frame__buttons--prev" onClick={this.shift.bind(this, -1)}>&lArr;</button>
					<div className='frame__viewport'>
						<ul className='frame__worksList' style={style}>
							{works.map( ({hash, userName, title}) => (
								<li key={hash} className='frame__worksList__work'>
									<iframe className='codepen' src={`https://codepen.io/${userName}/embed/preview/${hash}`} frameborder="0" title={title} />
								</li>
							))}
						</ul>
					</div>
					<button className="frame__buttons frame__buttons--next" onClick={this.shift.bind(this, 1)}>&lArr;</button>
				</section>

				<nav className="nav">
					<ul className='nav__list'>
						{works.map( ({title}, index) => (
							<li key={index} className='nav__list__items'>
								<button className={`nav__list__items__buttons ${index === currentIndex && 'nav__list__items__buttons--active'}`} onClick={() => {this.setState({currentIndex: index});}}>{title}</button>
							</li>
						))}
					</ul>
				</nav>
			</Fragment>
		)
	}
}
export default Works;