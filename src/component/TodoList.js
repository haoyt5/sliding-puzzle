import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Route,NavLink} from 'react-router-dom';

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[],
            todoToShow: "all",
            toggleAllComplete: true,
            filterTodos: []
        }

    }
    // addTodo (todo){
    //     this.setState({
    //         todos:[...this.state.todos,todo]
    //     });
    //     // this.switchStatus(this.props.status);
    // }
    // toggleComplete(id){
    //     this.setState({
    //         todos: this.state.todos.map(todo =>{
    //             if(todo.id === id){
    //                 return{
    //                     ...todo,
    //                     complete: !todo.complete
    //                 }
    //             }else{
    //                 return todo
    //             }
    //         })
    //     })
    // }
    updateTodoToShow (string){
        this.setState({
            todoToShow: string
        })
    }
    // handleDeleteTodo(id){
    //     this.setState({
    //         todos: this.state.todos.filter(todo => todo.id !=id )
    //     })
    // }
    removeAllTodosThatAreComplete(id){
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete )
        })
    }
    switchStatus (status) {
        let todos =[];
        if (status === 'all'){
            todos = this.props.todos
        } else if(status === 'active'){
            todos = this.props.todos.filter(todo => !todo.complete);
        } else if(status === 'complete'){
            todos = this.props.todos.filter(todo => todo.complete);
        } 
        this.setState({filterTodos:todos})    
    }
    componentDidMount() {
        this.switchStatus(this.props.status);
     }
    render() {
        const todos = this.state.filterTodos;
        const { addTodo,handleDeleteTodo,toggleComplete } = this.props

        return(
            <div className="container">          
            <TodoForm addTodo={addTodo}/>
            <div className="teal-text row">
                <div className="col s8 flow-text light-blue-text text-darken-2">
                 {todos.filter(todo => !todo.complete).length} pending tasks
                </div>
                {/* {todos.some(todo=>todo.complete) ? (
                    <div className="col s4 center">
                    <a onClick={this.removeAllTodosThatAreComplete.bind(this)} className="waves-effect  btn-flat  btn-small  ">complete<i className="material-icons right cyan-text text-darken-4">clear_all</i></a>
                    </div>
                ):null} */}
                
            </div>
            {/* <div className="row">
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('all')} className="grey lighten-5 cyan-text text-accent-3   waves-effect waves-light btn-flat ">ALL</button>
                </div>
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('active')} className="grey lighten-5 cyan-text text-accent-4 waves-effect waves-light btn-flat">ACTIVE</button>
                </div>
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('complete')} className="grey lighten-5 cyan-text text-darken-2 waves-effect waves-light btn-flat">COMPLETE</button>
                </div>
                <div className="col s3">
                    <button onClick={()=>this.setState({
                        todos: todos.map(todo =>({
                                    ... todo,
                                    complete: this.state.toggleAllComplete
                                })),
                        toggleAllComplete: !this.state.toggleAllComplete
                    })}
                            className="grey lighten-5 cyan-text text-darken-4 waves-effect waves-light btn-flat">all done: {`${this.state.toggleAllComplete}`}</button>
                    </div>
            </div> */}
            <div className="row grey lighten-5 ">
                
                <NavLink  className="col s4 center" to="/"><div className="grey lighten-5 cyan-text text-darken-2 waves-effect waves-light btn-flat">All</div></NavLink>
                <NavLink  className="col s4 center"  to="/active"><div className="grey lighten-5 cyan-text text-darken-2 waves-effect waves-light btn-flat">Active</div></NavLink>
                <NavLink  className="col s4 center"  to="/complete"><div className="grey lighten-5 cyan-text text-darken-2 waves-effect waves-light btn-flat">Complete</div></NavLink>
            </div>
            {/* START */}
            <div className="collection">
                {todos.map(todo =>(
                    <Todo key={todo.id} 
                        todo={todo}
                        onDelete={()=>handleDeleteTodo(todo.id)}
                        toggleComplete={()=>toggleComplete(todo.id)} />
                ))}
            </div>
            {/* END */}



            </div>
            
        ); 
    }
}
// class TodoList extends React.Component{

//     render(){
//         return(
//             <div className="container">
//             <h1>Yeahhh</h1>
//             </div>
//         )
//     }

// }