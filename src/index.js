import React from 'react';
import ReactDOM from 'react-dom';
// import Try from './try'
import App from './component/app'
class MyHead extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <App/>;
    }
}

ReactDOM.render(
    <MyHead/>, 
    document.querySelector('#app')
);
