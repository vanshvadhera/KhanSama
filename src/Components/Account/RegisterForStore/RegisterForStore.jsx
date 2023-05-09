import React, { useRef } from 'react'
import classes from './RegisterForStore.module.css'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import MainContext from '../../Store/MainContext';
import { db } from '../../../FireBase'
import { doc, setDoc } from 'firebase/firestore'

const RegisterForStore = () => {
  const MainCtx = useContext(MainContext)
  const LoginInfo = MainCtx.LoginInfo
  const form = useRef()
  const submitHandler = (data) => {
    data.preventDefault()
    const Name = form.current.StoreName.value
    const Address = form.current.StoreAddress.value
    const PhoneNumber = form.current.StorePhoneNumber.value
    const StoreType = form.current.StoreType.value
    const StoreTimeFrom = form.current.StoreTimeFrom.value
    const StoreTimeTo = form.current.StoreTimeTo.value
    const StoreEmailId = form.current.StoreEmailId.value
    const AboutStore = form.current.AboutStore.value
    const AboutStoreFood = form.current.AboutStoreFood.value
    console.log(Name, Address, PhoneNumber, StoreType, StoreTimeFrom, StoreTimeTo, StoreEmailId, AboutStore, AboutStoreFood)
    SignUpStore({ Name, Address, PhoneNumber, StoreType, StoreTimeFrom, StoreTimeTo, StoreEmailId, AboutStore, AboutStoreFood })
    console.log(LoginInfo.email)
  }

  const SignUpStore = async (data) => {
    const docref = doc(db, "Providor", LoginInfo.email)
    await setDoc(docref, { email: data.StoreEmailId, storename: data.Name, storeadd: data.Address, storephone: data.PhoneNumber, store_time_f: data.StoreTimeFrom, store_time_t: data.StoreTimeTo, description: data.AboutStore, username: LoginInfo.email, subheading: data.AboutStoreFood, image:"https://firebasestorage.googleapis.com/v0/b/test-project-c9819.appspot.com/o/image%2Flogo.png?alt=media&token=24877197-b49d-4437-b79e-992337b27928" }).then(() => {
      MainCtx.SetAlert({ msg: "Stored Registerd Successfully", type: "success" })
      setTimeout(() => {
        MainCtx.SetAlert({ msg: '', type: '' })
      }, 5000);
    })

  }

  return (
    <div className={classes.ReistrationForm}>
      <div className='d-flex justify-content-center'>
        <h3>Register Your Store And Become a KhanSama Merchant</h3>
      </div>
      <Container>
        <div className="ms-5 me-5">
          <Form ref={form} onSubmit={submitHandler} className="m-5" >
            <Form.Group className='mb-3' controlId='StoreName'>
              <Form.Label>STORE NAME</Form.Label>
              <Form.Control required className="text-center" type='text' name='StoreName' placeholder='Enter Store Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Address'>
              <Form.Label>STORE ADDRESS</Form.Label>
              <Form.Control required className="text-center" type='text' name='StoreAddress' placeholder='Enter Store Address' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='StoreEmailId'>
              <Form.Label>STORE EMAIL ID</Form.Label>
              <Form.Control required className="text-center" type='email' name='StoreEmailId' placeholder='Enter Email ID' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='StorePhoneNumber'>
              <Form.Label>STORE PHONE NUMBER</Form.Label>
              <Form.Control required className="text-center" type='number' name='StorePhoneNumber' placeholder='Enter Store Address' />
            </Form.Group>
            <div className='d-md-flex justify-content-around flex-row'>
              <Form.Group className='mb-3' controlId='Storetype'>
                <Form.Label>STORE TYPE</Form.Label>
                <Form.Check type='radio' id='CloudStore' value='CloudStore' name='StoreType' label='Cloud Store' />
                <Form.Check type='radio' id='CloudStore' value='OfflineStore' name='StoreType' label='Offline Store' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='StoreTimming'>
                <Form.Label>STORE TIMMINGS</Form.Label>
                <Form.Control required className="text-center" type='time' name='StoreTimeFrom' />
                <p className="text-center">To</p>
                <Form.Control required className="text-center" type='time' name='StoreTimeTo' />
              </Form.Group>
            </div>
            <Form.Group className='mb-3' controlId='AboutStore'>
              <Form.Label>ABOUT STORE</Form.Label>
              <Form.Control required className="text-center" type='text' name='AboutStore' placeholder='About Your Store' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='StoreFood'>
              <Form.Label>ABOUT STORE FOOD</Form.Label>
              <Form.Control required className="text-center" type='text' name='AboutStoreFood' placeholder='About Your Store' />
            </Form.Group>
            <div className="d-flex justify-content-center" >
              <Button className="mb-5 mt-3" variant='outline-success' size='lg' type='submit'>Submit</Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default RegisterForStore
