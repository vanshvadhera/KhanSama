import React from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useEffect } from 'react'
const MenuItem = (props) => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <h2>{props.name}</h2>
                    <div>
                        <Badge>{props.qut}</Badge>
                    </div>
                </div>
                <div className='me-2'>
                    {props.type === "veg" ? <i className="fa-solid fa-leaf" style={{ color: "green" }}></i> :
                        <i className="fa-solid fa-leaf" style={{ color: "red" }}></i>}
                </div>
            </div>
            <p>{props.ides}</p>
            <div className='d-flex' >
                <i className="fa-solid fa-indian-rupee-sign ms-3">{props.price}</i>
            </div>

            <br />
            <br />
            <Button className='m-2' variant='outline-success' >Add To cart</Button>
            <br />
            <hr />
        </div >
    )
}

export default MenuItem
