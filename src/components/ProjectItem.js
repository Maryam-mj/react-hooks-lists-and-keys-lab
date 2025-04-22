import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {
            <ProjectItem
                name={project.name}
                about={project.about}
                technologies={project.technologies}
              />
        }
      </div>
    </div>
  );
}

export default ProjectItem;
