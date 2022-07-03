import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const ShopingCart = () => (
  <div>
    <div>
      <h1>Shoping Cart</h1>
    </div>
  </div>
)



const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<ShopingCart/>} />
        <Route path='sign-in' element={<SignIn/>}></Route>
      </Route>
    </Routes>
  )
}

export default App;