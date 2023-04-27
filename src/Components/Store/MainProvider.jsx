import React, { useCallback, useEffect } from 'react'
import MainContext from './MainContext'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../FireBase"
// import { doc, getDoc, setDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";


const MainProvider = (props) => {
    let localstorage = "False"
    if (localStorage.getItem('LoginData') !== null) {
        localstorage = JSON.parse(localStorage.getItem('LoginData'))
        console.log("lovcal storage", localstorage)
    }

    const query = collection(db, `Providor`);
    // console.log(query)
    // const [docs, loading, error] = useCollectionData(query);
    const [docs] = useCollectionData(query);
    // console.log("printing docs", docs)


    const [ResturantInfo, setResturantInfo] = React.useState([])
    console.log("Res info", ResturantInfo)
    const [show, setShow] = React.useState(false);
    const [userStore, setUserStore] = React.useState('');
    const [menuPath, setMenuPath] = React.useState('')
    const [Menushow, setMenuShow] = React.useState(false);
    const [CartShow, setCartShow] = React.useState(false);
    const [LoginData, setLoginData] = React.useState({});
    const [alert, setAlert] = React.useState({msg : "", type: ""})
    const [, setSignupData] = React.useState({});
    const changeShow = () => { setShow(!show) }
    const changeMenuShow = () => { setMenuShow(!Menushow) }
    const changeCartShow = () => { setCartShow(!CartShow) }

    // For getting store data from firebase and storing in ResturantInfo
    useEffect(() => {
        if (docs) {
            setResturantInfo(docs)
        }
    }, [docs])

    // mainContext helping in transfering state and function to other components
    const [menustoredata, setMenustoredata] = React.useState()
    const getdata = useCallback(async () => {
        const docref = doc(db, "Providor", menuPath)
        const docdata = await getDoc(docref);
        // console.log("docdata", docdata.data())
        setMenustoredata(docdata.data())
        return docdata.data()
    }, [menuPath])

    useEffect(() => {
        if (menuPath) {
            // if (!menustoredata) {
            getdata()
            // }
            console.log("menustore", menustoredata)
        }
    }, [menuPath])

    const loadData = useCallback(async () => {
        const docref = doc(db, "Providor", localstorage.email)
        const docdata = await getDoc(docref);
        setUserStore(docdata.data())
        // console.log("Data From Loaddata",docdata.data())
        // console.log("UserStore",userStore)
    }, [localstorage.email])
    useEffect(() => {
        if (localstorage !== "False") {
            loadData()
        }
    }, [localstorage.email, loadData])

    const mainContext = {
        show: show,
        ChangeShow: changeShow,
        ResturantInfo: ResturantInfo,
        ChangeMenuShow: changeMenuShow,
        MenuShow: Menushow,
        ChangeCartShow: changeCartShow,
        CartShow: CartShow,
        LoginData: setLoginData,
        SignupData: setSignupData,
        setMenuPath: setMenuPath,
        menuPath: menuPath,
        menustoredata: menustoredata,
        setMenustoredata: setMenustoredata,
        LoginInfo: LoginData,
        UserStore: userStore,
        setUserStore: setUserStore,
        Alert:alert,
        SetAlert: setAlert,

    }
    console.log("LoginInfo", LoginData)
    // { console.log("From context Provider", SignupData) }
    return (
        <MainContext.Provider value={mainContext}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainProvider
