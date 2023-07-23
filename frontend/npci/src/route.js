import React from "react";

import {BrowserRouter, Routes,Route} from 'react-router-dom';


import { LoginForm } from "./LoginForm";
import { User_Registration } from "./User_Registration";
import { UserProvider } from "./UserContext";
import {Home}  from "./Home.js";
const AppRouter = () => {
    return (
        <BrowserRouter>

            <UserProvider>
                <Routes>
                    <Route path="/api/login" element={<LoginForm/>} />
                    <Route path="/api/registration" element={<User_Registration/>}/>
                    <Route path="/api/home" element={<Home/>}/>
                </Routes>

            </UserProvider>
            

        </BrowserRouter>
    )
}

export default AppRouter;