import React from "react";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom'
import { hideMenu } from "../redux/actions";

function Menu({ menuState, hideMenu }) {
  function closeMenu(){
    hideMenu()
  }
  function changeRoute(e){
    if(e.target.tagName==="A"){
      hideMenu()
    }
  }
  return (
    <>
      <div id="menu" className={menuState ? "active" : ""}>
        <div className="menu-logo">Eugene<span>Revutskiy</span></div>
        <nav className="menu-navigation">
          <ul onClick={changeRoute}>
            <li>
              <NavLink activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/contacts">Contact me</NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu-social-icons">
        <ul>
          <li><p>Share:</p></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://eugenere95.github.io/portfolio"><i className="fab fa-facebook-f"></i></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/shareArticle?mini=true&url=https://eugenere95.github.io/portfolio&title=&summary=&source="><i className="fab fa-linkedin-in"></i></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://pinterest.com/pin/create/button/?url=https://eugenere95.github.io/portfolio&media=&description="><i className="fab fa-pinterest"></i></a></li>
        </ul>
        </div>
      </div>
      <div className={"menu-bg-overlay"+((menuState ? " active" : ""))}  onClick={closeMenu}></div>
      <div className={"menu-bg-color" +((menuState ? " active" : ""))}></div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    menuState: state.app.menu
  };
};
const mapDispatchToProps = {
  hideMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
