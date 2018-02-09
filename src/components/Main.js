import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<img className="headshot" alt="headshot" src={headshot} />
				<div className="main-container">
					<p className="name">PHUONG TRAN</p>
					<p className="title">FRONT-END WEB DEVELOPER</p>
				</div>
			</div>
		);
	}
}

export default Main;