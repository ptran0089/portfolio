import React, { Component } from 'react';
import Project from './Project';
import projectsData from '../data/projects';
import Modal from './Modal';

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			currentProject: null,
			modalOpen: false
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal(project) {
		this.setState({
			modalOpen: true,
			currentProject: project
		});
	}

	handleCloseModal() {
		this.setState({
			modalOpen: false
		});
	}

	renderModal() {
		const { modalOpen, currentProject } = this.state;

		if (currentProject) {
			return (
				<Modal isOpen={modalOpen}
							 project={currentProject} 
							 handleCloseModal={this.handleCloseModal}/> 
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<div className="portfolio">
				<h1>Portfolio</h1>
				<div className="projects-container">
					{
						projectsData.map((project, index) => 
							<Project 
								project={project} 
								key={index} 
								isOpen={this.state.modalOpen}
								handleOpenModal={this.handleOpenModal}
								handleCloseModal={this.handleCloseModal} />)
					}
				</div>
				{this.renderModal()}
				
			</div>
		);
	}
}

export default Portfolio;