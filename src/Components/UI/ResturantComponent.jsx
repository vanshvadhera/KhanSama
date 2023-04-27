import React from 'react'
import NavBar2 from '../NavBar2/NavBar2'

const ResturantComponent = (props) => {
    return (
        <div>
            <NavBar2 />
            {props.children}
        </div>
    )
}

export default ResturantComponent
