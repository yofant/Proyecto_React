import { Outlet } from "react-router-dom";
import "./IndexApp.css"
import Pagina1 from "./pagina1/Pagina1";

//funcion flechitas
const IndexApp = () => {

    return(
        <>
            <Pagina1/>
            <Outlet/>

       </>
    );

    

}
export default IndexApp;