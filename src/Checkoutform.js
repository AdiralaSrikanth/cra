import React from 'react'



export default class Checkoutform extends React.Component {

    render(){
        return(
            <div>
            <h1>Enter the details:</h1>
            First Name: <input placeholder="FirstName" onChange={this.props.onhandleChange} 
               value= {this.props.firstName}  name="firstName"/><br/><br/>
            Last Name: <input onChange={this.props.onhandleChange} placeholder="LastName" 
            value= {this.props.lastName} name="lastName"/><br/><br/>
            <button onClick = {this.props.nextStep}>Next</button>
            </div>
        )
    }


}