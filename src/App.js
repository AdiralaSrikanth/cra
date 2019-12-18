import React from 'react'
import Checkoutform from './Checkoutform'
import MoreDetails from './MoreDetails'
import CD from './CD'
import ThankYou from './ThankYou'
export default class App extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        step: 0,
    }

    nextStep = ()=>{
        this.setState((prevState) => ({
            step : prevState.step + 1
        }))
    }

    prevStep = ()=>{
        this.setState((prevState)=>({
            step : prevState.step - 1
        }))
    }

    onhandleChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        switch(this.state.step){
            case 0:
            return<Checkoutform  nextStep = {this.nextStep} onhandleChange = {this.onhandleChange} firstName = {this.state.firstName} lastName={this.state.lastName}/>;
            case 1: 
            return <MoreDetails prevStep={this.prevStep} nextStep = {this.nextStep}  onhandleChange = {this.onhandleChange} age = {this.state.age} gender={this.state.gender}/> ;
            case 2: 
             return <CD prevStep={this.prevStep} nextStep={this.nextStep} {...this.state}/>
             case 3:
                 return <ThankYou />
            default:
                return (<h1>Loading</h1>)
        }

    }




}