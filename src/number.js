import React from 'react'

function getRandomNumber() {
    return Math.floor(Math.random() * 5)
}

class Number extends React.Component{
    render(){
        let number = getRandomNumber()
        let msg;
        if(number === 4){
            msg = 
            <div>
                <h2>You win</h2>
                <img src="https://images.unsplash.com/photo-1576000613930-4c17d9948918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"/>

            </div>
        }else {
           msg= <h2>You loose</h2>
        }


        return(
            <div>
        {/* <h2>Random Number - {getRandomNumber()}</h2>
    <p>Number: {number}</p>
        <p> {number === 4 ? 'You win': 'You lost, Try again'}</p>
            {number === 4 &&
            <img src="https://images.unsplash.com/photo-1576000613930-4c17d9948918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"/>} */}
            
            {msg}
            </div>
        )
    }
}

export default Number