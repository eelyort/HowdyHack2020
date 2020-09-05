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

// grid: [x, y]
//  -1: invalid
//   0: empty
//   1: grass
// covidGrid: [x, y]
//   true/false
class App extends React.Component{
    constructor(props){
        super(props);

        this.player = new Player();

        this.state = {stage: 0};

        this.game = null;

        this.interval = null;

        this.tick = this.tick.bind(this);
        this.nextStage = this.nextStage.bind(this);
    }
    tick(){
        if(!this.game.tick()){
            this.nextStage();
        }
    }
    nextStage(){
        // to tutorial
        if(this.state.stage === 0){
            this.interval = setInterval(() => this.tick(), tickSpeed);
            this.game = (
                <Game map={map1} start={start1} player={this.player} />
            );
        }
        // to main
        else if(this.state.stage === 1){
            this.interval = setInterval(() => this.tick(), tickSpeed);
            this.game = (
                <Game map={map2} start={start2} player={this.player} />
            );
        }
        // increment
        this.setState((state) => ({stage: state.stage+1}));
    }
    render(){
        // the content
        let game = null;
        // item select
        if(this.state.stage === 0){
            game = (
                <Inventory player={this.player} />
            );
        }
        // tutorial or game
        else if(this.state.stage === 1 || this.state.stage === 2){
            game = this.game;
        }
        // end
        else{
            game = (
                <EndCredit />
            );
        }

        // render
        return(
            <Fragment>
                <UI />
                {game}
            </Fragment>
        );
    }

}

// grid: [x, y]
//  -1: invalid
//   0: empty
//   1: grass
// covidGrid: [x, y]
//   true/false
class Game extends React.Component {
    constructor(props){
        super(props);

        this.myPlayer = this.props.player;
        this.map = this.props.map;
        this.myStart = this.props.start;

        this.myEnemies = [];

        [this.myPlayer.x, this.myPlayer.y] = this.myStart;
    }
    tick(){
        this.myPlayer.tick();
        return true; // TODO
    }
}

ReactDOM.render(<Shell />, document.getElementById("cont"));