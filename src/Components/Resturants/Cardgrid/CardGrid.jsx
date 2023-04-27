import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResturantCard from '../ResturantCard/ResturantCard'
import { useContext } from 'react'
import MainContext from '../../Store/MainContext'

const CardGrid = () => {
    const mainCtx = useContext(MainContext)
    return (
        <Container >
            <Row xs={1} md={2} lg={3} className="">
                {mainCtx.ResturantInfo.map((data) => {
                    return <Col key={data.username} ><ResturantCard key={data.username} name={data.storename} subheading={data.subheading
                    } img={data.image} description={data.description.slice(0, 150)} menuPath={data.username} /></Col>
                })}
            </Row>
        </Container>
    )
}

export default CardGrid
