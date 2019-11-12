import React, { Component, Fragment } from 'react';
import OptionsNav from '../optionsNav/optionsNav.jsx';
import './projects.css';

const projects =  [
	{hash: 'VwZqowp', userName: 'm019m1', title: 'Exchange'},
	{hash: 'eYOVWdv', userName: 'm019m1', title: 'Todo'},
	{hash: 'WNeRoje', userName: 'm019m1', title: 'Table'},
	{hash: 'XWrabPr', userName: 'm019m1', title: 'Loupe'},
	{hash: 'WNeppRM', userName: 'm019m1', title: 'Cube'},
]

class Projects extends Component {
	// take window.inner*** instead of document.documentElement.client***
	// cause of correct behaviour while resizing in dev-mode
	state = {
		currentIndex: 0,
		width: window.innerWidth,
		height: window.innerHeight,
	}

	changeDimension = () => { this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}
	componentDidMount() {
		window.addEventListener('resize', this.changeDimension);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.changeDimension);
	}

	shift = num => {
		this.setState( ({currentIndex}) => ({
			currentIndex: (currentIndex + num < 0 ? projects.length - 1 : currentIndex + num > projects.length - 1 ? 0 : currentIndex + num)
		}));
	}
	setOption = (index) => { 
		this.setState({currentIndex: index});
	}

	render () {

		const {currentIndex, width, height} = this.state;
		const frameWidth = (width > height || width > 1025) ? Math.min(700, width*0.72) : width*0.92
		const style = {transform: `translateX(${-currentIndex*frameWidth}px)`};
		
		return (
			<Fragment>
				<section className='frame'>
					<button className="frame__buttons frame__buttons--prev" onClick={this.shift.bind(this, -1)}><p className="frame__buttons__text">&lArr;</p></button>
					<div className='frame__viewport'>
						<ul className='frame__projectsList' style={style}>
							{projects.map( ({hash, userName, title}) => (
								<li key={hash} className='frame__projectsList__project'>
									<iframe className='codepen' src={`https://codepen.io/${userName}/embed/preview/${hash}`} frameBorder="0" title={title} />
								</li>
							))}
						</ul>
					</div>
					<button className="frame__buttons frame__buttons--next" onClick={this.shift.bind(this, 1)}><p className="frame__buttons__text">&lArr;</p></button>
				</section>

				<OptionsNav listOfOptions={projects} currentIndex={currentIndex} btnsClickHandle={this.setOption}/>
				
			</Fragment>
		)
	}
}
export default Projects;