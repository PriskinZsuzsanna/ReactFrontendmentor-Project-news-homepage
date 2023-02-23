import './Hero.css'
import LeftSide from './LeftSide'
import Side from './Side'

import HeroImgMobile from '../assets/images/image-web-3-mobile.jpg'
import HeroImgDesktop from '../assets/images/image-web-3-desktop.jpg'

import React from 'react'

const Hero = () => {

    const text = {
        title: "The Bright Future of Web 3.0?",
        parag: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
        btn: "Read more"
    }

    const sideText = [
        {
            title: "Hydrogen VS Electric Cars",
            text: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            title: "The Downsides of AI Artistry",
            text: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            title: "Is VC Funding Drying Up?",
            text: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
    ]

    return (
        <section className="hero">
            <LeftSide
                heroImgMobile={HeroImgMobile}
                heroImgDesktop={HeroImgDesktop}
                title={text.title}
                parag={text.parag}
                btn={text.btn}
            />
            <Side 
            sideText={sideText}/>

        </section>
    )
}

export default Hero
