import React from 'react'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:''
        }
    }
    handleChange(e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this);
        this.props.addTodo(this.state)
        this.setState ({
            content: '',
            complete: false
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {/* <label>新增代辦事項</label> */}
                    <input 
                           name="text"
                           placeholder="代辦事項..." 
                           type="text" 
                           onChange={this.handleChange.bind(this)} 
                           value={this.state.content}/>
                    <button className="btn-small waves-effect waves-light" type="submit" >新增</button> 
                </form>
            </div>
        )
    }
}

export default AddTodo;