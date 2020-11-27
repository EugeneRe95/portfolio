import React, { useEffect } from 'react'

function Home() {
    useEffect(()=>{
        const scrollNav = document.querySelector('.scroll-navigation')
        let offTop = scrollNav.offsetTop;
        window.addEventListener('resize',()=>{
            offTop = scrollNav.offsetTop;
        })
        window.addEventListener('scroll',()=>{
            if(offTop<window.scrollY){
                if(offTop==="0"){
                    console.log(window.scrollY + '/'+window.innerHeight)
                    if(window.scrollY<window.innerHeight-80){
                        scrollNav.classList.remove('fixed')
                    }else{
                        scrollNav.classList.add('fixed')
                    } 
                }else{
                scrollNav.classList.add('fixed')
            }
            }else{
                scrollNav.classList.remove('fixed')
            }
        })
    })
    return (
        <div id="home">
            <div className="home-welcoming">
            <h1 className="animate__animated animate__fadeInLeft">Hi there! <br/> I'm Eugene Revutskiy <br/><span>Front-end Developer</span> </h1>
            <a className="start-btn animate__animated animate__fadeIn" href="#about-me">Let's Start</a>
            </div>
            <div className="background-image"></div>
            <div className="scroll-navigation">
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

export default Home
