import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './codepenFrame.css';

const onDescriptionClick = id => {
	const elem = document.getElementById(id);
	elem.style.display = 'none';
}

const CodepenFrame = ( { listOfProjects, style, btnsClickHandle, language } ) => {
	return (
		<Fragment>
			<section className='frame'>
				<button className="frame__buttons frame__buttons--prev" onClick={btnsClickHandle.bind(null, -1)}><p className="frame__buttons__arrow">&lArr;</p></button>
				<div className='frame__viewport'>
					<ul className='frame__projectsList' style={style}>
						{listOfProjects.map( ({hash, userName, title, stack, description, descriptionRus}) => (
							<li key={hash}  className='frame__projectsList__project'>
								<iframe className='codepen' src={`https://codepen.io/${userName}/embed/preview/${hash}`} frameBorder="0" title={title} />
								<div className="description" id={hash} onClick={ onDescriptionClick.bind(null, hash) } >
									<div>
										<h3 className='description__header'>{language == 'EN' ? description : descriptionRus}{'\n'}{'\n'}</h3>
										<p className='description__stack'>&lt;{stack}&nbsp;&#47;&gt;</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
				<button className="frame__buttons frame__buttons--next" onClick={btnsClickHandle.bind(null, 1)}><p className="frame__buttons__arrow">&lArr;</p></button>
			</section>
		</Fragment>
	)
}
CodepenFrame.propTypes = {
	listOfProjects: PropTypes.array.isRequired,
	style: PropTypes.object,
	btnsClickHandle: PropTypes.func,
}
CodepenFrame.defaultProps = {
	style: null,
	btnsClickHandle: () => {},
}

export default CodepenFrame;