import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div className ="header">
            <h1>Simple Todo list</h1>
           <Button color= {"grey"} text="addTask"/>
        </div>
    )
}


export default Header
