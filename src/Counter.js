import React from 'react';

//stateless component - pure components - it render the ui based on the props
// props - generates the ui 
// advantages  - immutable 
// Functional stateless component - just javascript functions 
// it is easier to execute functions. 

const Counter = (props)=>{
    // console.log("inside counter", props)
    return(
        <div>
        <h1>The count value  : {props.count}</h1>
         <button onClick={props.incrementCount}>Inc</button>
         <button onClick={props.decrementCount}>Dec</button>
         <button onClick={props.resetCounter}>Reset</button>
​
        </div>
    )
}
export default Counter 


// export default class Counter extends React.Component{

   
//     render(){
//         return(
//             <div>
//             <h1>Count Value : {this.props.count} </h1>
//             <button onClick={this.props.incrementCount}> Inc</button>
//             <button onClick={this.props.decrementCount}>Dec</button>
//             <button >Reset</button>
//             <hr/>
//            </div>
//         )
//     }
// }