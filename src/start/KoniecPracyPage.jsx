import React from 'react';
import { Container, Row, Col, Card, Alert, Button, ProgressBar, Table, Badge } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const KoniecPracy = () => {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-door-closed icon-unified mb-2" />
                        <h1 className="page-title">Zakończenie pracy</h1>
                        <p className="text-muted">Bezpieczne wylogowanie z systemu (15.05.2025)</p>
                    </div>

                    {/* Główna karta */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            {/* Alert ostrzegawczy */}
                            <Alert variant="warning" className="text-center d-flex align-items-center justify-content-center">
                                <i className="bi bi-exclamation-triangle me-2" />
                                <h5 className="mb-0">Przed wylogowaniem zapoznaj się z poniższymi informacjami</h5>
                            </Alert>

                            {/* Niezapisane zmiany i aktywne procesy */}
                            <Row className="mb-4">
                                <Col md={6}>
                                    <div className="form-section">
                                        <h5><i className="bi bi-pencil-square me-1" />Niezapisane zmiany</h5>
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-folder me-1" />Moduł</th>
                                                    <th><i className="bi bi-info-circle me-1" />Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dokumenty sprzedaży</td>
                                                    <td>
                                                        <Badge bg="success"><i className="bi bi-check-circle me-1" />Zapisane</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Edycja kontraktów</td>
                                                    <td>
                                                        <Badge bg="danger"><i className="bi bi-x-circle me-1" />Niezapisane (2)</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Zadania CRM</td>
                                                    <td>
                                                        <Badge bg="warning"><i className="bi bi-hourglass-split me-1" />W trakcie</Badge>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-section">
                                        <h5><i className="bi bi-arrow-repeat me-1" />Aktywne procesy</h5>
                                        <div className="mb-3">
                                            <p>
                                                <i className="bi bi-bar-chart me-1" />
                                                Generowanie raportu miesięcznego <strong>(65%)</strong>
                                            </p>
                                            <ProgressBar now={65} variant="info" className="mb-3" />
                                        </div>
                                        <div className="mb-3">
                                            <p>
                                                <i className="bi bi-arrow-clockwise me-1" />
                                                Synchronizacja danych <strong>(30%)</strong>
                                            </p>
                                            <ProgressBar now={30} variant="warning" className="mb-3" />
                                        </div>
                                        <Alert variant="secondary" className="d-flex align-items-center">
                                            <i className="bi bi-lightbulb me-2" />
                                            Zalecane zakończenie procesów przed wylogowaniem
                                        </Alert>
                                    </div>
                                </Col>
                            </Row>

                            {/* Statystyki dzienne */}
                            <div className="form-section">
                                <h5><i className="bi bi-graph-up me-1" />Statystyki dzienne (15.05.2025)</h5>
                                <Row>
                                    {[
                                        { label: 'Dokumenty', value: '24', icon: 'bi bi-file-earmark-text' },
                                        { label: 'Zadania', value: '8', icon: 'bi bi-check2-square' },
                                        { label: 'Klienci', value: '5', icon: 'bi bi-people' },
                                        { label: 'Czas pracy', value: '7:45', icon: 'bi bi-clock-history' },
                                    ].map((stat, idx) => (
                                        <Col key={idx} md={3} className="text-center">
                                            <Card className="mb-3">
                                                <Card.Body>
                                                    <i className={`${stat.icon} mb-2 display-6 d-block`} />
                                                    <h6>{stat.label}</h6>
                                                    <p className="display-6">{stat.value}</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            {/* Przyciski akcji */}
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <Button variant="danger" size="lg">
                                    <i className="bi bi-box-arrow-right me-1" />Wyloguj się
                                </Button>
                                <Button variant="outline-secondary" size="lg">
                                    <i className="bi bi-x-circle me-1" />Anuluj
                                </Button>
                                <Button variant="outline-primary" size="lg">
                                    <i className="bi bi-save me-1" />Zapisz i kontynuuj
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Informacja o kopii zapasowej */}
                    <Alert variant="info" className="text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-cloud-arrow-down me-2" />
                        Ostatnia kopia zapasowa systemu wykonana: 15.05.2025 02:00
                    </Alert>

                </Container>
            </div>
        </Container>
    );
};
