import React from "react"
import Header from "./components/Header/Header"
import {BrowserRouter, Router, Routes} from 'react-router-dom'

function App(){
    return(
        <>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </>
    )
}

export default App;