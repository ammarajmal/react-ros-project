import React, {Component} from "react";
import { Alert } from "react-bootstrap";
import Config from "../scripts/config.js";
class Connection extends Component {
    state = {
        connected: false,
        ros: null
    };
    constructor(){
        super();
        this.initConnection();
    }
    initConnection() {
        // this.setState({ros: new window.ROSLIB.Ros()})
        this.state.ros = new window.ROSLIB.Ros();
        console.log(this.state.ros);

        this.state.ros.on("connection", () => {
            console.log("Connection made!");
            this.setState({connected: true});
        });
        this.state.ros.on("close", () => {
            console.log("Connection closed.");
            this.setState({connected: false});
            // try to reconnect every 3 seconds
            setTimeout(() => {
                try{
                    this.state.ros.connect("ws://"+Config.ROSBRIDGE_SERVER_IP+":"+Config.ROSBRIDGE_SERVER_PORT);
                } catch (error) {
                    console.log("Connection failed!");
                    this.setState({connected: false});
                }
            }, Config.RECONNECTION_TIMEOUT);
            
        });

        try{
            this.state.ros.connect("ws://"+Config.ROSBRIDGE_SERVER_IP+":"+Config.ROSBRIDGE_SERVER_PORT);
        } catch (error) {
            console.log("Connection failed!");
            this.setState({connected: false});
        }
    }
render() {
            return (
                <div>
                    {
                        <Alert className="text-center m-3" variant={this.state.connected?"success":"danger"}>
                             {this.state.connected?"Camera Connected":"Camera Disconnected"}
                        </Alert>
                    }
                         
                </div>


            );
    }
}

export default Connection;
