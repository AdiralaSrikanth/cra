import React from 'react'



export default class MoreDetails extends React.Component {

    render(){
        return(
            <div>
            <h1>More details:</h1>
                Age: <input placeholder="Age" onChange={this.props.onhandleChange} value={this.props.age} name="age"/><br/><br/>
                Gender: <input onChange={this.props.onhandleChange} value= {this.props.gender}placeholder="Gender" name="gender"/><br/><br/>
            <button onClick={this.props.nextStep}>Next</button>
            <button onClick={this.props.prevStep}>Back</button>
            </div>
        )
    }


}