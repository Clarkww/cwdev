import React from 'react'



export default function Projects( {projects} ) {
  console.log('hi')
  console.log(projects)

  return (
    <main className='projects-page'>
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <div className="projects-container">

        {projects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <img src={project.img} className='project-img' alt="" />
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="tags">


                  
                </div>
                <div className="links">
                  <a href={project.link} target='_blank'>View</a>
                  <br />
                  {/* <a href={project.repo} target='_blank'>Repo</a> */}
                </div>
              </div>
            </div>
          )
        }
        )}

      </div>
    </main>
  )
}
