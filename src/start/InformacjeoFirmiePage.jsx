import React from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const InformacjeoFirmie = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">

                {/* Główny pasek nawigacyjny */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img
                                src="./image/1.png"
                                alt="Logo"
                                className="logo"
                            />
                            <span className="logo-name">SystemERP</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                {/* Home */}
                                <li className="nav-item">
                                    <Link to="/" className="nav-link custom-link">Home</Link>
                                </li>
                                {/* Logowanie */}
                                <li className="nav-item">
                                    <Link to="/logowanie" className="nav-link custom-link">Logowanie</Link>
                                </li>
                                {/* Zmiana firmy */}
                                <li className="nav-item">
                                    <Link to="/zmianaFirmy" className="nav-link custom-link">Zmiana firmy</Link>
                                </li>
                                {/* Informacje o firmie */}
                                <li className="nav-item">
                                    <Link to="/informacjeoFirmie" className="nav-link custom-link">Informacje o firmie</Link>
                                </li>
                                {/* Konfiguracja */}
                                <li className="nav-item">
                                    <Link to="/konfiguracja" className="nav-link custom-link">Konfiguracja</Link>
                                </li>
                                {/* Odśwież konfigurację */}
                                <li className="nav-item">
                                    <Link to="/odswierzKonfiguracje" className="nav-link custom-link">Odśwież konfigurację</Link>
                                </li>
                                {/* Nowości w wersji */}
                                <li className="nav-item">
                                    <Link to="/nowoscWwersji" className="nav-link custom-link">Nowości w wersji</Link>
                                </li>
                                {/* Włącz nowe funkcje */}
                                <li className="nav-item">
                                    <Link to="/wlaczNoweFunkcje" className="nav-link custom-link">Włącz nowe funkcje</Link>
                                </li>
                                {/* Koniec pracy */}
                                <li className="nav-item">
                                    <Link to="/koniecPracy" className="nav-link custom-link">Koniec pracy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                
            </div>
        </Container>
    )
}