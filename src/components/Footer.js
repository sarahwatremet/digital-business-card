import React from "react"
import Github from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"
import Email from "../images/email.svg"
import Cv_icon from "../images/cv.svg"
import Cv_image from "../images/SarahWatremet_CV.pdf"


export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/sarahwatremet" target="_blank" rel="noreferrer" alt="link to github"><img src={Github} alt="linkedin"></img></a>
            <a href="https://www.linkedin.com/in/sarah-watremet-0ab26464/" target="_blank" rel="noreferrer" alt="link to Linkedin"><img src={Linkedin} alt="linkedin"></img></a>
            <a href="mailto:sarah.watremet@gmail.com" target="_blank" rel="noreferrer" alt="link to email"><img src={Email} alt="email"></img></a>
            <a href={Cv_image} target="_blank" rel="noreferrer" alt="link to CV"><img src={Cv_icon} alt="cv"></img></a>
        </div>
    )
}