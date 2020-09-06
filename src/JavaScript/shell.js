import React from 'react';

import App from "./app";
import {SquareFill} from "./utilities_react";

class Shell extends React.Component{
    constructor(props){
        super(props);

        // this.state = {ready: false};
        // this.wrapperRef = React.createRef();
    }
    render(){
        return (
            <div ref={this.wrapperRef} className={"react_wrapper"}>
                <App />
            </div>
        );
        // if(this.state.ready){
        //     return (
        //         <div ref={this.wrapperRef} className={"react_wrapper"}>
        //             <SquareFill parentRef={this.wrapperRef}>
        //                 <App />
        //             </SquareFill>
        //         </div>
        //     );
        // }
        // else{
        //     return (
        //         <div ref={this.wrapperRef} className={"react_wrapper"}>
        //         </div>
        //     );
        // }
    }
    // componentDidMount(){
    //     this.setState(() => ({ready: true}));
    // }
}

export default Shell;