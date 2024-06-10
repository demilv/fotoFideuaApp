import React from "react"
import Header from "./components/Header/Header"
import {BrowserRouter, Router, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";

function App(){
    return(
        <>
            <BrowserRouter>
                <Header />
                <Navbar />
            </BrowserRouter>
        </>
    )
}

export default App;