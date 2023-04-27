import React from 'react'
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import MainContext from '../Store/MainContext';
import Badge from 'react-bootstrap/Badge';
import classes from './Menu.module.css'
import MenuItem from './MenuItem';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../FireBase";
import { collection } from "firebase/firestore";

const query = (username) => collection(db, `Providor/${username}/menu`);

const Menu = () => {
    const MainCtx = useContext(MainContext)
    const username = MainCtx.menuPath

    const [docs] = useCollectionData(query(username))

    const handlehide = () => {
        MainCtx.ChangeMenuShow()
        MainCtx.setMenustoredata("false")
    }
    if (MainCtx.menustoredata) {
        return (
            <Modal
                show={MainCtx.MenuShow}
                onHide={handlehide}
                size="xl"
                fullscreen="true"
                centered
                scrollable
                height="100%"
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={classes.menu} style={{ position: "sticky" }}>
                        <div className="d-flex justify-content-between"   >
                            <h2>{MainCtx.menustoredata.storename}</h2>
                            <div className="align-self-center">
                                <h3><Badge bg='success' >4.3</Badge></h3>
                            </div>
                        </div>
                        <p>{MainCtx.menustoredata.subheading}</p>
                        <p>Store Timming : 11Am - 9Pm</p>
                        <hr />
                        <div className='d-flex justify-content-end'>
                            <i className="fa-solid fa-coins m-2"></i>
                            <p className='m-1' >$ 250 For Two</p>
                        </div>
                        <hr />
                        {docs?.map((data) => {
                            return <MenuItem key={data.Name} name={data.Name} qut={data.Size} type={data.Type} price={data.Price} ides={data.desc} />
                        })}
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default Menu
