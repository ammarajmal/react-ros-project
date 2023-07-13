import React, {Component} from "react";
import { Container } from "react-bootstrap";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
     } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class Body extends Component {
    render() {
        return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </BrowserRouter>
        </Container>
        );
    }
}

export default Body;