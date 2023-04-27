import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import RStoreItemEditModal from '../RStoreItemEditModal/RStoreItemEditModal';

const RStoreMenu = () => {
    const [show, setShow] = useState(false);
    const handleItemDetailModal = () => setShow(!show);
    const editItem = () => {
        handleItemDetailModal()
    }
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <h2>Farmers Pizza</h2>
                    <div>
                        <Badge>Full</Badge>
                    </div>
                </div>
                <div className='me-2'>
                    <i className="fa-solid fa-leaf" style={{ color: "green" }}></i>
                    <i className="fa-solid fa-leaf" style={{ color: "red" }}></i>
                </div>
            </div>
            <p>Cajun Spiced Chicken, Roasted Cherry Tomato, Wild Mushroom, Mozzarella, Garlic, Fresh Basil And Parmesan</p>
            <div className='d-flex' >
                <i className="fa-solid fa-indian-rupee-sign ms-3"> 250</i>
            </div>

            <br />
            <br />
            <Button className='m-2' variant='outline-success' onClick={editItem} ><i className="fa-regular fa-pen-to-square"> Edit Item</i></Button>
            <br />
            <hr />
            <RStoreItemEditModal show={show} handleClose={handleItemDetailModal} />
        </div>
    )
}

export default RStoreMenu
