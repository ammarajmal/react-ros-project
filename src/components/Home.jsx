import React, {Component} from "react";
import Connection from "./Connection";
class Home extends Component {
    state = {
        counter: 0
    };
    incrementCounter() {
        
        console.log(this.state.counter);
        this.setState({counter: this.state.counter + 1});

    }
    render() {
        return (
            <div>
                <main>
                    <h1 className="text-center m-3">Camera Control</h1>
                    <Connection />
                    <p>This is a simple React app controls and monitors ROS-enabled system through a Web Interface.</p>
                    <h5>Counter:
                        <span> {this.state.counter} </span>
                    </h5>
                    <button className="btn btn-primary" onClick={() => this.setState({counter: this.state.counter + 1})}>My Increment</button>
                    <button onClick={()=>this.incrementCounter()}>Increment</button>
                </main>
            </div>
        ); 
    }
}

export default Home;