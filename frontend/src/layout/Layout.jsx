import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import FlowerList from "../components/Flower-list"

const Layout = () => {

    
    return <>
    <Header />
    <Outlet />
    <Footer />
    </>
}

export default Layout;