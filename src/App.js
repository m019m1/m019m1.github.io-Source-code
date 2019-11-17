import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import Nav from './components/nav/nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { toggleLanguage } from './actions/actionCreator';

library.add(
	fab,
	faEnvelope,
	faPhoneSquareAlt
)

const links = [
	{name: 'Home', href: '/'},
	{name: 'Projects', href: '/projects'},
	{name: 'Skills', href: '/skills'},
	{name: 'Contacts', href: '/contacts'},
];
const linksRus = [
	{name: 'Главная', href: '/'},
	{name: 'Проекты', href: '/projects'},
	{name: 'Навыки', href: '/skills'},
	{name: 'Контакты', href: '/contacts'},
];

class App extends Component {
	
	toggleLanguage = () => {
		const { language, toggleLanguage } = this.props;
		language == 'EN' ? toggleLanguage('RUS') : toggleLanguage('EN');
	}

	render() {
		const { children, language } = this.props;

		return (
			<div className="app">
				<Header language={language} toggleLanguage={this.toggleLanguage} />
				<Nav links={ language == 'EN' ? links : linksRus}/>
				{children} {/* all the ways to passing props to children don't work, when there is Redux together with Router :=(		 */}
			</div>
		);
	}

}

export default connect( ({ language }) => ({
  language,
}), { toggleLanguage } )(App);