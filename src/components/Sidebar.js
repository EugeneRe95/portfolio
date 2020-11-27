import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import { showMenu, hideMenu } from '../redux/actions'

export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.toggleMenu=this.toggleMenu.bind(this)
    }
    toggleMenu(){
        if(this.props.menu.app.menu){
            this.props.hideMenu()
        }else{
            this.props.showMenu()
        }
    }
    render() {
        return (
            <header>
                <div id="logo">
                    <NavLink to="/">E<span>R</span></NavLink>
                </div>
                <div id="nav-btn" className={this.props.menu.app.menu ? "active" : ""} onClick={this.toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="social-icons">
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/evgeniy.revutskiy.5/"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eugene-revutski"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/EugeneRe95"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = {
    showMenu,
    hideMenu
  };

const mapStateToProps = state =>{
    return{
        menu: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
