import {Button, Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import '../../css/products.css'
import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
export const NavbarHome = () => {

    const navigate = useNavigate();
    const  { logout, user } = useContext( AuthContext );
    const onLoggad = () => {
        logout()
        navigate('/', {
            replace: true
        })
    }

    return (
        <Navbar data-bs-theme="dark" className="navbarContainerColor">
            <Container fluid>
                <Navbar.Brand><Link to="/home" className="nav-link">INICIO</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/product" className="nav-link">Productos</Link>
                        <Link to="/personal" className="nav-link">Personal</Link>
                        <Link to="/category" className="nav-link">Categoria</Link>
                        <Link to="/porfile" className="nav-link">Perfil</Link>
                    </Nav>
                </Navbar.Collapse>
                <NavbarBrand>{user?.name}</NavbarBrand>
                <Button className="btn-danger" onClick={onLoggad}>Deslogearce</Button>
            </Container>
        </Navbar>
    )
}