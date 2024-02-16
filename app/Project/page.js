"use client";
import React from 'react';
import { ProjectData } from './ProjectData'; 
import ProjectCard from './ProjectCard';
import Layout from '../layout';

const Projects = () => {
  return (
    <Layout>
    <div className="p-4">
      <h2 className="font-bold text-4xl mb-4 text-blue-950">Projects</h2>
      <h2 className="font-bold text-3xl mb-4 text-blue-950">My last Projects</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-10 text-blue-950">
        {ProjectData.map((project) => (
          <ProjectCard 
            key={project.id} 
            projectName={project.name} 
            imageUrl={project.imageUrl} 
            liveLink={project.liveLink} 
            githubLink={project.githubLink} 
          />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Projects;


