import React, {Fragment} from 'react';
import * as Constants from './constants';
import TutorialPretty from '../Images/TutorialPretty.png';

class Game extends React.Component{
    constructor(props){
        super(props);

        console.log("Game constructor");

        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        // console.log("game construc player:");
        // console.log(player);

        [player.x, player.y] = start;
        // console.log(player);

        console.log(`map width: ${map.length}, map height: ${map[0].length}`);

        this.gameInterval = null;

        this.wrapper = React.createRef();
        this.canvasRef = React.createRef();

        this.tick = this.tick.bind(this);
    }
    tick(){
        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        // console.log("game tick");

        enemies.map((value, index) => value.tick(map));
        let ans = player.tick(map, enemies);

        this.forceUpdate();

        return ans;
    }
    render(){
        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        const [currX, currY] = player.getGridPos();

        // // console.log("game render");
        // // TODO delete test
        // let openSpots = [];
        // for (let x = 0; x < map.length; x++) {
        //     for (let y = 0; y < map[x].length; y++) {
        //         let style = {
        //             height: "5px",
        //             width: "5px",
        //             backgroundColor: "green",
        //             position: "absolute",
        //             top: `${y * Constants.scaleFactor}px`,
        //             left: `${x * Constants.scaleFactor}px`
        //         };
        //         if(map[x][y] === 0){
        //             openSpots.push(
        //                 <div key={`${x} ${y}`} style={style} className={"open_icon"}/>
        //             );
        //         }
        //     }
        // }
        // let inlineDeath = {
        //     height: "15px",
        //     width: "15px",
        //     backgroundColor: "magenta",
        //     position: "absolute",
        //     top: `${currY * Constants.scaleFactor}px`,
        //     left: `${currX * Constants.scaleFactor}px`
        // };
        // openSpots.push(
        //     <div key={"player"} style={inlineDeath} className={"open_icon"}/>
        // );

        let style = null;
        let player_div = null;
        let enemy_divs = null;
        if(this.wrapper.current) {
            const [width, height] = [this.wrapper.current.offsetWidth, this.wrapper.current.offsetHeight];
            // console.log(`width: ${width}, height: ${height}, current: ${this.wrapper.current}`);
            let xOffset = (-player.x * Constants.scaleFactor) + width/2;
            let yOffset = (-player.y * Constants.scaleFactor) + height/2;
            // console.log(player.x);
            // console.log(`xOffset: ${xOffset}, yOffset: ${yOffset}`);
            // style = {
            //     backgroundColor: "magenta"
            // };
            style = {
                backgroundPosition: `${xOffset}px ${yOffset}px`,
                // backgroundPosition: "0 0",
                // backgroundImage: `url(\"./Images/${graphicMap}\")`,
                backgroundImage: `url(${TutorialPretty})`,
                backgroundRepeat: "no-repeat",
                // backgroundSize: `${100 * Constants.mapResolution}% ${100 * Constants.mapResolution}%`
                // backgroundSize: `calc(auto * 5)`
                backgroundSize: `${map.length * Constants.scaleFactor}px ${map[0].length * Constants.scaleFactor}px`
            };

            player_div = (
                <div className={"player_icon"}></div>
            );

            enemy_divs = enemies.map((value, index) => {
                // TODO cones and danger zones
                let internalStyle = {
                    top: `${(value.y - player.y) + (height/2)}px`,
                    left: `${(value.x - player.x) + (width/2)}px`
                };
                return (
                    <div className={"enemy_icon"} style={internalStyle}></div>
                );
            });
        }

        return(
            <div className={"wrapper_div full_fill game_div"} style={style} ref={this.wrapper}>
                {((this.wrapper.current) ? (
                    <Fragment>
                        {player_div}
                        {enemy_divs}
                        {/*{openSpots}*/}
                    </Fragment>
                ) : null)}
            </div>
        );
    }
    componentDidMount() {
        this.gameInterval = setInterval(() => this.tick(), Constants.tickBtwMS);
        requestAnimationFrame(() => this.forceUpdate());
    }
    componentWillUnmount() {
        if(this.gameInterval){
            clearInterval(this.gameInterval);
            this.gameInterval = null;
        }
    }
}

export default Game;