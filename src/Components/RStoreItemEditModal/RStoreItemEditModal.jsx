import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

const RStoreItemEditModal = (props) => {
    const itemNameref = useRef()
    const editItem = (data) => {
        data.preventDefault()
        const itemName = itemNameref.current.itemName.value
        const itemSubHeading = itemNameref.current.itemSubHeading.value
        const cost = itemNameref.current.cost.value
        const type = itemNameref.current.type.value
        console.log(itemName, itemSubHeading, cost, type)
        props.handleClose()
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={itemNameref} onSubmit={editItem}>
                        <Form.Group className="mb-3" controlId="ItemName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control required type="text" name='itemName' placeholder="Enter Item Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="itemsubHeading">
                            <Form.Label>Item Sub Heding</Form.Label>
                            <Form.Control required type="text" name='itemSubHeading' placeholder="Enter Item Sub Heading" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cost">
                            <Form.Label>Cost</Form.Label>
                            <Form.Control required type="number" name='Cost' placeholder="Enter Cost" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label>Item Type</Form.Label>
                            <Form.Check type='radio' id='Veg' label="Veg" value="Veg" name="type"/>
                            <Form.Check type='radio' id='Non-Veg' label="Non-Veg" value="Non-veg" name="type" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={editItem} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RStoreItemEditModal
