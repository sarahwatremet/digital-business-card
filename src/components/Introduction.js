import React from "react"
import Sarah from "../images/sw-picture.jpeg"
import Email from "../images/email_icon.png"
import Linkedin from "../images/linkedin.png"


export default function Introduction() {
    return (
        <div className="introduction">
            <img src={Sarah} alt="Sarah Watremet" className="mainPicture"/>
            <h2>Sarah Watremet</h2>
            <h4>Student Software Developer</h4>
            <div className="link--buttons">
                <button className="email"><img src={Email} alt="email icon"></img><a href="mailto:sarah.watremet@gmail.com" target="_blank" rel="noreferrer">Email</a></button>
                <button className="linkedin"><img src={Linkedin} alt="LinkedIn icon"></img><a href="https://www.linkedin.com/in/sarah-watremet-0ab26464/" target="_blank" rel="noreferrer">LinkedIn</a></button>
            </div>
        </div>
    )
}