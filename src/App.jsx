import React from "react"
import Header from "./components/Header/Header"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Favoritos from "./components/Favoritos/Favoritos";
import Footer from "./components/Footer/Footer";

function App(){    

    return(
        <>
            <Header />
            <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<Inicio />} />   
                        <Route path="/favoritos" element={<Favoritos />} />                   
                    </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;