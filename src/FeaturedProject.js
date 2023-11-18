// FeaturedProject.js

import React from 'react';

const FeaturedProject = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedProject;
