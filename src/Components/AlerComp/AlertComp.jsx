import React from 'react'
import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import MainContext from '../Store/MainContext';


const AlertComp = (props) => {
    const MainCtx = useContext(MainContext)
    return (
        <div>
            <Alert variant={MainCtx.Alert.type} className="text-center" style={{ marginTop: 80, width: "100%", position: "absolute", top: 0 }}>{MainCtx.Alert.msg}</Alert>
        </div>
    )
}

export default AlertComp
