// import Card from '../../components/Card'; // Uncomment if you plan to use Card

const Project = ({ project }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front of the card */}
        <div className="flip-card-front">
          <div className="portfolio__project-image">
            <h2 className='front-title'>{project.frontTitle}</h2>
            <img src={project.image} alt={`Portfolio project: ${project.title}`} loading="lazy" />
          </div>
        </div>
        {/* Back of the card */}
        <div className="flip-card-back">
          <div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
          <a 
            href={project.demo} // Ensure this points to the correct demo URL
            className="btn view-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
