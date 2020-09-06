import React, {Fragment} from 'react';
import * as Constants from './constants';

class Game extends React.Component{
    constructor(props){
        super(props);

        console.log("Game constructor");

        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        this.gameInterval = null;

        this.wrapper = React.createRef();
    }
    tick(){
        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        enemies.map((value, index) => value.tick(map));
        return (player.tick(map, enemies));
    }
    render(){
        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        const [currX, currY] = this.player.getGridPos();

        if(this.gameInterval) {
            setTimeout(() => requestAnimationFrame(() => this.forceUpdate()), 0);
        }

        let style = null;
        let player_div = null;
        let enemy_divs = null;
        if(this.wrapper.current) {
            const [width, height] = [this.wrapper.current.offsetWidth, this.wrapper.current.offsetHeight];
            let xOffset = this.player.x - width/2;
            let yOffset = this.player.y - height/2;
            style = {
                backgroundPosition: `${xOffset}px ${yOffset}px`,
                backgroundImage: `./Images/${graphicMap}`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `100% 100%`
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
            <div className={"wrapper_div full_fill"} style={style} ref={this.wrapper}>
                {((this.wrapper.current) ? (
                    <Fragment>
                        {player_div}
                        {enemy_divs}
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
        }
    }
}

export default Game;