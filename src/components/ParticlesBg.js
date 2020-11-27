import React, { Component } from 'react';
import Particles from 'react-particles-js';

export class ParticlesBg extends Component {
    constructor(props){
        super(props)
        this.state={number: '', push: true}
    }
    componentDidMount(){
        let widthWindow=window.innerWidth;
        this.setState({number: widthWindow/25},()=>{
            if(widthWindow<500){
                this.setState({push: false})
            }
        });
      this.resizeWindowListener = window.addEventListener('resize', ()=>{
            let width=window.innerWidth;
            this.setState({number: width/30},()=>{
                if(width<500){
                    this.setState({push: false})
                }else{
                    this.setState({push: true})
                }
            });
        })
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeWindowListener )
    }
    render() {
        return (
            <Particles  params={{
                "particles": {
                    "number": {
                        "value": this.state.number
                    },
                    "size": {
                        "value": 5
                    },
                    "color":{
                        "value": this.props.color
                    },
                    "move":{
                        "speed": 6
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        // "onclick": {
                        //     "enable": this.state.push,
                        //     "mode": "push"
                        // }
                    }
                }
            }} className="particles"/>
        )
    }
}

export default ParticlesBg
