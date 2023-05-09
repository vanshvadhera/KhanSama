import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import classes from './RStore.module.css'
import RStoreMenu from '../RStoreMenu/RStoreMenu';
import RStoreDetailModal from '../RStoreDetailModal/RStoreDetailModal';
import Button from 'react-bootstrap/Button';
import RStoreAddItemModal from '../RStoreAddItemModal/RStoreAddItemModal';
import MainContext from '../Store/MainContext';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../FireBase";
import { collection } from "firebase/firestore";


const RStore = () => {
  const navigate = useNavigate()
  const MainCtx = React.useContext(MainContext)
  let username
  {MainCtx.UserStore ? username = MainCtx.UserStore.username : username = "Temp"}
  const [show, setShow] = useState(false);
  const [addItem, setAddItem] = useState(false)
  const handleStoreDetailModal = () => setShow(!show);
  const handleAddItemModal = () => setAddItem(!addItem)
  const query = (username) => collection(db, `Providor/${username}/menu`);
  const [docs] = useCollectionData(query(username))
  const editStore = () => {
    handleStoreDetailModal()
  }
  if (MainCtx.UserStore) {
    return (
      <div>
        <Container>
          <h3 className='text-center m-3' >STORE DETAILS</h3>
          <hr />
          <div className={classes.menu} style={{ position: "sticky" }}>
            <div className="d-flex justify-content-between"   >
              <h2>{MainCtx.UserStore.storename}</h2>
              {/* <div className="align-self-center">
                <i className="fa-regular fa-pen-to-square" onClick={editStore} />
              </div> */}
            </div>
            <p>{MainCtx.UserStore.description}</p>
            <p>{`Store Timming : ${MainCtx.UserStore.store_time_f} - ${MainCtx.UserStore.store_time_t}`}</p>
            <hr />
            <div className='d-flex justify-content-end'>
              <i className="fa-solid fa-coins m-2"></i>
              <p className='m-1' >$ --- For Two</p>
            </div>
            <hr />
            <div className="d-grid gap-2 m-4">
              <Button variant="outline-primary" size="lg" onClick={handleAddItemModal} >
                <i className="fa-solid fa-plus"> ADD ITEM</i>
              </Button>
            </div>
            {docs?.map((data) => {
              return (
                <RStoreMenu key={data.Name} name={data.Name} qut={data.Size} type={data.Type} price={data.Price} ides={data.disc} />
              )
            })}
          </div>
          <RStoreAddItemModal show={addItem} handleClose={handleAddItemModal} />
          <RStoreDetailModal show={show} handleClose={handleStoreDetailModal} />
        </Container>
      </div>
    )
  }
  else {
    // if (MainCtx.UserStore === "") {
    setTimeout(() => {
      navigate('/Account', { replace: true })
    }, 1000)
    // }

    return (
      <Container>
        <h2 className='text-center'>No Store Found Under Your Account</h2>
        <h3 className='text-center'>Please Register Your Store First</h3>
      </Container>
    )
  }
}

export default RStore
