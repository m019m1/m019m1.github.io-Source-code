import React, {Component} from 'react';
import Codepen from 'react-codepen-embed';

const works =  [
	{hash: 'VwZqowp', userName: 'm019m1', title: 'Exchange rates & charts'},
	{hash: 'eYOVWdv', userName: 'm019m1', title: 'Todo list'},
	{hash: 'WNeRoje', userName: 'm019m1', title: 'Table with sort and drag'},
	{hash: 'XWrabPr', userName: 'm019m1', title: 'Loupe'},
	{hash: 'WNeppRM', userName: 'm019m1', title: 'Cube'},
]

class Works extends Component {
	state = {
		id: 0,
	}


	render () {
		return (
			<ul>
				{works.map( ({hash, userName, title}) => (
					<li key={hash}>
						<Codepen hash={hash} user={userName} title={title} />
					</li>
				))}
			</ul>
		)
	}
}
export default Works;