import React, { useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../FireBase'
import { useContext } from 'react'
import MainContext from '../Store/MainContext'

const RStoreAddItemModal = (props) => {
    const addItemRef = useRef()
    const MainCtx = useContext(MainContext)
    const addItem = async (data) => {
        data.preventDefault()
        const ItemName = addItemRef.current.itemName.value
        const itemSubHeading = addItemRef.current.itemSubHeading.value
        const Cost = addItemRef.current.Cost.value
        const Type = addItemRef.current.type.value
        const quantity = addItemRef.current.quantity.value
        console.log(ItemName, itemSubHeading, Cost, Type, quantity)
        console.log("MainCtx.UserStore",MainCtx.UserStore.username);
        const docref = doc(db, `Providor/${MainCtx.UserStore.username}/menu`, ItemName)
        await setDoc(docref, { Name: ItemName, Price: Cost, Size: quantity, Type: Type, disc: itemSubHeading })
        MainCtx.SetAlert({ msg: "Item Added Successfully", type: "success" })
        setTimeout(() => {
            MainCtx.SetAlert({ msg: '', type: '' })
          }, 1000);
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Your Item Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={addItemRef} onSubmit={addItem}>
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
                    <Button variant="primary" type='submit' onClick={addItem} >
                        LET'S ADD ME TO THE MENU 😋
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RStoreAddItemModal
