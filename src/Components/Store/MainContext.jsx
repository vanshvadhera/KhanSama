import React from 'react'

const MainContext = React.createContext({
    show: '',
    ChangeShow: () => { },
    ResturantInfo: [],
    MenuShow: " ",
    ChangeMenuShow: () => { },
    CartShow: " ",
    ChangeCartShow: () => { },
    LoginData: {},
    SignupData: {},
    menuPath: " ",
    setMenuPath: {},
    menustoredata: {},
    setMenustoredata: {},
    LoginInfo: {},
    UserStore: {},
    setUserStore: {},
    Alert: {},
    SetAlert: {},
})

export default MainContext
