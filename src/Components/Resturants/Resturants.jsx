import React from 'react'
import { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import DownPart from '../DownPart/DownPart'
import Menu from '../Menu/Menu'
import MainContext from '../Store/MainContext'
import CardGrid from './Cardgrid/CardGrid'
import SubNavbar from './SubNavbar/SubNavbar'

const Resturants = () => {
    const MainCtx = useContext(MainContext)

    return (
        <div>
            <Container>
                {/* <SubNavbar /> */}
                <hr style={{ marginTop: "-5px", }} />
                <CardGrid />
                {MainCtx.menuPath && <Menu />}
                {/* <Menu /> */}
            </Container>
            <DownPart />
        </div>
    )
}

export default Resturants
