import React from 'react'
import modules from './DownPart.module.css'

const DownPart = () => {
    return (
        <div style={{ background: "Black", maxWidth: "100%" }}>
            <div className="d-md-flex justify-content-around pt-4" >
                <div className={modules.table}>
                    <h3>COMPANY</h3>
                    <p>About Us</p>
                    <p>Team</p>
                    <p>Careers</p>
                </div>
                <div className={modules.table}>
                    <h3>CONTACT</h3>
                    <p>Help & Support</p>
                    <p>Partner With Us</p>
                    <p>Funding</p>
                    <p>Become a Merchant</p>
                </div>
                <div className={modules.table}>
                    <h3>LEGAL</h3>
                    <p>Term & Conditions</p>
                    <p>Refund & Cancellation</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Offer Term</p>
                    <p>Phishing & Fraud</p>
                </div>
            </div>
            <hr style={{ backgroundColor: "grey", maxWidth: "90%", height: "5px" }} className="ms-5"
            />

            <div className="d-md-flex justify-content-around pt-4 pb-5" >
                <h1 className={modules.h1}>KhanSama</h1>
                <p className={modules.p}>© 2023 KhanSama. All rights reserved.</p>
                <div>
                    <i className="fa-brands fa-instagram fa-2xl" style={{ color: "#ffffff", margin: "10px" }} />
                    <i className="fa-brands fa-snapchat fa-2xl" style={{ color: "#ffffff" }} />
                </div>
            </div>
        </div>
    )
}

export default DownPart

