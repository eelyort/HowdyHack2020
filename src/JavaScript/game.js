import React, {Fragment} from 'react';
import * as Constants from './constants';

class Game extends React.Component{
    constructor(props){
        super(props);

        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        this.player = player;

        this.time = 0;

        this.gameInterval = null;

        this.wrapper = React.createRef();
    }
    tick(){
        this.time++;
    }
    render(){
        const {map: map, start: start, player: player, enemies: enemies, graphicMap: graphicMap} = this.props;

        const [currX, currY] = this.player.getGridPos();

        if(this.gameInterval) {
            setTimeout(() => requestAnimationFrame(() => this.forceUpdate()), 0);
        }

        if(this.wrapper.current) {
            const [width, height] = [this.wrapper.current.offsetWidth, this.wrapper.current.offsetHeight];
            let xOffset = this.player.x - width/2;
            let yOffset = this.player.y - height/2;
            let style = {
                backgroundPosition: `${xOffset}px ${yOffset}px`,
                backgroundImage: `./Images/${graphicMap}`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `100% 100%`
            };
        }

        return(
            <div className={"wrapper_div full_fill"} ref={this.wrapper}>
                {((this.wrapper.current) ? (
                    <Fragment>

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