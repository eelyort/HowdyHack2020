import React from 'react';

import UI from "./uilayer";
import Player from "./player";
import Game from "./game";
import ItemSelectionScreen from "./ItemSelectionScreen";
import EndScreen from "./endScreen";
import * as Constants from "./constants";
import * as Data from "./data";
import * as Util from "./utilities_react";

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
            this.interval = setInterval(() => this.tick(), Constants.tickSpeed);
            this.game = (
                <Game map={Data.map1} start={Data.start1} player={this.player} enemies={Data.enemies1} graphicMap={Data.graphicMap1} />
            );
        }
        // to main
        else if(this.state.stage === 1){
            this.interval = setInterval(() => this.tick(), Constants.tickSpeed);
            this.game = (
                <Game map={Data.map2} start={Data.start2} player={this.player} enemies={Data.enemies2} graphicMap={Data.graphicMap2} />
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
                <ItemSelectionScreen player={this.player} />
            );
        }
        // tutorial or game
        else if(this.state.stage === 1 || this.state.stage === 2){
            game = this.game;
        }
        // end
        else{
            game = (
                <EndScreen />
            );
        }

        // render
        return(
            <Util.Fragment>
                <UI />
                {game}
            </Util.Fragment>
        );
    }
}

export default App;