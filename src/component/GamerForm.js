import React from 'react';
import shortid  from 'shortid';

class GamerForm extends React.Component{
    constructor(){
        super()
        this.state ={
            challengers: ""
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
        // console.log(this.state.challenger)
        console.log(this.props)
        console.log(this)
        // console.log(addChallenger)
        // console.log(addChallenger)
        // console.log(this)
        this.props(
            this.state.challengers
        )
        // this.setState({
        //     challenger: ""
        // })
    }
    render () {
        return(
            <div className="container">
            <div className="row center">
                <div className="col s1">  </div>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input  onChange={this.handleChange.bind(this)}
                            className="col s5 "
                            name="challenger"
                            type="text"
                            placeholder="I am ..."
                            
                            />
                    <div className="col s1">  </div>
                    <button className="btn-small col s3"
                            type="submit"
                                                >Start</button>
                </form>
                
            </div>
            </div>

        );
    }
}
export default GamerForm;