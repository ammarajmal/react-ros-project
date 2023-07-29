import React, {Component} from "react";
import ROSLIB from "roslib";
import ROS2D from "ros2d";
class Connection extends Component {
    state = {};
    initConnection() {
        let ros = new ROSLIB.Ros();
    }
render() {
            return (
                <h2>Connection</h2>

            );
    }
}

export default Connection;
