import React, {useState} from 'react'
import { ParticlesBg } from './ParticlesBg'

import photo from '../images/me.jpg'

function About() {
    const [color, setColor] = useState("#8b8b8b")
    const [colorTool, setColorTool] = useState('')
    function changeParticleColor(e){
        const el=e.target
        if(el.tagName==="SPAN"){
            setColor(`${el.getAttribute('name')}`)
        }
    }
    function toggleColorSettings(){
        if(colorTool===''){
            setColorTool('active')
        }else{
            setColorTool('')
        }
    }
    return (
        <div id="about-me">
            <div className="side-image">
                <div className="particles-controller">
                <div className={"color-setting "+ colorTool} onClick={changeParticleColor}>
                    <span name="#ff0000" style={{background:"#ff0000"}}></span>
                    <span name="#f68338" style={{background:"#f68338"}}></span>
                    <span name="#8b8b8b" style={{background:"#8b8b8b"}}></span>
                </div>
                <i className={"fas fa-cog "+((colorTool==='active') ? '' : 'fa-spin')} title="color-scheme"  onClick={toggleColorSettings}></i>
                </div>
                <ParticlesBg color={color}/> 
            </div>
            <div className="about-me-content">
                <div className="container">
                <div className="title wow animate__animated animate__fadeInDown">
                <h2>About me</h2>
                <p>I'm Eugene Revutskiy, Front-end developer based in Kyiv, Ukraine. <br/> I'm specializing in building interactive web interfaces.</p>
                </div>
                <div className="body">
                    <div className="about-me-image wow animate__animated animate__fadeInLeft">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="text-content wow animate__animated animate__fadeInRight">
                        <h3>Origin story</h3>
                        <p>Since beginning my path as programmer, when I decided to radically change my career from the one I had to the one I would be passionate about,  I moved from zero understanding of programming to the point of ability to create client side of websites using latest trending technologies like React/Redux. I like learning new techs and implement them in real projects.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
