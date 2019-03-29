import React from 'react';


class GamerForm extends React.Component{

    render () {
        return(
            <div className="container">
            <div className="row center">

                <input className="col s5"
                        type="text"
                        placeholder="I am ..."
                        />
                <div className="col s3">  </div>
                <button className="btn-small col s2"

                                            >Start</button>
            </div>
            </div>

        );
    }
}
export default GamerForm;