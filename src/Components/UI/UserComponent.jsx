import React from 'react'
import NavBar from '../NavBar/NavBar'

const UserComponent = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default UserComponent
