import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function AboutProject({state, globalStore}) {
    const projectId=globalStore.match.params.id
    const project = state.projects.find((item)=>item.infoRoute===projectId)
    return (
        
        <div id="project-presentation" className="animate__animated animate__fadeIn">
            <div className="title-container">
            <h2>{project.title}</h2>
            </div>
            <div className="container">
                <p className="visit-website-link"><a href={project.showLink}  target="_blank" rel="noopener noreferrer">Visit the website</a></p>
                <img src={project.imagePath} alt=""/>
                <h3>About this project</h3>
                <p>{project.description}</p>
                <h3>Techical Sheet</h3>
                <ul>
                    {project.technologies.map((item,index)=>(
                        <li key={index}>{item.replace("_"," ")}</li>
                    ))}
                </ul>
            </div>
            <Link className="close-project-descr" to="/projects"><i className="fas fa-window-close"></i></Link>
        </div>

    )
}

const mapStateToProps = state =>{
    return {
        state: state.app
    }
}

export default connect(mapStateToProps, null)(AboutProject)
