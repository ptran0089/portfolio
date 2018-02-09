import React, { Component } from 'react';

class Project extends Component {
	render() {
		const { project, handleOpenModal } = this.props;
		const firstLetter = project.name[0];
		const restOfName = project.name.slice(1);

		return (
			<div className="project-info">
				<h2 className="project-name">
					<span className="first-letter">{firstLetter}</span>
					{restOfName}
				</h2>
				<div className="project-image-container">
					<img src={project.imgSrc} alt={project.name} className="project-image" onClick={() => handleOpenModal(project)}/>
				</div>
			</div>
		);
	}
}

export default Project;