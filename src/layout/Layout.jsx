import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
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
import { useTranslation } from 'react-i18next';

export function Layout() {
    const routeGroup = useRouteGroup();
    const NavbarComponent = navbarComponents[routeGroup];

    // tryb jasny / ciemny
    const { theme, toggleTheme } = useTheme();

    // język
    const { language, changeLanguage } = useLanguage();
    const { t } = useTranslation();

    // funkcja przełączająca język
    const toggleLanguage = () => {
        changeLanguage(language === 'pl' ? 'en' : 'pl');
    };

    return (
        <div className="app d-flex flex-column min-vh-100">
            {/* Pasek nawigacyjny */}
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container fluid>
                    {/* Logo nawigacyjne */}
                    <Navbar.Brand as={Link} to="/">
                        <Image src="/image/1.png" className="logo" />
                    </Navbar.Brand>

                    {/* Hamburger */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        {/* Główny navbar */}
                        <GlownyNavbar />

                        {/* Wyszukiwarka */}
                        <Form className="d-flex mt-2 mt-lg-0 ms-lg-2 me-2">
                            <Form.Control
                                type="search"
                                placeholder={t('layout.search')}
                                className="me-2"
                                aria-label={t('layout.search')}
                            />
                            <Button variant="outline-success">
                                {t('layout.search')}
                            </Button>
                        </Form>

                        {/* Przełącznik jasny/ciemny ikonką */}
                        <Button
                            variant="outline-secondary"
                            onClick={toggleTheme}
                            className="me-2"
                            aria-label={theme === 'light' ? 'Włącz tryb półciemny' : 'Włącz tryb jasny'}
                        >
                            {theme === 'light'
                                ? <i className="bi bi-circle-half" title="Tryb półciemny" />
                                : <i className="bi bi-sun-fill" title="Tryb jasny" />}
                        </Button>



                        {/* Jedna ikonka do przełączania języka */}
                        <Button
                            variant="outline-secondary"
                            onClick={toggleLanguage}
                            aria-label={language === 'pl' ? 'Przełącz na angielski' : 'Switch to Polish'}
                        >
                            {language === 'pl' ? '🇬🇧' : '🇵🇱'}
                        </Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Modułowy navbar */}
            {NavbarComponent && <NavbarComponent />}

            {/* Zawartość */}
            <div className="main-content flex-grow-1">
                <Container fluid className="py-3">
                    <Outlet />
                </Container>
            </div>

            {/* Stopka */}
            <Footer />
        </div>
    );
}
