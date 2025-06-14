import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col, Button, Badge,
    Card, Tab, Tabs, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const AnkietySzablonyOdpowiedzi = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-chat-left-dots icon-unified mb-2" />
            <h1 className="page-title">Szablony odpowiedzi</h1>
            <p className="text-muted">Zarządzanie predefiniowanymi odpowiedziami do pytań (2025)</p>
        </div>

        <Tabs defaultActiveKey="szablony" className="module-tabs">
            {/* Lista szablonów */}
            <Tab eventKey="szablony" title={<><i className="bi bi-collection me-1" />Lista szablonów</>}>
                <div className="form-section">
                    <div className="actions-bar">
                        <div className="actions-bar-start">
                            <Button variant="primary">
                                <i className="bi bi-plus-circle me-1" />Nowy szablon
                            </Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup className="search-input">
                                <Form.Control placeholder="Szukaj szablonów..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>

                    <Table striped bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>Nazwa</th>
                                <th>Typ</th>
                                <th>Liczba opcji</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Skala satysfakcji 1–5</td>
                                <td><Badge bg="info">Skala</Badge></td>
                                <td>5</td>
                                <td>15.01.2025</td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
                                    <Button size="sm" variant="outline-primary" className="me-1">Edytuj</Button>
                                    <Button size="sm" variant="outline-danger">Usuń</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ocena jakości</td>
                                <td><Badge bg="warning">Lista</Badge></td>
                                <td>4</td>
                                <td>20.02.2025</td>
                                <td><Badge bg="warning">Roboczy</Badge></td>
                                <td>
                                    <Button size="sm" variant="outline-primary" className="me-1">Edytuj</Button>
                                    <Button size="sm" variant="outline-danger">Usuń</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Tab>

            {/* Nowy szablon */}
            <Tab eventKey="nowy" title={<><i className="bi bi-pencil-square me-1" />Nowy szablon</>}>
                <div className="form-section">
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Nazwa szablonu</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Typ odpowiedzi</Form.Label>
                                <Form.Select>
                                    <option>Skala liczbowa</option>
                                    <option>Lista wyboru</option>
                                    <option>Tak/Nie</option>
                                    <option>Ocena słowna</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>

                        <h5 className="mb-3"><i className="bi bi-ui-checks me-1" />Opcje odpowiedzi</h5>
                        <Card className="mb-3">
                            <Card.Body>
                                <Form.Group className="mb-2">
                                    <Form.Label>Opcja 1</Form.Label>
                                    <Form.Control defaultValue="Bardzo niezadowolony" />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Opcja 2</Form.Label>
                                    <Form.Control defaultValue="Zadowolony" />
                                </Form.Group>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-plus-circle me-1" />Dodaj opcję
                                </Button>
                            </Card.Body>
                        </Card>

                        <Form.Check
                            type="checkbox"
                            label="Ustaw jako domyślny"
                            className="mb-3"
                        />

                        <div className="actions-bar-end">
                            <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                            <Button variant="primary"><i className="bi bi-save me-1" />Zapisz szablon</Button>
                        </div>
                    </Form>
                </div>
            </Tab>

            {/* Statystyki */}
            <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />Statystyki</>}>
                <div className="form-section">
                    <Card>
                        <Card.Body>
                            <h5 className="mb-3"><i className="bi bi-graph-up-arrow me-2" />Użycie szablonów</h5>
                            <Table bordered responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Szablon</th>
                                        <th>Użycia</th>
                                        <th>Ostatnie użycie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Skala satysfakcji 1–5</td>
                                        <td>12</td>
                                        <td>10.03.2025</td>
                                    </tr>
                                    <tr>
                                        <td>Ocena jakości</td>
                                        <td>8</td>
                                        <td>15.02.2025</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            </Tab>
        </Tabs>

        {/* Podsumowanie */}
        <div className="summary-box mt-4">
            <div className="summary-text">
                <strong>Liczba aktywnych szablonów:</strong> 7
            </div>
            <div className="summary-text">
                <strong>Ostatnio dodany:</strong> 20.02.2025
            </div>
        </div>
    </Container>
);
