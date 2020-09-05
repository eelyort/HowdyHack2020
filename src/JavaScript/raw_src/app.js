class Shell extends React.Component{
    constructor(props){
        super(props);

        this.state = {ready: false};
        this.wrapperRef = React.createRef();
    }
    render(){
        if(this.state.ready){
            return (
                <div ref={this.wrapperRef} className={"react_wrapper"}>
                    <SquareFill parentRef={this.wrapperRef}>
                        <App />
                    </SquareFill>
                </div>
            );
        }
        else{
            return (
                <div ref={this.wrapperRef} className={"react_wrapper"}>
                </div>
            );
        }
    }
    componentDidMount(){
        this.setState(() => ({ready: true}));
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return null;
        // return(
        //     <div id={"test"}>
        //
        //     </div>
        // );
    }

}

ReactDOM.render(<Shell />, document.getElementById("cont"));