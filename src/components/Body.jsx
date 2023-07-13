import React, {Component} from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
class Body extends Component {
    render() {
        return (
        <Container>
            <p>Body</p> 
            <Router>
                    <Route path="/" element={Home} />
                    <Route path="/About" element={About} />                    
            </Router>
        </Container>
        );
    }
}

export default Body;