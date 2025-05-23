import React from 'react';
import { Container, Card, ListGroup, Badge, Alert, ProgressBar, Button } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const NowoscWwersji = () => {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-stars icon-unified mb-2" />
                        <h1 className="page-title">Nowości w wersji 3.2.0</h1>
                        <p className="text-muted">Data wydania: 15.05.2025</p>
                    </div>

                    {/* Najważniejsze zmiany */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-3">
                                <i className="bi bi-lightning-charge me-2" />Najważniejsze zmiany:
                            </h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            <i className="bi bi-bar-chart-steps me-1" />Nowy moduł analityczny
                                        </div>
                                        <small className="text-muted">Zaawansowane raporty sprzedaży</small>
                                    </div>
                                    <Badge bg="success" pill>
                                        <i className="bi bi-star me-1" />Nowe
                                    </Badge>
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            <i className="bi bi-bank me-1" />Integracja z API bankowym 2025
                                        </div>
                                        <small className="text-muted">Automatyzacja płatności</small>
                                    </div>
                                    <Badge bg="primary" pill>
                                        <i className="bi bi-arrow-repeat me-1" />Ulepszone
                                    </Badge>
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            <i className="bi bi-file-earmark-bar-graph me-1" />Optymalizacja JPK_V7M
                                        </div>
                                        <small className="text-muted">Szybsze generowanie dokumentów</small>
                                    </div>
                                    <Badge bg="info" pill>
                                        <i className="bi bi-rocket-takeoff me-1" />Usprawnione
                                    </Badge>
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            <i className="bi bi-robot me-1" />Asystent AI
                                        </div>
                                        <small className="text-muted">Wsparcie w generowaniu dokumentów</small>
                                    </div>
                                    <Badge bg="warning" pill>
                                        <i className="bi bi-stars me-1" />Beta
                                    </Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Planowane funkcje */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-3">
                                <i className="bi bi-calendar-plus me-2" />W przygotowaniu:
                            </h5>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span><i className="bi bi-people me-1" />System rekomendacji klientów</span>
                                    <small>65%</small>
                                </div>
                                <ProgressBar now={65} className="mb-3" />
                                <small className="text-muted">Planowane na Q3 2025</small>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span><i className="bi bi-envelope-paper me-1" />Nowe powiadomienia push</span>
                                    <small>40%</small>
                                </div>
                                <ProgressBar now={40} variant="warning" className="mb-3" />
                                <small className="text-muted">Testy beta: 08.2025</small>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span><i className="bi bi-diagram-3 me-1" />Panel do zarządzania zespołami</span>
                                    <small>25%</small>
                                </div>
                                <ProgressBar now={25} variant="danger" className="mb-3" />
                                <small className="text-muted">Planowane na Q4 2025</small>
                            </div>
                            <Badge bg="warning" className="me-2">
                                <i className="bi bi-tools me-1" />W trakcie
                            </Badge>
                            <Badge bg="secondary">
                                <i className="bi bi-hourglass-split me-1" />Wersja beta: 09.2025
                            </Badge>
                        </Card.Body>
                    </Card>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-center gap-3">
                        <Button variant="primary">
                            <i className="bi bi-journal-text me-1" />Zobacz szczegóły
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-x-circle me-1" />Pomiń
                        </Button>
                    </div>

                    {/* Informacja końcowa */}
                    <Alert variant="info" className="mt-3 text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-info-circle me-2" />
                        Więcej informacji znajdziesz w dokumentacji systemu
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};
