import './App.css';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">

                {/* Sekcja powitalna */}
                <Container className="mt-3">
                    <div className="form-section text-center">
                        <i className="bi bi-box-seam icon-unified mb-2" />
                        <h1 className="page-title">Witaj w systemie ERP</h1>
                        <p>Wszystko w jednym systemie – faktury, kontrahenci, magazyn.</p>
                    </div>
                </Container>

                {/* Baner WSB-NLU (top) z indywidualnym przewijaniem */}
                <Container className="mt-3">
                    <div className="banner-scroll">
                        <a href="https://www.wsb-nlu.edu.pl/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/image/wsb-banner-top.jpg"
                                alt="WSB-NLU Top"
                            />
                        </a>
                    </div>
                </Container>

                {/* Karty modułów */}
                <Container className="mt-3">
                    <div className="form-section">
                        <Row className="mb-3">
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Kontrahenci</Card.Title>
                                        <Card.Text>Zarządzaj swoimi kontrahentami</Card.Text>
                                        <Button className="btn btn-primary w-100">Przejdź</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Faktury</Card.Title>
                                        <Card.Text>Twórz i śledź faktury</Card.Text>
                                        <Button className="btn btn-primary w-100">Przejdź</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Magazyn</Card.Title>
                                        <Card.Text>Zarządzaj magazynem i produktami</Card.Text>
                                        <Button className="btn btn-primary w-100">Przejdź</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Raporty</Card.Title>
                                        <Card.Text>Generuj raporty i analizy</Card.Text>
                                        <Button className="btn btn-primary w-100">Przejdź</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Podsumowanie */}
                        <Row className="summary-row">
                            <Col md={8}>
                                <h2 className="page-title">Aktualności</h2>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title>Nowa wersja systemu 2.5.0</Card.Title>
                                        <Card.Text>
                                            Dostępna jest nowa wersja systemu ERP z dodatkowymi funkcjami.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <h2 className="page-title">Twoje statystyki</h2>
                                <div className="summary-box">
                                    <p className="summary-text">Dzisiaj:</p>
                                    <p>
                                        <span className="badge badge-success">5</span> nowych faktur
                                    </p>
                                    <p>
                                        <span className="badge badge-success">3</span> nowych kontrahentów
                                    </p>
                                    <p>
                                        <span className="badge badge-success">12</span> operacji magazynowych
                                    </p>
                                    <Button className="submit-btn btn btn-success mt-2">
                                        Prześlij
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

              

            </div>
        </Container>
    );
}

export default App;