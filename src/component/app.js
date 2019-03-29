import React from 'react'
import shortid from 'shortid'
import TodoList from './TodoList'
import Game from './Game.js'

import { BrowserRouter,Route } from 'react-router-dom'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // todos:[],
            challengers:[]
        }
        // this.addChallenger=(challenger) =>{ 
        //     this.setState({
        //         challengers:[...this.state.challengers,challenger]
        //     })
        // }
    }
    addTodo (todo){
        this.setState({
            todos:[...this.state.todos,todo]
        });
        // this.switchStatus(this.props.status);
    }
    addChallenger(challenger){
        // console.log(this.state)
        this.setState({
            challengers:[...this.state.challengers,challenger]
        })
    }
    handleDeleteTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !=id )
        })
    }
    toggleComplete(id){
        this.setState({
            todos: this.state.todos.map(todo =>{
                if(todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete
                    }
                }else{
                    return todo
                }
            })
        })
    }

    render() {
        
        return(
              
        <BrowserRouter>
            <div className="to-do-app container">
                <h4 className="center  blue-text  text-lighten-2">Sliding Puzzle</h4>
                <Game addChallenger={this.addChallenger.bind(this)}
                     />
                {/* <The Game Container> */}
                {/* <Add name> */}
                {/* <TodoList/> */}
                {/* <Route path='/'> */}
                {/* <Route 
                    exact path="/" 
                    component={()=> 
                        <TodoList 
                                addTodo ={this.addTodo.bind(this)}
                                handleDeleteTodo = {this.handleDeleteTodo.bind(this)}
                                toggleComplete ={this.toggleComplete.bind(this)}
                                todos ={this.state.todos}
                                status='all'/>} ></Route>
                <Route path="/active" component={()=>
                        <TodoList 
                                    addTodo ={this.addTodo.bind(this)}
                                    handleDeleteTodo = {this.handleDeleteTodo.bind(this)}
                                    toggleComplete ={this.toggleComplete.bind(this)}
                                    todos ={this.state.todos}
                                    status='active'/>} ></Route>
                <Route path="/complete" component={()=>
                        <TodoList 
                                    addTodo ={this.addTodo.bind(this)}
                                    handleDeleteTodo = {this.handleDeleteTodo.bind(this)}
                                    toggleComplete ={this.toggleComplete.bind(this)}
                                    todos ={this.state.todos}
                                    status='complete'/>} ></Route> */}
            </div>
        </BrowserRouter> 


        );
    }
}

 export default App;