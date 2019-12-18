import React from 'react'
import Counter from './Counter'
import ListContacts from './ListContact'

class App extends React.Component{
  state = {
      toggle : false,
      count :  0,
      contacts : [
        {
          id: '1',
          name: 'afzal',
          handle: '@afzal',
          avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
        },
        {
          id: '2',
          name: 'tom',
          handle: '@tom',
          avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
        },
        {
          id: '3',
          name: 'Richard',
          handle: '@richard',
          avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
        },
      ]   
  }  
  handleClick = ()=>{
    this.setState({
        toggle : !this.state.toggle
    })  
  }

  incrementCount = ()=>{
    this.setState({
      count : this.state.count + 1 
    })
  }

  // incrementCount = ()=>{
  //   console.log("up", this.state.count)
  //    this.setState((prevState)=>({
  //      count : prevState.count + 1
  //    }), ()=>console.log("1"))

  //    this.setState((prevState)=>({
  //     count : prevState.count + 1
  //   }), ()=>console.log("2"))

  //   this.setState((prevState)=>({
  //     count : prevState.count + 1
  //   }), ()=>console.log("3"))

  //   console.log("down", this.state.count)

  // }



  decrementCount = ()=>{
    this.setState({
      count : this.state.count - 1 
    })
  }

  resetCounter = ()=>{
    this.setState({
      count :  0
    })
  }

removeContacts = (contact) => {
  // console.log('inside remove contacts', contact)

  // const removeItemFromState = this.state.contacts.filter((indContact)=>{
  //    return indContact.id === contact.id
  // })

  // console.log(removeItemFromState)

  // this.state.contacts.splice(removeItemFromState,1)
   this.setState({
     contacts : this.state.contacts.filter((c)=> c.id !== contact.id )
   })

  // this.state.contacts.filter((indContact, index)=>{
  //     if(indContact.id === contact.id){
  //         this.state.contacts.splice(index,1)
  //     }
  // })
} 


render(){
    return (
      <div>
      <h1>Hello React </h1>
      <ListContacts
        contacts = {this.state.contacts}
        removeContacts = {this.removeContacts}
      />
      </div>
    )
  }
}

export default App


{/* <h1> {this.state.toggle ? 'Hello User' : 'You need To Login'}</h1>
      <button  onClick={this.handleClick} >Toggle</button>
      <hr/>
      <Counter
       count = {this.state.count}
       incrementCount={this.incrementCount}
       decrementCount={this.decrementCount}
       resetCounter = {this.resetCounter}
      /> */}