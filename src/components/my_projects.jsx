import React from 'react';
import './App.css';
import AppProjects from "./project"


const MyProjects = () => {
  return (
    <div className='my_projects'>
        <h3 className='project-head font-center text-4xl text-center pb-10 font-bold'>My Projects</h3>
    <div className='project_list'>
    </div>
    
    <div className='grid grid-cols-3 justify-items-center'>
    <AppProjects/>
    <AppProjects/>
    <AppProjects/>
    <AppProjects/>
    </div>
    </div>
  )
}

export default MyProjects