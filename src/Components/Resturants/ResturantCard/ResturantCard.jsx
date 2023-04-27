import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MainContext from '../../Store/MainContext';
const ResturantCard = (props) => {
    const MainCtx = useContext(MainContext)
    const handleClick = () => {
        MainCtx.ChangeMenuShow()
        const menuP = props.menuPath
        MainCtx.setMenuPath(menuP)
    }
    // console.log("MenuPath in resturantcard", props.menuPath)
    return (
        <Card style={{ maxwidth: '100%', marginBottom: "3rem" }} >
            <Card.Img style={{ height: "10rem" }} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.subheading}</Card.Subtitle>
                <Card.Text>
                    {props.description} ....
                </Card.Text>
                <div className='text-center'>
                    <Button variant="info" onClick={handleClick} >View Menu</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ResturantCard
