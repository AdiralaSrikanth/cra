import React from 'react'
const ListContacts = (props)=> {

    console.log("In list contacts", props)
    return(
        <div>
            <input name="value"></input>
            <h1>contacts</h1>
            {props.contacts.map((list)=>(
                <li key={list.id}>{list.name}
                <button onClick={()=>props.removeContacts(list)}>Remove</button>
                </li>
            ))}
        </div>
    )

}


export default ListContacts