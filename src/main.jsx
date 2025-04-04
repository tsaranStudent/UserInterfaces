import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
//import { Towar } from './towar/TowarPage.jsx';
//import { Towary } from './towar/TowaryPage.jsx';
//import { Pracownik } from './pracownik/PracownikPage.jsx';
//import { Pracownicy } from './pracownik/PracownicyPage.jsx';
import { Layout } from './layout/Layout.jsx';
import { Kontrahenci } from './ogolne/KontrahenciPage.jsx';
import { NowyKontrahent } from './ogolne/NowyKontrahentPage.jsx';
import { Pracownicy } from './ogolne/PracownicyPage.jsx';
import { Cennik } from './ogolne/CennikPage.jsx';
import { NowyTowar } from './ogolne/NowyTowarPage.jsx';
import { GrupyTowarowe } from './ogolne/GrupyTowarowePage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App/>,
//    },
//    {
//        path: "/towar",
//        element: <Towar/>,
//    },
//    {
//        path: "/towary",
//        element: <Towary />,
//    },
//    {
//        path: "/pracownik",
//        element: <Pracownik />,
//    },
//    {
//        path: "/pracownicy",
//        element: <Pracownicy />,
//    },
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App/> }/>
                </Route>
                <Route path='/kontrahenci' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/nowyKontrahent' element={<Layout />}>
                    <Route index element={<NowyKontrahent />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/cennik' element={<Layout />}>
                    <Route index element={<Cennik />} />
                </Route>
                <Route path='/nowyTowar' element={<Layout />}>
                    <Route index element={<NowyTowar />} />
                </Route>
                <Route path='/grupyTowarowe' element={<Layout />}>
                    <Route index element={<GrupyTowarowe />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>


                {/*<Route path='/towar' element={<Layout />}>*/}
                {/*    <Route index element={<Towar/>} />*/}
                {/*</Route>*/}
                {/*<Route path='/towary' element={<Layout />}>*/}
                {/*    <Route index element={<Towary />} />*/}
                {/*</Route>*/}
                {/*<Route path='/pracownik' element={<Layout />}>*/}
                {/*    <Route index element={<Pracownik />} />*/}
                {/*</Route>*/}
                {/*<Route path='/pracownicy' element={<Layout />}>*/}
                {/*    <Route index element={<Pracownicy />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);