import React from 'react';
import './codepenFrame.css';


const codepenFrame = () => {
	return (
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
	)
}
