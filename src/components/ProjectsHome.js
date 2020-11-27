import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class ProjectsHome extends Component {
    render() {
        return (
            <div id="projects-home">
                <div className="title-container">
                    <h2>My Projects</h2>
                </div>
                <div className="container">
                    <div className="items">
                    {this.props.state.projects.slice(0,3).map((item,index)=>(
                        <div className="item wow animate__animated animate__fadeIn" key={item.title} style={{backgroundImage:`url(${item.imagePath})`, animationDelay: 200*index+'ms'}} onClick={void(0)}>
                            <h4 className="title">{item.title}</h4>
                            <div className="nav-bar">
                            <p>
                                <a title="Show website" href={item.showLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i></a>
                            </p>
                            {(item.gitHubLink!=='') ? 
                            <p>
                            <a title="Github" href={item.showLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            </p> : null }
                            <p>
                            <Link title="Find out more of project" to={`/projects/${item.infoRoute}`}><i className="fas fa-info-circle"></i></Link>
                            </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="all-projects-btn"><Link to="/projects">Show All</Link></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state: state.app
    }
}

export default connect(mapStateToProps, null)(ProjectsHome)
