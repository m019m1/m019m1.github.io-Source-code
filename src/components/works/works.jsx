import React, {Component, Fragment} from 'react';
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
		isLoaded: false,
	}

	shift = num => {
		this.setState( ({currentIndex}) => ({
			currentIndex: (currentIndex + num < 0 ? works.length - 1 : currentIndex + num > works.length - 1 ? 0 : currentIndex + num)
		}));
	}

	render () {

		const {currentIndex} = this.state;
		const style =  {transform: `translateX(${-currentIndex*800}px)`};
		
		return (
			<div className='gallery'>
				<section className='gallery__frame frame'>
					<button className="frame__buttons frame__buttons--prev" onClick={this.shift.bind(this, -1)}>&lArr;</button>
						<div className='frame__viewport'>
							<ul className='frame__worksList worksList' style={style}>
								{works.map( ({hash, userName, title}) => (
									<li key={hash} className='worksList__work'>
										<iframe className='frame__codepen' src={`https://codepen.io/${userName}/embed/preview/${hash}`} frameborder="0" title={title} />
									</li>
								))}
							</ul>
						</div>
					{<button className="frame__buttons frame__buttons--next" onClick={this.shift.bind(this, 1)}>&lArr;</button>}
				</section>

				<nav className="gallery__nav nav">
					<ul className='nav__list navList'>
						{works.map( ({title}, index) => (
							<li key={index} className='navList__items navItems'>
								<button className={`navItems__buttons ${index == currentIndex && 'navItems__buttons--active'}`} onClick={() => {this.setState({currentIndex: index});}}>{title}</button>
							</li>
						))}
					</ul>
				</nav>
			</div>
		)
	}
}
export default Works;