import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Footer from "../components/Footer";
import GlownyNavbar from '../components/GlownyNavbar';
import { useRouteGroup } from '../hooks/useRouteGroup';
import { navbarComponents } from '../components/navbars/navbarConfig';

export function Layout() {
    const routeGroup = useRouteGroup();
    const NavbarComponent = navbarComponents[routeGroup];

    return (
        <div className="app d-flex flex-column min-vh-100">
            {/* Pasek nawigacyjny */}
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container fluid>
                    {/* Logo nawigacyjne */}
                    <Navbar.Brand as={Link} to="/">
                        <Image src="/image/1.png" className="logo" />
                    </Navbar.Brand>
                    {/* Przycisk do rozwijania navbaru na urządzeniach mobilnych */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* Główny pasek nawigacyjny */}
                        <GlownyNavbar />

                        {/* Formularz wyszukiwania */}
                        <Form className="d-flex mt-2 mt-lg-0 ms-lg-2">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj.."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Dodatkowe paski nawigacyjne */}
            {NavbarComponent && <NavbarComponent />}

            {/* Główna zawartość strony */}
            <div className="main-content flex-grow-1">
                <Container fluid className="py-3">
                    <Outlet /> {/* Zagnieżdżona zawartość w zależności od routingu */}
                </Container>
            </div>

            {/* Stopka strony */}
            <Footer />
        </div>
    );
}
