import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Modal extends Component {
	// Prevent assistive technologies such as screenreaders from reading 
	// content outside of the content of the modal
	componentWillMount() {
		ReactModal.setAppElement('#root');
	}

	render() {
		const { isOpen, handleCloseModal, project } = this.props;
		const style = {
			overlay: {
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.3)'
			},
			content: {
				background: 'rgb(206, 204, 207)'
			}
		};

		return (
			<ReactModal style={style} isOpen={isOpen} onRequestClose={handleCloseModal}>
				<div className="modal-container">
					<img src={project.imgSrc} alt={project.name} className="modal-image"/>
					<div className="links">
						<a href={project.github}>Github</a>
						<a href={project.url}>View</a>
						<a className="close-button" onClick={handleCloseModal}>Close</a>						
					</div>
					<h1>{project.name}</h1>
					<p className="description">{project.description}
					</p>
				</div>
			</ReactModal>
		);
	}
}

export default Modal;