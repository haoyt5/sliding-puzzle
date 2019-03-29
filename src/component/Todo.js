import React from 'react';
export default (props) => (
    <div className="row collection-item valign-wrapper">
        <div 
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
                
            }}
            className="u-pointer  col s11 flow-text cyan-text text-accent-4"
            onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <a onClick={props.onDelete}
                className="col waves-effect  btn-flat  btn-large white "> <i className="material-icons cyan-text text-darken-4">clear</i></a>
    </div>

)