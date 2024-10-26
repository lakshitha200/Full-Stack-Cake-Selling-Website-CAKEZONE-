import Header from "../Components/Header/header"
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>      
        <Header/>
        <Outlet></Outlet>
      </>
  )
}

export default RootLayout