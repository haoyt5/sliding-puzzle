import React from 'react';


class StatusMenu extends React.Component{
    clickHandler(e){
        // console.log(this.props.tileClick)
        // this.props.tileClick(e.target, this.props.position, this.props.status);
        this.props.restart();
    }
    render(){
        return (
            <div id="menu"className="statusmenu row center">
                        <h3 id="subtitle">{this.props.status}</h3>
                        <button className={this.props.winClass}
                                className= "btn-large"
                                onClick={this.clickHandler.bind(this)}>Restart</button>
                        <br/>
                        <br/>
                        
                        {/* <p>[place holders] (counts) clicks / [Win] Puzzle Solved in (counts) clicks</p> */}
            </div>
        );
    }


} 
class Tile extends React.Component{
    clickHandler(e){
        // console.log(this)
        // console.log('e.target',e.target)
        // console.log('this.props.position',this.props.position)
        // console.log('this.props.status', this.props.status)
        //  tileClick(tileElement, position, status)
        this.props.tileClick(e.target,this.props.position, this.props.status);
    }
    render(){
        // console.log(this)
        return(
            <div className="tile main-button main-btn u-border"
                 onClick={this.clickHandler.bind(this)}
                                                                >{this.props.status}</div>
        );

    }

}
class Game extends React.Component{
    constructor(props){
        super();
        this.state = {
            challenger: "",
            name:"",
            tiles:[1,2,3,4,5,6,'',7,8],
            win: false
        }
    }
    shuffle(array){
            // switches first two tiles
            function switchTiles(array) {
                var i = 0;

                // find the first two tiles in a row
                while (!array[i] || !array[i+1]) i++;

                // store tile value
                var tile = array[i];
                // switche values
                array[i] = array[i+1];
                array[i+1] = tile;

                return array;
            }
            // counts
            function countInversions(array) {
                // make array of inversions
                var invArray = array.map(function(num, i) {
                    var inversions = 0;
                    let j=0;
                    for (j = i + 1; j < array.length; j++) {
                        if (array[j] && array[j] < num) {
                            inversions += 1;
                        }
                    }
                    return inversions;
                });
                // return sum of inversions array
                return invArray.reduce(function(a, b) {
                    return a + b;
                });
            }

            // fischer-yates shuffle algorithm
            function fischerYates(array) {
                var counter = array.length, temp, index;

                // While there are elements in the array
                while (counter > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * counter);
                    // Decrease counter by 1
                    counter--;
                    // And swap the last element with it
                    temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }

                return array;
            }

            // Fischer-Yates shuffle
            array = fischerYates(array);

            // check for even number of inversions
            if (countInversions(array) % 2 !== 0) {
                // switch two tiles if odd
                array = switchTiles(array);
            }

            return array;
    }
    restartGame(){
        this.setState(this.getInitialState());
    }
    getInitialState(){
        return {
            // initial state of game board
            tiles: this.shuffle([
                1,2,3,
                4,5,6,
                7,8,''
            ]),
            win: false
        };
    }
    
    checkBoard(){
        let tiles = this.state.tiles;
        for (let i =0; i<tiles.length-1; i++){
            if(tiles[i] !== i+1) 
            return false;
        }
        return true
    }
    tileClick (tileElement, position, status){
        let tiles = this.state.tiles;
        let moves = [
            [null,1,3,null],[null,2,4,0],[null,null,5,1],
            [0,4,6,null],   [1,5,7,3],   [2,null,8,4],
            [3,7,null,null],[4,8,null,6],[5,null,null,7]
        ];
        function animateTiles(i, move){
            const directions = ['up','right','down','left'];
            const moveToElement = document.querySelector('.tile:nth-child('+ (move+1)+')');
            let direction = directions[i];
            tileElement.classList.add( 'move-' + direction);

            setTimeout(function(){
                moveToElement.classList.add('hightlight');
                tileElement.classList.remove( 'move-' + direction);
                setTimeout(function(){
                    moveToElement.classList.remove('highlight');
                },400)
                
            },200)
        }
        function afterAnimate(){
            tiles[position] ='';
            tiles[move] = status;
            this.setState(prevState =>{
                return{
                    tiles: prevState.tiles,
                    moves: moves,
                    win: this.checkBoard()
                }
            });
        }
        //return if they've already won
        if(this.state.win){
            console.log('贏了～～')
            alert('已完成請重新開始新局！')
            return;
        } 
        // check possible moves
        for (var i = 0; i < moves[position].length; i++) {
            var move = moves[position][i];
            // if an adjacent tile is empty
            if (typeof move === 'number' && !tiles[move]) {
                animateTiles(i, move);
                setTimeout(afterAnimate.bind(this), 200);
                break;
            }
        }

    }
    handleChange(e){
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
       this.props.addChallenger({
           id:1,
           challenger: this.state.challenger,
           complete: false,
           clicks:0
       })
       this.setState({
           challenger: "",
           name: this.state.challenger
       })

    }
    render(){
        return(
            <div className="gameboard">
            {/* <GamerForm addChallenger={addChallenger} /> */}
            {/* GameForm Start*/}
            <div className="container">
            <div className="row center">{ this.state.name} join the challenge.</div>
            <div className="row center">
                <div className="col s1">  </div>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input  onChange={this.handleChange.bind(this)}
                            className="col s5 "
                            name="challenger"
                            type="text"
                            placeholder="submit your name to join"
                            value={this.state.challenger}
                            />
                    <div className="col s1">  </div>
                    <button className="btn-small col s3"
                            type="submit"
                                                >Submit</button>
                </form>
                
            </div>
            </div>
            {/* GameForm End */}
            
            <div className="container center">
                {/* <p>The Quiz:{this.state.tiles}</p>  */}
                <div id="game-board">
                {/* {this.state.tiles.map(funciton( tile, position ) {
                    return(
                        <Tile status={tile} tileClick={this.tileClick}/>
                         )
                } , this)} */}
                {this.state.tiles.map(tile => 
                    <Tile status={tile}
                          key={tile.toString()}
                          position={this.state.tiles.indexOf(tile)}
                          tileClick={this.tileClick.bind(this)}/>
                )}
                </div>
            </div>
            <StatusMenu tileClick={this.tileClick.bind(this)} 
                        restart={this.restartGame.bind(this)}/>
            </div>
   
        )

    }

}

export default Game;