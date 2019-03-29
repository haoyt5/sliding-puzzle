import React from 'react';
import shortid from 'shortid'
class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }

    }
    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        })
        
    };
    handleSubmit(e){
        e.preventDefault()
        this.props.addTodo({
            id: shortid.generate(),
            text: this.state.text,
            complete:false
        })
        this.setState({
            text: ""
        })
    };

    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                    <input className="col s10" name="text" value={this.state.text} onChange = {this.handleChange.bind(this)}
                        placeholder="To Do ..."  />
                    <button className="col s2" className="cyan darken-3 btn-small waves-effect waves-light " type="submit" name="action">ADD</button>
                </div>
            </form>
        )
    }
}
export default TodoForm;