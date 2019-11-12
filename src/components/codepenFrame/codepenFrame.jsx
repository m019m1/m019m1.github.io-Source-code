import React from 'react';
import PropTypes from 'prop-types';
import './codepenFrame.css';

const CodepenFrame = ( { listOfProjects, style, btnsClickHandle } ) => {
	return (
		<section className='frame'>
			<button className="frame__buttons frame__buttons--prev" onClick={btnsClickHandle.bind(null, -1)}><p className="frame__buttons__text">&lArr;</p></button>
			<div className='frame__viewport'>
				<ul className='frame__projectsList' style={style}>
					{listOfProjects.map( ({hash, userName, title}) => (
						<li key={hash} className='frame__projectsList__project'>
							<iframe className='codepen' src={`https://codepen.io/${userName}/embed/preview/${hash}`} frameBorder="0" title={title} />
						</li>
					))}
				</ul>
			</div>
			<button className="frame__buttons frame__buttons--next" onClick={btnsClickHandle.bind(null, 1)}><p className="frame__buttons__text">&lArr;</p></button>
		</section>
	)
}
CodepenFrame.propTypes = {
	listOfProjects: PropTypes.array.isRequired,
	style: PropTypes.string,
	btnsClickHandle: PropTypes.func,
}
CodepenFrame.defaultProps = {
	style: '',
	btnsClickHandle: () => {},
}

export default CodepenFrame;