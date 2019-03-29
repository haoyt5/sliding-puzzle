import React from 'react';
import GamerForm from './GamerForm'

class StatusMenu extends React.Component{
    render(){
        return (
            <div className="statusmenu row">
                <p>[place holders] (counts) clicks / [Win] Puzzle Solved in (counts) clicks</p>
            </div>
        );
    }


} 
class Tile extends React.Component{

    render(){
        console.log(this)
        return(
        

            <div className="tile main-button main-btn u-border"
             >{this.props.status}</div>
        );

    }

}
class Game extends React.Component{
    constructor(props){
        super();
        this.state = {
            tiles:[1,2,3,4,5,6,7,8,''],
            win: false
        }
    }
    render(){
        return(
            <div className="gameboard">
            <GamerForm />
            <div className="container center">
                <div id="game-board">
                {this.state.tiles.map(tile => 
                    <Tile status={tile}/>
                    )}
                </div>
            </div>


            <p>{this.state.tiles}</p> 
            <StatusMenu />
            </div>
   
        )

    }

}
export default Game;