import React from  'react'

const Todos = ( {todos, deleteTodo} ) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item u-pointer" key={todo.id} onClick={()=>{toggleComplete(todo.id)}}>
                    {/* <input type="checkbox" /> */}
                    <span >{todo.content}</span>
                    {/* <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span> */}
                </div>
            )
        })
    ) : (
    <p className="center"> 沒有待辦事項 </p>
    )
    return (
    <div className="todos collection">
        {todoList}
    </div>
    )
}
export default Todos;