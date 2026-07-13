// import React from 'react';
import './App.css';
import Header from "./sections/Header.tsx";
import Main from "./sections/Main.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./sections/Footer.tsx";
import {Page} from "./components/Page.tsx";


 export function App() {
    return (
        <Page>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </Page>

    )
}

export default App;