import React from 'react'
import axios from 'axios'
// import GitHubUser from './GithubUserForm'

export default class Appone extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            name: "",
            img: "",
        }
    }
handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
 getUserName = (e) =>{
     e.preventDefault()
     console.log( this.state.username) 
     axios.get(`https://api.github.com/users/${this.state.username}`)
     .then((res)=>{
         this.setState({
            name: res.data.login,
            img: res.data.avatar_url

         })
     })
     
 } 
// componentDidMount(){
 
// }


render(){
    return(
        <div>
            <h1>Github users</h1>
            <div>
                <form onSubmit={this.getUserName}>
                    <input placeholder="Enter user name" 
                     value={this.state.username}
                     onChange={this.handleChange}
                     name = 'username'
                    />
                    <button  type="submit">submit</button>
                </form>
                <h2>Name: {this.state.name}</h2>
                <h2>
                    Image:<img src={this.state.img}/></h2>
        </div>     
        </div>
    )
}
}