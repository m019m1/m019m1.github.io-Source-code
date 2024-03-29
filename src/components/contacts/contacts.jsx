import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './contacts.css';

const contacts = [
	{
		title: 'Github',
		href: 'https://github.com/m019m1',
		target: '_blank',
		icon: ['fab', 'github'],
	},
	{
		title: 'Codepen',
		href: 'https://codepen.io/m019m1',
		target: '_blank',
		icon: ['fab', 'codepen'],
	},
	{
		title: 'email',
		href: 'mailto:yaroslav.polyanskiy@gmail.com?subject=You%20are%20hired!',
		target: '_blank',
		icon: ['fas', 'envelope'],
	},
	{
		title: "cell",
		href: 'tel:+79137612930',
		target: '_blank',
		icon: ['fas', 'phone-square-alt'],
	},
	{
		title: 'Telegram',
		href: 'https://t.me/polYar4ik',
		target: '_blank',
		icon: ['fab', 'telegram-plane'],
	},
	{
		title: 'Skype',
		href: 'skype:yar4ik1986',
		target: '_blank',
		icon: ['fab', 'skype'],
	},
	{
		title: 'linkedIn',
		href: 'https://www.linkedin.com/in/yaroslav-polyanskiy/',
		target: '_blank',
		icon: ['fab', 'linkedin'],
	},
	{
		title: 'vk',
		href: 'https://vk.com/id2758188',
		target: '_blank',
		icon: ['fab', 'vk'],
	},
] 

const Contacts = ({language}) => {
	return (
		<Fragment>
			{ language === 'EN' ? <p className="contacts__appeal">Feel free to contact me!</p> : <p className="contacts__appeal">Обращайтесь!</p>}
			<ul className="contacts__list">
				{contacts.map( ( {title, href, target, icon} ) => (
					<li key={title} title={title} className='contact' id={title}>
						<a href={href} target={target} className='contact__link'>
							<FontAwesomeIcon icon={icon} fixedWidth pull="left" className="icon"/>
						</a>
					</li>
				))}
			</ul>
		</Fragment>
	)
}

Contacts.propTypes = {
	language: PropTypes.string,
}
Contacts.defaultProps = {
	language: 'EN',
}

export default connect( ({ language }) => ({
  language,
}) )(Contacts);