import React from 'react'
import Button from './Button'

const Header = ({onAdd}) => {
    return (
        <div className ="header">
            <h1>Simple Todo list</h1>
           <Button color= {"green"} text="addTask" onClick ={onAdd}/>
        </div>
    )
}


export default Header
