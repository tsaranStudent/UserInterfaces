import React from 'react';
import {
    Container, Table, Accordion, Form,
    Row, Col, Badge, Button, Card
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const WindykacjaHistoriaZdarzen = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-journal-text icon-unified mb-2" />
            <h1 className="page-title">Historia zdarzeń windykacyjnych</h1>
            <p className="text-muted">Przegląd i zarządzanie procesami – rok 2025</p>
        </div>

        {/* Filtr */}
        <Card className="form-section shadow-sm mb-4">
            <Card.Body>
                <Form>
                    <Row className="g-3">
                        <Col md={3}>
                            <Form.Label>Numer klienta</Form.Label>
                            <Form.Control type="text" placeholder="np. KLT/2025/001" />
                        </Col>
                        <Col md={3}>
                            <Form.Label>Data od</Form.Label>
                            <Form.Control type="date" defaultValue="2025-01-01" />
                        </Col>
                        <Col md={3}>
                            <Form.Label>Data do</Form.Label>
                            <Form.Control type="date" defaultValue="2025-05-31" />
                        </Col>
                        <Col md={3}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option>Wszystkie</option>
                                <option>Aktywne</option>
                                <option>Zakończone</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <div className="actions-bar mt-3">
                        <Button variant="primary" className="me-2">
                            <i className="bi bi-funnel me-1" />Filtruj
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-x-circle me-1" />Wyczyść
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>

        {/* Podsumowanie */}
        <Accordion defaultActiveKey="0" className="mb-4">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <i className="bi bi-bar-chart-line me-2" />
                    Podsumowanie windykacji – Q1 2025
                </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col md={4}>
                            <div className="p-3 border rounded bg-light">
                                <div className="text-muted">Łączna wartość zadłużeń</div>
                                <div className="h4">24 580,00 PLN</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-3 border rounded bg-light">
                                <div className="text-muted">Aktywne sprawy</div>
                                <div className="h4">18</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-3 border rounded bg-light">
                                <div className="text-muted">Średnie opóźnienie</div>
                                <div className="h4">45 dni</div>
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        {/* Tabela */}
        <div className="form-section">
            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th><i className="bi bi-calendar3" /> Data zdarzenia</th>
                        <th><i className="bi bi-person-badge" /> Klient</th>
                        <th><i className="bi bi-file-text" /> Typ</th>
                        <th><i className="bi bi-cash-stack" /> Kwota</th>
                        <th><i className="bi bi-activity" /> Status</th>
                        <th><i className="bi bi-person" /> Odpowiedzialny</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2025-05-15</td>
                        <td>KLT/2025/001</td>
                        <td>Wezwanie do zapłaty</td>
                        <td>3 245,00 PLN</td>
                        <td><Badge bg="warning">W toku</Badge></td>
                        <td>Anna Kowalska</td>
                    </tr>
                    <tr>
                        <td>2025-05-10</td>
                        <td>KLT/2025/042</td>
                        <td>Telefon windykacyjny</td>
                        <td>1 800,00 PLN</td>
                        <td><Badge bg="success">Zakończone</Badge></td>
                        <td>Jan Nowak</td>
                    </tr>
                    <tr>
                        <td>2025-05-05</td>
                        <td>KLT/2025/017</td>
                        <td>Email przypominający</td>
                        <td>5 120,00 PLN</td>
                        <td><Badge bg="danger">Opóźnione</Badge></td>
                        <td>Marek Wiśniewski</td>
                    </tr>
                </tbody>
            </Table>
        </div>

        {/* Akcje */}
        <div className="actions-bar mt-4">
            <div className="actions-bar-start">
                <Button variant="outline-primary" className="me-2">
                    <i className="bi bi-filetype-csv me-1" />Eksportuj CSV
                </Button>
                <Button variant="outline-secondary">
                    <i className="bi bi-printer me-1" />Drukuj raport
                </Button>
            </div>
            <div className="actions-bar-end">
                <Button variant="primary">
                    <i className="bi bi-plus-circle me-1" />Nowe zdarzenie
                </Button>
            </div>
        </div>
    </Container>
);
