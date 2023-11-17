import {Navigate, Route, Routes} from "react-router-dom";
import {NavbarHome} from "../compoment/home/NavbarHome";
import {PageProductosAll} from "../page/PageProductosAll";
import {PageCategory} from "../page/PageCategory";
import {PagePersonal} from "../page/PagePersonal";
import {PagePorfile} from "../page/PagePorfile";

export const HomeRoute = () => {
    return (
        <>
            <NavbarHome/>
            <Routes>
                <Route path="home" element={<PageProductosAll/>}/>
                <Route path="product" element={<PageProductosAll/>}/>
                <Route path="personal" element={<PagePersonal/>}/>
                <Route path="category" element={<PageCategory/>}/>
                <Route path="porfile" element={<PagePorfile/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </>
    )
}