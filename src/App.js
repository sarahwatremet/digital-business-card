import React from "react"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <div className="compoContainer">
                <Introduction />
                <About />
                <Interests />
                <Footer /> 
            </div>
        </div>
    )
}


