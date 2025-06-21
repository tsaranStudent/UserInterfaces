// src/layouts/Layout.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from "../components/Footer";
import GlownyNavbar from '../components/GlownyNavbar';
import { Outlet, Link } from 'react-router-dom';
import { useRouteGroup } from '../hooks/useRouteGroup';
import { navbarComponents } from '../components/navbars/navbarConfig';

// =============================
// Importy logiki trybu i języka
// =============================
import useTheme from '../components/ThemeManager';
import useLanguage from '../components/LanguageManager';

export function Layout() {
    const routeGroup = useRouteGroup();
    const NavbarComponent = navbarComponents[routeGroup];

    // =============================
    // Hook do obsługi trybu jasny / ciemny
    // =============================
    const { theme, toggleTheme } = useTheme();

    // =============================
    // Hook do obsługi języka
    // =============================
    const { language, changeLanguage } = useLanguage();

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
                        <Form className="d-flex mt-2 mt-lg-0 ms-lg-2 me-2">
                            <Form.Control
                                type="search"
                                placeholder={language === 'pl' ? 'Szukaj...' : 'Search...'}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">
                                {language === 'pl' ? 'Szukaj' : 'Search'}
                            </Button>
                        </Form>

                        {/* Przełącznik trybu jasny/ciemny */}
                        <Button variant="outline-secondary" onClick={toggleTheme} className="me-2">
                            {theme === 'light' ? '🌙 Tryb ciemny' : '☀️ Tryb jasny'}
                        </Button>

                        {/* Przełącznik języka */}
                        <NavDropdown title={language === 'pl' ? 'Język' : 'Language'} id="language-selector">
                            <NavDropdown.Item onClick={() => changeLanguage('pl')}>Polski</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Dodatkowe paski nawigacyjne (modułowe) */}
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
