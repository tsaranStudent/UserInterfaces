import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

export default function Home() {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                {/* Sekcja powitalna */}
                <Container fluid className="lang-pl mt-3">
                    <div className="form-section">
                        <h1 className="page-title">Witaj w systemie ERP</h1>
                        <p>Wszystko w jednym systemie – faktury, kontrahenci, magazyn.</p>
                    </div>
                </Container>

                {/* Karty z opcjami */}
                <Container fluid className="lang-pl mt-3">
                    <div className="form-section">
                        <Row className="mb-3">
                            {[
                                { title: 'Kontrahenci', text: 'Zarządzaj swoimi kontrahentami' },
                                { title: 'Faktury', text: 'Twórz i śledź faktury' },
                                { title: 'Magazyn', text: 'Zarządzaj magazynem i produktami' },
                                { title: 'Raporty', text: 'Generuj raporty i analizy' },
                            ].map((item) => (
                                <Col key={item.title} md={3} className="mb-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.text}</Card.Text>
                                            <Button variant="primary" className="w-100">
                                                Przejdź
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
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
                                        <strong>5</strong> nowych faktur
                                    </p>
                                    <p>
                                        <strong>3</strong> nowych kontrahentów
                                    </p>
                                    <p>
                                        <strong>12</strong> operacji magazynowych
                                    </p>
                                    <Button variant="success" className="w-100">
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
