import React, { Component, Fragment } from 'react';
import CodepenFrame from '../codepenFrame/codepenFrame.jsx';
import OptionsNav from '../optionsNav/optionsNav.jsx';
import { connect } from 'react-redux';

const projects =  [
	{hash: 'VwZqowp', userName: 'm019m1', title: 'Exchange',  titleRus: 'Обмен', description: "Exchange rates' dynamics", descriptionRus: 'Динамика обменных курсов', stack: 'HTML, CSS: SCSS, flex/grid, JS: ES6, chart.js library, fetch(AJAX), promises, async/await'},
	{hash: 'eYOVWdv', userName: 'm019m1', title: 'Todo', titleRus: 'Список', description: 'Mobile-friendly ToDo List', descriptionRus: 'Мультиплатформенный список задач', stack: 'HTML, CSS: SCSS, BEM, flex/grid, JS: ES6, localStorage, JSON, also there is jQuery version'},
	{hash: 'WNeRoje', userName: 'm019m1', title: 'Table', titleRus: 'Таблица', description: 'Mobile-friendly Table with draggable columns and sortable rows', descriptionRus: 'Мультиплатформенная таблица с перетаскиваемыми столбцами и сортирующимися строками', stack: 'HTML, CSS, JS: ES6, DOM manipulation, event handling, event delegation'},
	{hash: 'XWrabPr', userName: 'm019m1', title: 'Loupe', titleRus: 'Лупа', description: 'Mobile-friendly Loupe', descriptionRus: 'Мультиплатформенная лупа', stack: 'HTML, CSS, JS: ES6, DOM manipulation, event handling'},
	{hash: 'WNeppRM', userName: 'm019m1', title: 'Cube', titleRus: 'Куб', description: 'Spinning cube', descriptionRus: 'Вращающийся куб', stack: 'HTML, CSS: 3D animation'},
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
		const {language} = this.props;
		const {currentIndex, width, height} = this.state;
		const frameWidth = (width > height) ? Math.min(width*0.72, 700) : Math.max(width*0.92, 300);
		const style = {transform: `translateX(${-currentIndex*frameWidth}px)`};
		
		return (
			<Fragment>
				<CodepenFrame language={language} listOfProjects={projects} btnsClickHandle={this.shift} style={style} />
				<OptionsNav language={language} listOfOptions={projects} btnsClickHandle={this.setIndex} currentIndex={currentIndex} />
			</Fragment>
		)
	}
}
export default connect( ({ language }) => ({
  language,
}) )(Projects);