import React from "react"
import ReactDOM from "react-dom"
import Appcss from "./app.css"
import Navbar from "./components/Navbar.jsx"
import Section from "./components/Section.jsx"

function App() {

    return(
        <div>
        <Navbar></Navbar>
        <Section></Section>
        </div>   
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
