import React from 'react';
import {
    Container, Table, Accordion, Form,
    Row, Col, Badge, Button, Card
} from 'react-bootstrap';
import '../App.css';

export const WindykacjaHistoriaZdarzen = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Historia zdarzeń windykacyjnych</h2>
                <p className="text-muted">Przegląd i zarządzanie procesami windykacyjnymi (2025)</p>
            </div>

            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Form>
                        <Row className="g-3">
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Numer klienta</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Wpisz numer..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Data od</Form.Label>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-01-01"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Data do</Form.Label>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-31"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select>
                                        <option>Wszystkie</option>
                                        <option>Aktywne</option>
                                        <option>Zakończone</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="actions-bar mt-3">
                            <Button variant="primary" className="me-2">
                                Filtruj
                            </Button>
                            <Button variant="outline-secondary">
                                Wyczyść
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Podsumowanie windykacji - Q1 2025
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
                                    <div className="text-muted">Liczba aktywnych spraw</div>
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

            <div className="table-responsive">
                <Table striped bordered hover className="data-table">
                    <thead>
                        <tr>
                            <th>Data zdarzenia</th>
                            <th>Numer klienta</th>
                            <th>Typ zdarzenia</th>
                            <th>Kwota zadłużenia</th>
                            <th>Status</th>
                            <th>Osoba odpowiedzialna</th>
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

            <div className="actions-bar mt-4">
                <div className="actions-bar-start">
                    <Button variant="outline-primary" className="me-2">
                        Eksportuj do CSV
                    </Button>
                    <Button variant="outline-secondary">
                        Drukuj raport
                    </Button>
                </div>
                <div className="actions-bar-end">
                    <Button variant="primary">
                        Dodaj nowe zdarzenie
                    </Button>
                </div>
            </div>
        </Container>
    );
};