import React, { Component } from 'react'

export default class CD extends Component {
    render() {
        return (
            <div>
                <h1>FirstName : {this.props.firstName}</h1>
                <h1>Last Name: {this.props.lastName}</h1>
                <h1>Age: {this.props.age}</h1>
                <h1>Gender: {this.props.gender}</h1>
                <button onClick = {this.props.nextStep}>Submit</button>
                <button onClick={this.props.prevStep}>Back</button>
            </div>
        )
    }
}

