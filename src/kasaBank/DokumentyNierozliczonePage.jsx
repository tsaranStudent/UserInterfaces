import React from 'react';
import { Container, Table, Accordion, Form, Row, Col, Badge, Button, Card, Tabs, Tab } from 'react-bootstrap';
import '../App.css';

export const DokumentyNierozliczone = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Dokumenty nierozliczone</h2>
                <p className="text-muted">Zarządzanie dokumentami oczekującymi na rozliczenie (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista dokumentów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Rozlicz wybrane</Button>
                            <Button variant="outline-secondary">Eksportuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="text"
                                placeholder="Szukaj dokumentów..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Numer dokumentu</th>
                                <th>Typ</th>
                                <th>Kontrahent</th>
                                <th>Data</th>
                                <th>Kwota</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FV/2025/123</td>
                                <td>Faktura VAT</td>
                                <td>ABC Sp. z o.o.</td>
                                <td>15.05.2025</td>
                                <td>12 450,00 PLN</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Rozlicz</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>PL/2025/456</td>
                                <td>Płatność</td>
                                <td>XYZ S.A.</td>
                                <td>22.05.2025</td>
                                <td>8 900,00 PLN</td>
                                <td><Badge bg="danger">Przekroczony termin</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Rozlicz</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenia" title="Rozliczenia">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Wybierz dokument do rozliczenia</Form.Label>
                                            <Form.Select>
                                                <option>FV/2025/123 - ABC Sp. z o.o.</option>
                                                <option>PL/2025/456 - XYZ S.A.</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data rozliczenia</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Dokumenty do powiązania</Accordion.Header>
                                        <Accordion.Body>
                                            <Table bordered>
                                                <thead>
                                                    <tr>
                                                        <th>Numer</th>
                                                        <th>Typ</th>
                                                        <th>Kwota</th>
                                                        <th>Saldo</th>
                                                        <th>Powiąż</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>PL/2025/123</td>
                                                        <td>Płatność</td>
                                                        <td>12 450,00 PLN</td>
                                                        <td>12 450,00 PLN</td>
                                                        <td>
                                                            <Form.Check type="checkbox" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>FV/2025/456</td>
                                                        <td>Faktura</td>
                                                        <td>8 900,00 PLN</td>
                                                        <td>8 900,00 PLN</td>
                                                        <td>
                                                            <Form.Check type="checkbox" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zatwierdź rozliczenie
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raporty" title="Raporty">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Okres od</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-01-01" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Okres do</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table striped bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Typ dokumentu</th>
                                            <th>Liczba</th>
                                            <th>Wartość</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Faktury</td>
                                            <td>15</td>
                                            <td>65 200,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Płatności</td>
                                            <td>12</td>
                                            <td>42 150,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Button variant="primary">
                                    Generuj raport
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};