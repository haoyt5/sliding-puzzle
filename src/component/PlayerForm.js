import React from 'react';


class PlayerForm extends React.Component{

    render () {
        return(
                <div className="row">
                    <input  className="col s5"
                            type="text"
                            placeholder="Input you name"/>
                    <div className="col s3">..</div>
                    <button className="col s2"
                            type="submit"
                            name="action">START</button>
                </div>
        );
    }
}
export default PlayerForm;