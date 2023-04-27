import { BrowserRouter, Routes, Route} from "react-router-dom";
import Account from "../src/Components/Account/Account";
import Home from "./Components/Home/Home";
import Help from "./Components/Help/Help";
import MainProvider from "./Components/Store/MainProvider";
import Signup from "./Components/Signup/Signup";
import Resturants from "./Components/Resturants/Resturants";
import Cart from "../src/Components/Cart/Cart";
import UserComponent from "./Components/UI/UserComponent";
import ResturantComponent from "./Components/UI/ResturantComponent";
import RStore from "./Components/RStore/RStore";
import RStoreOrder from "./Components/RStoreOrder/RStoreOrder";
import AlertComp from "./Components/AlerComp/AlertComp";
function App() {
  return (
    <MainProvider>
      <AlertComp />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserComponent><Home /></UserComponent>} />
          <Route path="/Account" element={<UserComponent><Account /></UserComponent>} />
          <Route path="/Help" element={<UserComponent><Help /></UserComponent>} />
          <Route path="/Resturants" element={<UserComponent><Resturants /></UserComponent>} />
          <Route path="/ResturantPage" element={<ResturantComponent><RStore /></ResturantComponent>} />
          <Route path="/RStoreOrder" element={<ResturantComponent><RStoreOrder /></ResturantComponent>} />
        </Routes>
        <Signup />
        <Cart />
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
