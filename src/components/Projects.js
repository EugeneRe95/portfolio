import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import FlipMove from 'react-flip-move'
import {filterProjects} from '../redux/actions'

function Projects({ state, filterProjects }) {
    function filter(e){
        const el = e.target
        if(el.tagName==="SPAN"){
            filterProjects(el.getAttribute('name'))
        }
    }
    const filters = ['All', 'Vanilla JavaScript', 'React', 'Redux', 'Redux Thunk', 'React Router' ,'Material Ui', 'REST API', 'SCSS']
    const projects = (state.filterItem==='All') ? state.projects : state.projects.filter(project=>project.technologies.includes(state.filterItem))
    return (
        <div id="projects">
            <div className="title-container">
                <h2>Projects</h2>
            </div>
            <div className="container">
            <div className="filter-btns" onClick={filter}>
                {filters.map((item,index)=>(
                    <span key={item} className={(item.replace(" ", "_")===state.filterItem) ? 'active':''} name={item.replace(" ", "_")}>{item}</span>
                ))}
            </div>
                <FlipMove enterAnimation="accordionHorizontal" appearAnimation="accordionVertical" leaveAnimation="accordionVertical" duration={500} staggerDelayBy={100} className="items">
                {
                projects.map((item)=>(
                        <div className="item" key={item.title} style={{backgroundImage:`url(${item.imagePath})`}} onClick={void(0)}>
                            <h4 className="title">{item.title}</h4>
                            <div className="nav-bar">
                            <p>
                                <a title="Show website" href={item.showLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i></a>
                            </p>
                            {(item.gitHubLink!=='') ? 
                            <p>
                            <a title="Github" href={item.gitHubLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            </p> : null }
                            <p>
                                <Link title="Find out more of project" to={`/projects/${item.infoRoute}`}><i className="fas fa-info-circle"></i></Link>
                            </p>
                            </div>
                        </div>
                    ))}
                </FlipMove>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        state: state.app
    }
}

const mapDispatchToProps = {
        filterProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
