import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projectsList } from '../../data/projectList'

const Projects = () => {
  return (
    <>
    {projectsList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  )
}

export default Projects