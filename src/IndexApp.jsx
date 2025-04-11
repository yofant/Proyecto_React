import { Outlet } from "react-router-dom";
import "./IndexApp.css"
import "./Navbar/NavBar"
import NavBar from "./Navbar/NavBar";

//funcion flechitas
const IndexApp = () => {

    return(
        <>

        <header>
            <NavBar/>
        </header>
        <main>
            <Outlet/>

        </main>
       </>
    );

    

}
export default IndexApp;