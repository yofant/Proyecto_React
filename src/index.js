import ReactDOM from "react-dom/client";
import IndexApp from  "./IndexApp"
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom";
import Home from "./Home/Home";
import Saludo from "./Saludo/Saludo";
import React from "react";
import Formulario from "./Formulario/Formulario";


const router =createBrowserRouter (

    createRoutesFromElements(
        [   
            <Route path="/"  element={<IndexApp/>}>,
                <Route path ="/Home" element={<Home/>}/>,
                <Route path="/Saludo" element={<Saludo/>}/>,
                <Route path="/Formulario" element={<Formulario/>}/>,

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

