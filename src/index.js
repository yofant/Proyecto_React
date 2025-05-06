import ReactDOM from "react-dom/client";
import IndexApp from  "./IndexApp"
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom";
import Registro from "./Registro/Registro";
import Login from "./Login/Login";
import React from "react";
import Pagina1 from "./pagina1/Pagina1";


const router =createBrowserRouter (

    createRoutesFromElements(
        [   
            <Route path="/"  element={<IndexApp/>}>
                <Route index element={<Pagina1/>}/>
                <Route path="/Pagina1" element={<Pagina1/>}/>
                <Route path="/Registro" element={<Registro/>}/>
                <Route path="/Login" element={<Login/>}/>

            </Route>
        ]



    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <RouterProvider router={router} />

    </React.StrictMode>

);

