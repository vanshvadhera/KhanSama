import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import RStoreItemEditModal from '../RStoreItemEditModal/RStoreItemEditModal';
import { db } from "../../FireBase";
import { useContext } from 'react';
import MainContext from '../Store/MainContext';
import { doc, deleteDoc } from 'firebase/firestore';




const RStoreMenu = (props) => {
    const [show, setShow] = useState(false);
    const handleItemDetailModal = () => setShow(!show);
    const MainCtx = useContext(MainContext)
    const editItem = () => {
        handleItemDetailModal()
    }
    const handleDelete = async () => {
        console.log("delete");
        const docref = doc(db, `Providor/${MainCtx.UserStore.username}/menu`, props.name)
        await deleteDoc(docref)
        MainCtx.SetAlert({ msg: "Item Deleted Sucessfully", type: "success" })
        setTimeout(() => {
            MainCtx.SetAlert({ msg: '', type: '' })
          }, 1000);
    }

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
            <Button className='m-2' variant='outline-success' onClick={editItem} ><i className="fa-regular fa-pen-to-square"> Edit Item</i></Button>
            <Button className='m-2' variant='outline-danger' onClick={handleDelete} ><i className="fa-regular fa-trash-can"> Delete Item</i></Button>
            <br />
            <hr />
            <RStoreItemEditModal show={show} itemname={props.name} handleClose={handleItemDetailModal} />
        </div>
    )
}

export default RStoreMenu
