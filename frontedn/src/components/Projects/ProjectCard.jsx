import "./styles.css";

const ProjectCard = ({ title, description, image, alt, github }) => (
  <div className="project-card">
    <div className="project-card-text">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub
      </a>
    </div>
    <div className="project-card-image">
      <img src={image} alt={alt || title} />
    </div>
  </div>
);

export default ProjectCard;
