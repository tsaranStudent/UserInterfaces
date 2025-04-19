import './App.css';
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function App() {
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


                {/* Główna zawartość */}
                <Container fluid className="lang-pl mt-3">
                    {/* Sekcja powitalna */}
                    <div className="form-section">
                        <h1 className="page-title">Witaj w systemie ERP</h1>
                        <p>Wszystko w jednym systemie – faktury, kontrahenci, magazyn.</p>
                    </div> 
                </Container>

                <Container fluid className="lang-pl mt-3">
                    <div className="form-section">
                        {/* Przykład karty z opcjami */}
                        <div className="row mb-3">
                            <div className="col-md-3 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Kontrahenci</h5>
                                        <p className="card-text">Zarządzaj swoimi kontrahentami</p>
                                        <button className="btn btn-primary w-100">Przejdź</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Faktury</h5>
                                        <p className="card-text">Twórz i śledź faktury</p>
                                        <button className="btn btn-primary w-100">Przejdź</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Magazyn</h5>
                                        <p className="card-text">Zarządzaj magazynem i produktami</p>
                                        <button className="btn btn-primary w-100">Przejdź</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Raporty</h5>
                                        <p className="card-text">Generuj raporty i analizy</p>
                                        <button className="btn btn-primary w-100">Przejdź</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Podsumowanie */}
                        <div className="row summary-row">
                            <div className="col-md-8">
                                <h2 className="page-title">Aktualności</h2>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Nowa wersja systemu 2.5.0</h5>
                                        <p className="card-text">Dostępna jest nowa wersja systemu ERP z dodatkowymi funkcjami.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <h2 className="page-title">Twoje statystyki</h2>
                                <div className="summary-box">
                                    <p className="summary-text">Dzisiaj:</p>
                                    <p><strong>5</strong> nowych faktur</p>
                                    <p><strong>3</strong> nowych kontrahentów</p>
                                    <p><strong>12</strong> operacji magazynowych</p>
                                    <button className="submit-btn btn btn-success">Prześlij</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Stopka */}
                <footer className="mt-4 py-3 bg-dark text-white">
                    <Container fluid>
                        <p className="text-center mb-0">© 2023 SystemERP. Wszystkie prawa zastrzeżone.</p>
                    </Container>
                </footer>
            </div>
        </Container>
    );
}

export default App;
