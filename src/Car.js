import React from 'react';

class Car extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { color: 'Red'};
    // }
    render() {
        return <h2>Hi, I am a {this.props.colorido} Car!</h2>;
    }
}


export default Car;
