import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormDropdown from './FormDropdown/FormDropdown';
import MainContext from '../Store/MainContext';
import { useContext } from 'react';
const Signup = () => {
    const mainCtx = useContext(MainContext)

    return (
        <Container>
            {/* <Offcanvas show={props.show} onHide={props.handleClose} placement='end'> */}
            <Offcanvas show={mainCtx.show} onHide={mainCtx.ChangeShow} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h3>New User ....? 🥺🥺</h3>
                    <p>No worries, Your are on Write Track 🤭  </p>
                    <p>Signup to get access to all the features of KhanSama</p>
                    <FormDropdown />
                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    );
}
// function Example() {
//     return (
//         <>
//             {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//                 <OffCanvasExample key={idx} placement={placement} name={placement} />
//             ))}
//         </>
//     );
// }

// render(<Example />);

export default Signup
