import React from 'react';
import {
    Container, Table, Accordion, Form,
    Row, Col, Badge, Button, Card, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const AnkietyAnkietowanie = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-clipboard-check icon-unified mb-2" />
            <h1 className="page-title">Ankiety i ankietowanie</h1>
            <p className="text-muted">Moduł CRM / badania wewnętrzne – rok 2025</p>
        </div>

        {/* Filtr ankiet */}
        <Card className="form-section shadow-sm mb-4">
            <Card.Body>
                <Form>
                    <Row className="g-3">
                        <Col md={4}>
                            <Form.Label>Słowo kluczowe</Form.Label>
                            <Form.Control placeholder="np. satysfakcja, szkolenie" />
                        </Col>
                        <Col md={3}>
                            <Form.Label>Data utworzenia od</Form.Label>
                            <Form.Control type="date" defaultValue="2025-01-01" />
                        </Col>
                        <Col md={3}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option>Wszystkie</option>
                                <option>Aktywna</option>
                                <option>W przygotowaniu</option>
                            </Form.Select>
                        </Col>
                        <Col md={2}>
                            <Form.Label> </Form.Label>
                            <div className="d-grid">
                                <Button variant="primary">
                                    <i className="bi bi-search" /> Filtruj
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

        {/* Podsumowanie */}
        <Accordion defaultActiveKey="0" className="mb-4">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <i className="bi bi-bar-chart-line me-2" />
                    Podsumowanie ankiet – Q1 2025
                </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col md={4}>
                            <div className="p-3 border rounded bg-light">
                                <div className="text-muted">Łączna liczba ankiet</div>
                                <div className="h4">12</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-3 border rounded bg-light">
                                <div className="text-muted">Aktywne obecnie</div>
                                <div className="h4">5</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-3 border rounded bg-light">
                                <div className="text-muted">Średnia liczba odpowiedzi</div>
                                <div className="h4">36</div>
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        {/* Tabela ankiet */}
        <div className="form-section">
            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th><i className="bi bi-chat-text" /> Tytuł</th>
                        <th><i className="bi bi-calendar-plus" /> Utworzono</th>
                        <th><i className="bi bi-hourglass" /> Termin</th>
                        <th><i className="bi bi-check2-circle" /> Status</th>
                        <th><i className="bi bi-people" /> Odpowiedzi</th>
                        <th><i className="bi bi-gear" /> Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Satysfakcja z systemu ERP</td>
                        <td>15.01.2025</td>
                        <td>31.03.2025</td>
                        <td><Badge bg="success">Aktywna</Badge></td>
                        <td>24/50</td>
                        <td><Button size="sm" variant="outline-primary">Podgląd</Button></td>
                    </tr>
                    <tr>
                        <td>Ocena szkoleń 2025</td>
                        <td>10.02.2025</td>
                        <td>15.04.2025</td>
                        <td><Badge bg="warning">W przygotowaniu</Badge></td>
                        <td>–</td>
                        <td><Button size="sm" variant="outline-primary">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Badanie potrzeb klientów</td>
                        <td>05.03.2025</td>
                        <td>30.06.2025</td>
                        <td><Badge bg="success">Aktywna</Badge></td>
                        <td>12/40</td>
                        <td><Button size="sm" variant="outline-primary">Podgląd</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>

        {/* Akcje globalne */}
        <div className="actions-bar mt-4">
            <div className="actions-bar-start">
                <Button variant="outline-primary" className="me-2">
                    <i className="bi bi-file-earmark-spreadsheet me-1" /> Eksportuj CSV
                </Button>
                <Button variant="outline-secondary">
                    <i className="bi bi-printer me-1" /> Drukuj raport
                </Button>
            </div>
            <div className="actions-bar-end">
                <Button variant="primary">
                    <i className="bi bi-plus-circle me-1" /> Nowa ankieta
                </Button>
            </div>
        </div>
    </Container>
);
