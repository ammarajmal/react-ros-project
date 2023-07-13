import React, {Component} from "react";

class Home extends Component {
    state = {};
    render() {
        return (
            <div>
                <main>
                    <h1 className="text-center m-3">Camera Control</h1>
                    <p>This is a simple React app controls and monitors ROS-enabled system through a Web Interface.</p>
                </main>
            </div>
        ); 
    }
}

export default Home;