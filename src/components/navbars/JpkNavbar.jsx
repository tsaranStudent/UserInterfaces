import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function JpkNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo i nazwa */}
                <a className="navbar-brand" href="#">
                    <img
                        src="./image/1.png"
                        alt="Logo"
                        className="logo"
                    />
                    <span className="logo-name">JPK</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. Pliki JPK */}
                        <NavDropdown title="Pliki JPK" id="jpk-dropdown">
                            <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">Pliki JPK_V7</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">Pliki VAT 9M</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVatUe">Pliki VAT UE-OE</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_8">Pliki VAT 8</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/importDoRejetruVat">Import do rej. VAT</NavDropdown.Item>
                        </NavDropdown>

                        {/* 2. Informacje o JPK - tylko jedna pozycja, bez rozwijanej listy */}
                        <Nav.Link as={Link} to="/informacjeJpk">Informacje o JPK pomoc</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
