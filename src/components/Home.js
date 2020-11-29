import React, { Component } from 'react'


export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            nav: ''
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll, false)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.onScroll, false)
    }
    onScroll = () => {
        if(window.scrollY<window.innerHeight-80){
            this.setState({nav: ''})
        }else{
            this.setState({nav: 'fixed'})
        }
    }
    render() {
        return (
            <div id="home">
            <div className="home-welcoming">
            <h1 className="animate__animated animate__fadeInLeft">Hi there! <br/> I'm Eugene Revutskiy <br/><span>Front-end Developer</span> </h1>
            <a className="start-btn animate__animated animate__fadeIn" href="#about-me">Let's Start</a>
            </div>
            <div className="background-image"></div>
            <div className={"scroll-navigation " + this.state.nav}>
                <div className="scroll-indicator">Scroll Down <span></span></div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about-me">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects-home">Projects</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
}

export default Home
