import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "../auth/page/LoginPage";
import {RegisterPage} from "../auth/page/RegisterPage";
import {HomeRoute} from "../product/routes/HomeRoute";
import {useContext} from "react";
import {AuthContext} from "../auth/context/AuthContext";

export const AppRoute = () => {
    const  { logged } = useContext( AuthContext );
    return (
        <>
            <Routes>
                {
                    logged && (
                        <Route path="/*" element={<HomeRoute/>}/>
                    )
                }

                {
                    !logged && (
                        <>
                            <Route path="login" element={<LoginPage/>}/>
                            <Route path="register" element={<RegisterPage/>}/>
                            <Route path="/*" element={<Navigate to="/login"/>}/>
                        </>
                    )
                }

            </Routes>
        </>
    )
}