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

	setIndex = num => {
		this.setState({currentIndex: num});
	}

	render () {

		const {currentIndex} = this.state;
		const style =  {transform: `translateX(${-currentIndex*800}px)`};
		
		return (
			<Fragment>
				<div className='gallery'>
					<button className="navButtons prev" onClick={()=>{this.shift(-1)}}>&lArr;</button>
						<div className='galleryViewport'>
							<ul className='worksList' style={style}>
								{works.map( ({hash, userName, title}) => (
									<li key={hash} className='work'>
										<iframe className='codepen' src={`https://codepen.io/${userName}/embed/preview/${hash}`} frameborder="0" title={title} />
									</li>
								))}
							</ul>
						</div>
					{<button className="navButtons next" onClick={()=>{this.shift(1)}}>&rArr;</button>}
				</div>

				<div className="galleryNav">
					<ul className='worksNavList'>
						{works.map( ({title}, index) => (
							<li key={index} className='worksNavItems'>
								<button className='worksNavButtons' onClick={()=>{this.setIndex(index)}}>{title}</button>
							</li>
						))}
					</ul>
				</div>
			</Fragment>
		)
	}
}
export default Works;
/* 
<iframe height="265" style="width: 100%;" scrolling="no" title="native JS + chart.js: Exchange rates  &amp; charts by European Central Bank" src="https://codepen.io/m019m1/embed/VwZqowp?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/m019m1/pen/VwZqowp'>native JS + chart.js: Exchange rates  &amp; charts by European Central Bank</a> by m019m1
  (<a href='https://codepen.io/m019m1'>@m019m1</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> */