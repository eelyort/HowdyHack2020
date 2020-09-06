import React from 'react';

import App from "./app";
import {SquareFill} from "./utilities_react";

class Shell extends React.Component{
    constructor(props){
        super(props);

        console.log("Shell constructor");

        // this.state = {ready: false};
        // this.wrapperRef = React.createRef();
    }
    render(){
        return (
            <div ref={this.wrapperRef} className={"react_wrapper"}>
                <App />
            </div>
        );
    }
}

export default Shell;