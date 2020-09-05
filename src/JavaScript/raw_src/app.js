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
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id={"test"}>

            </div>
        );
    }
}

ReactDOM.render(<Shell />, document.getElementById("cont"));