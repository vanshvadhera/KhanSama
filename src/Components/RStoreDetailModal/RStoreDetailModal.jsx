import React, { useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const RStoreDetailModal = (props) => {
    const storeNameRef = useRef()
    const editStore = (data) => {
        data.preventDefault()
        const storeName = storeNameRef.current.storeName.value
        const subHeading = storeNameRef.current.subHeading.value
        const storeTimeFrom = storeNameRef.current.storetimefrom.value
        const storeTimeTo = storeNameRef.current.storetimeto.value
        const cost = storeNameRef.current.Cost.value
        console.log(storeName, subHeading, storeTimeFrom, storeTimeTo, cost)
        props.handleClose()
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Store Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={storeNameRef} onSubmit={editStore}>
                        <Form.Group className="mb-3" controlId="StoreName">
                            <Form.Label>Store Name</Form.Label>
                            <Form.Control required type="text" name='storeName' placeholder="Enter Store Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subHeading">
                            <Form.Label>Store Sub Heding</Form.Label>
                            <Form.Control required type="text" name='subHeading' placeholder="Enter Sub Heading" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="StoreTime">
                            <Form.Label>Store Time</Form.Label>
                            <Form.Control type="time" name='storetimefrom' />
                            <p className="text-center">To</p>
                            <Form.Control type="time" name='storetimeto' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cost">
                            <Form.Label>Cost For Two</Form.Label>
                            <Form.Control required type="text" name='Cost' placeholder="Enter Cost For Two" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={editStore} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RStoreDetailModal
