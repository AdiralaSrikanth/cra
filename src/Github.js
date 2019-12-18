import React from 'react'
import fetchPopularRepos from './FetchRepos'

export default class App extends React.Component{

    state ={
            language :"All",
            repos: []

        }

    updateLanguage = (indLang)=>{
        this.setState({
            language: indLang
        })
        fetchPopularRepos(indLang)
        .then((res)=>{
            this.setState({
                repos: res
            })
        })
    }


    render(){
        const lang = ["All", "Python", "Java", "Javascript"]
        return(
            <div>
                <div>
                 {lang.map((indLang)=>(
                     <li onClick={()=>this.updateLanguage(indLang)}>
                         {indLang}</li>
                 ))}
                 </div>
                 <div>
                     {this.state.repos.map((repo)=>(
                         <h2>{repo.name} </h2>
                     ))}
                 </div>
            </div>
        )
    }

}