import React from "react"
import Header from "./components/Header/Header"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";

function App(){
    return(
        <>
            <Header />
            <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Inicio />} />                        
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;