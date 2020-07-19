import React from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {
    return <div>
        <h1>Hello {name}</h1>
        <p>Welcome</p>
    </div>
}


// class Demo extends React.Component {
//     render (){
//         return<div className="maindiv_style">
//                 <h1>hello world {this.props.name}</h1>
//         		<p>Welcome</p>
//             </div>
//     }
// }

export default Demo;