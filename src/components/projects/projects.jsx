import React, { Component, Fragment } from 'react';
import CodepenFrame from '../codepenFrame/codepenFrame.jsx';
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
	setIndex = index => { 
		this.setState({currentIndex: index});
	}

	render () {

		const {currentIndex, width, height} = this.state;
		const frameWidth = (width > height) ? Math.min(700, width*0.72) : width*0.92
		const style = {transform: `translateX(${-currentIndex*frameWidth}px)`};
		
		return (
			<Fragment>
				<CodepenFrame listOfProjects={projects} btnsClickHandle={this.shift} style={style} />
				<OptionsNav listOfOptions={projects} btnsClickHandle={this.setIndex} currentIndex={currentIndex} />
			</Fragment>
		)
	}
}
export default Projects;