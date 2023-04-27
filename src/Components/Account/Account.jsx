import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import AccountDetail from './AccountDetail';
import MainContext from '../Store/MainContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Account = () => {
  const navigate = useNavigate()
  const MainCtx = React.useContext(MainContext)
  const user = JSON.parse(localStorage.getItem("LoginData"))
  console.log("Account", user)

  const handleLogout = () => {
    localStorage.removeItem("LoginData")
    MainCtx.SetAlert({ msg: "Logout Successfull", type: "success" })
    setTimeout(() => {
      MainCtx.SetAlert({ msg: '', type: '' })
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("LoginData")) {
        navigate('/', { replace: true });
      }
    }, 1000)
  }, [user]);
  return (
    <div>
      <Container>
        <div className='d-md-flex justify-content-md-between ' style={{
          maxWidth: '100%', backgroundColor: "grey",
          marginTop: "3rem", padding: "2rem", borderRadius: "2em", backgroundImage: "url('images/BackGround.jpg')"
        }}>
          <div className='d-md-flex' >
            <Image src="images/UserProfile.webp" style={{ border: "5px black solid" }} roundedCircle width={150} />
            <div className='ms-md-5 mt-md-3'>
              <h4 style={{ color: "white" }} >{user === null ? "No User": user.email}</h4>
              <p style={{ color: "white" }} >{user === null ? "": "Gold Member"}</p>
            </div>
          </div>

          <div className='d-flex flex-column justify-content-between'>
            <div>
              <Button onClick={handleLogout} ><i className="fa-solid fa-right-from-bracket"> Log Out</i></Button>
            </div>
            <div>
              <Button><i className="fa-solid fa-pen-to-square"> Edit</i></Button>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <AccountDetail />
        </div>
      </Container >
    </div >
  )
}

export default Account
