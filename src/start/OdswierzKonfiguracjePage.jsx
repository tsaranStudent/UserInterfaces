import React from 'react';
import { Container, Card, Alert, Button, ProgressBar, ListGroup, Badge } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const OdswierzKonfiguracje = () => {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-arrow-clockwise icon-unified mb-2" />
                        <h1 className="page-title">Odśwież konfigurację systemu</h1>
                        <p className="text-muted">Wersja 3.2.0 | 15.05.2025</p>
                    </div>

                    {/* Główna karta */}
                    <Card className="shadow-sm">
                        <Card.Body>
                            {/* Status systemu */}
                            <Alert variant="info" className="text-center d-flex justify-content-center align-items-center">
                                <i className="bi bi-info-circle me-2" />
                                <strong>System wymaga odświeżenia konfiguracji</strong>
                            </Alert>

                            {/* Lista zmian - min. 3 pozycje z ikonkami */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">
                                        <i className="bi bi-list-check me-2" />Wykryte zmiany konfiguracji:
                                    </h5>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-file-earmark-bar-graph me-1" />Nowe ustawienia JPK 2025</span>
                                            <Badge bg="warning"><i className="bi bi-exclamation-triangle me-1" />Wymaga akceptacji</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-percent me-1" />Zaktualizowane stawki VAT</span>
                                            <Badge bg="success"><i className="bi bi-check-circle me-1" />Gotowe</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-bank me-1" />Integracja z API bankowym</span>
                                            <Badge bg="danger"><i className="bi bi-x-circle me-1" />Brak konfiguracji</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-cloud-arrow-up me-1" />Kopia zapasowa ustawień</span>
                                            <Badge bg="info"><i className="bi bi-cloud-check me-1" />Wykonana</Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                            {/* Postęp odświeżania */}
                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">
                                        <i className="bi bi-clock-history me-1" />Postęp odświeżania:
                                    </h5>
                                    <span>65%</span>
                                </div>
                                <ProgressBar now={65} className="mb-3" />
                                <small className="text-muted">
                                    <i className="bi bi-calendar-event me-1" />
                                    Ostatnia aktualizacja: 15.05.2025 14:30
                                </small>
                            </div>

                            {/* Przyciski akcji */}
                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="primary" size="lg">
                                    <i className="bi bi-arrow-repeat me-1" />Odśwież teraz
                                </Button>
                                <Button variant="outline-secondary" size="lg">
                                    <i className="bi bi-clock me-1" />Zaplanuj na później
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Komunikat końcowy */}
                    <Alert variant="warning" className="mt-3 text-center d-flex justify-content-center align-items-center">
                        <i className="bi bi-exclamation-triangle me-2" />
                        Proces odświeżania może zająć kilka minut i wymagać restartu systemu
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};
