import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const EwidencjaKasowegoPit = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Ewidencja kasowego PIT</h2>
                <p className="text-muted">Rozliczenia miesięczne PIT dla transakcji gotówkowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="ewidencja" className="mb-4">
                <Tab eventKey="ewidencja" title="Ewidencja transakcji">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj transakcję</Button>
                            <Button variant="outline-secondary">Importuj z banku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Maj 2025</option>
                                <option>Kwiecień 2025</option>
                                <option>Marzec 2025</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj transakcji..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Numer dokumentu</th>
                                <th>Kontrahent</th>
                                <th>Kwota netto</th>
                                <th>Podatek</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>KP/2025/123</td>
                                <td>Jan Kowalski</td>
                                <td>1 200,00 PLN</td>
                                <td>276,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowano</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>KP/2025/124</td>
                                <td>ABC Usługi</td>
                                <td>2 500,00 PLN</td>
                                <td>575,00 PLN</td>
                                <td><Badge bg="warning">Do weryfikacji</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenie" title="Rozliczenie miesięczne">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Miesiąc rozliczeniowy*</Form.Label>
                                        <Form.Select required>
                                            <option>Maj 2025</option>
                                            <option>Kwiecień 2025</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Termin płatności</Form.Label>
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-06-20"
                                            disabled
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Typ transakcji</th>
                                        <th>Liczba transakcji</th>
                                        <th>Kwota netto</th>
                                        <th>Podatek</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sprzedaż gotówkowa</td>
                                        <td>24</td>
                                        <td>15 200,00 PLN</td>
                                        <td>3 496,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Usługi gotówkowe</td>
                                        <td>12</td>
                                        <td>8 500,00 PLN</td>
                                        <td>1 955,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Podatek do zapłaty:</strong> 5 451,00 PLN
                                </div>
                                <Button variant="primary" className="mt-2">
                                    Generuj deklarację PIT-5
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raporty" title="Raporty i statystyki">
                    <Row className="mb-4">
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Podsumowanie kwartalne</h5>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Ilość transakcji</td>
                                                <td className="text-end">124</td>
                                            </tr>
                                            <tr>
                                                <td>Łączna wartość netto</td>
                                                <td className="text-end">68 450,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Podatek należny</td>
                                                <td className="text-end">15 743,50 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Statystyki miesięczne</h5>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Średnia transakcja</td>
                                                <td className="text-end">552,02 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Najczęstszy kontrahent</td>
                                                <td className="text-end">ABC Usługi (12)</td>
                                            </tr>
                                            <tr>
                                                <td>Dzień z największą liczbą transakcji</td>
                                                <td className="text-end">15.05.2025 (8)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Generuj raport</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-01"
                                        className="me-2"
                                        style={{ width: '150px' }}
                                    />
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-31"
                                        className="me-2"
                                        style={{ width: '150px' }}
                                    />
                                    <Button variant="outline-secondary">Eksportuj do CSV</Button>
                                </div>
                            </div>

                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Liczba transakcji</th>
                                        <th>Wartość netto</th>
                                        <th>Podatek</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01-07.05.2025</td>
                                        <td>18</td>
                                        <td>9 850,00 PLN</td>
                                        <td>2 265,50 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>08-14.05.2025</td>
                                        <td>22</td>
                                        <td>12 100,00 PLN</td>
                                        <td>2 783,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};