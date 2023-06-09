import React from 'react'
import ProjectItems from './ProjectItems'
import temptagproj from '../public/temptag.png'
import airqualityproj from '../public/airquality.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-blue-500'>Projects</p>
            <h2 className='py-4'>{"What I've Built"}</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItems 
                  title="Temperature Tag IOT App"
                  backgroundImg={temptagproj}
                  projectUrl='/temptag'               
                />
                <ProjectItems 
                  title="Air Quality IOT App"
                  backgroundImg={airqualityproj}
                  projectUrl='/airquality'               
                />

            </div>
        </div>
    </div>
  )
}

export default Projects