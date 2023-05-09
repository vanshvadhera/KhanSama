import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { useContext } from 'react';
import MainContext from '../Store/MainContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../FireBase';

const RStoreItemEditModal = (props) => {
    const MainCtx = useContext(MainContext)
    const itemNameref = useRef()
    const editItem = async(data) => {
        data.preventDefault()
        const itemName = props.itemname
        const itemSubHeading = itemNameref.current.itemSubHeading.value
        const cost = itemNameref.current.cost.value
        const type = itemNameref.current.type.value
        const quantity = itemNameref.current.quantity.value
        console.log(itemName, itemSubHeading, cost, type)
        const docref = doc(db, `Providor/${MainCtx.UserStore.username}/menu`, itemName)
        await setDoc(docref, { Name: itemName, Price: cost, Size: quantity, Type: type, disc: itemSubHeading })
        props.handleClose()
        MainCtx.SetAlert({ msg: "Item Edited Successfully", type: "success" })
        setTimeout(() => {
            MainCtx.SetAlert({ msg: '', type: '' })
          }, 1000);
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={itemNameref} onSubmit={editItem}>
                        <Form.Group className="mb-3" controlId="itemsubHeading">
                            <Form.Label>Item Sub Heding</Form.Label>
                            <Form.Control required type="text" name='itemSubHeading' placeholder="Enter Item Sub Heading" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cost">
                            <Form.Label>Cost</Form.Label>
                            <Form.Control required type="number" name='Cost' placeholder="Enter Cost" />
                        </Form.Group>
                        <div className='d-flex flex-row justify-content-around' >
                            <Form.Group className="mb-3" controlId="type">
                                <Form.Label>Item Type</Form.Label>
                                <Form.Check type='radio' id='Veg' label="Veg" value="veg" name="type" />
                                <Form.Check type='radio' id='Non-Veg' label="Non-Veg" value="Non-veg" name="type" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Check type='radio' id='Full' label="Full" value="Full" name="quantity" />
                                <Form.Check type='radio' id='Half' label="Half" value="Half" name="quantity" />
                            </Form.Group>
                        </div>
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
