import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Table, Badge, Alert } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const InformacjeoFirmie = () => {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-building icon-unified mb-2" />
                        <h1 className="page-title">Informacje o firmie</h1>
                        <p className="text-muted">Dane podstawowe i statystyki na rok 2025</p>
                    </div>

                    {/* Zakładki z podziałem na sekcje */}
                    <Tabs defaultActiveKey="podstawowe" className="mb-4">
                        {/* Dane podstawowe */}
                        <Tab eventKey="podstawowe" title={<><i className="bi bi-card-list me-1" />Dane podstawowe</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-section">
                                                <h5><i className="bi bi-archive me-1" />Dane rejestrowe</h5>
                                                <Table borderless>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong><i className="bi bi-person-badge me-1" />Nazwa:</strong></td>
                                                            <td>TechSolutions Sp. z o.o.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-credit-card-2-front me-1" />NIP:</strong></td>
                                                            <td>123-456-78-90</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-123 me-1" />REGON:</strong></td>
                                                            <td>123456789</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-section">
                                                <h5><i className="bi bi-telephone me-1" />Dane kontaktowe</h5>
                                                <Table borderless>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong><i className="bi bi-geo-alt me-1" />Adres:</strong></td>
                                                            <td>ul. Przykładowa 123<br />00-001 Warszawa</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-phone me-1" />Telefon:</strong></td>
                                                            <td>+48 123 456 789</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-envelope me-1" />Email:</strong></td>
                                                            <td>biuro@techsolutions.pl</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Statystyki firmy */}
                        <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />Statystyki</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-graph-up-arrow me-1" />Podstawowe wskaźniki 2025</h5>
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-activity me-1" />Wskaźnik</th>
                                                    <th><i className="bi bi-currency-exchange me-1" />Wartość</th>
                                                    <th><i className="bi bi-patch-check me-1" />Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Przychody Q1</td>
                                                    <td>1 245 678 PLN</td>
                                                    <td>
                                                        <Badge bg="success"><i className="bi bi-arrow-up-right me-1" />+15% r/r</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Liczba klientów</td>
                                                    <td>128</td>
                                                    <td>
                                                        <Badge bg="info"><i className="bi bi-people me-1" />Stabilny</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Zatrudnieni</td>
                                                    <td>42</td>
                                                    <td>
                                                        <Badge bg="warning"><i className="bi bi-person-plus me-1" />Rekrutacja</Badge>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Struktura organizacyjna */}
                        <Tab eventKey="struktura" title={<><i className="bi bi-diagram-3 me-1" />Struktura</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-diagram-3 me-1" />Organizacja firmy</h5>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <h6><i className="bi bi-laptop me-1" />Dział IT</h6>
                                                        <p className="text-muted mb-2">12 pracowników</p>
                                                        <p className="text-muted small"><i className="bi bi-wallet2 me-1" />Budżet 2025: 1.2M PLN</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <h6><i className="bi bi-basket me-1" />Dział Sprzedaży</h6>
                                                        <p className="text-muted mb-2">8 pracowników</p>
                                                        <p className="text-muted small"><i className="bi bi-flag me-1" />Cel 2025: 5M PLN</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <h6><i className="bi bi-people-fill me-1" />Dział HR</h6>
                                                        <p className="text-muted mb-2">5 pracowników</p>
                                                        <p className="text-muted small"><i className="bi bi-person-plus me-1" />Plan rekrutacji: +8 w 2025</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>

                    {/* Alert z planowanymi zmianami */}
                    <div className="form-section">
                        <Alert variant="info" className="d-flex align-items-center">
                            <i className="bi bi-lightbulb me-2" />
                            <strong>Planowane zmiany w 2025:</strong> Rozbudowa działu R&D, wprowadzenie nowej linii produktowej w Q3.
                        </Alert>
                    </div>
                </Container>
            </div>
        </Container>
    );
};
