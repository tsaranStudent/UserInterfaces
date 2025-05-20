import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const DeklaracjePIT = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Deklaracje PIT</h2>
                <p className="text-muted">Ewidencja deklaracji PIT dla pracowników (2025)</p>
            </div>

            <Tabs defaultActiveKey="deklaracje" className="mb-4">
                <Tab eventKey="deklaracje" title="Deklaracje PIT">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa deklaracja</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Pracownik A</option>
                                <option>Pracownik B</option>
                            </Form.Select>
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-01"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                            <Form.Control
                                placeholder="Szukaj..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Numer deklaracji</th>
                                <th>Pracownik</th>
                                <th>Dochód</th>
                                <th>Podatek</th>
                                <th>Razem do zapłaty</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>PIT/2025/001</td>
                                <td>Jan Kowalski</td>
                                <td>5 000,00 PLN</td>
                                <td>1 000,00 PLN</td>
                                <td>6 000,00 PLN</td>
                                <td><Badge bg="success">Zatwierdzono</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>PIT/2025/002</td>
                                <td>Maria Nowak</td>
                                <td>4 000,00 PLN</td>
                                <td>800,00 PLN</td>
                                <td>4 800,00 PLN</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenie" title="Rozliczenie roczne">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Miesiąc rozliczeniowy*</Form.Label>
                                            <Form.Select required>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Podatek do zapłaty</Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue="1 800,00 PLN"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Pracownik</th>
                                            <th>Dochód</th>
                                            <th>Podatek</th>
                                            <th>Razem do zapłaty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jan Kowalski</td>
                                            <td>5 000,00 PLN</td>
                                            <td>1 000,00 PLN</td>
                                            <td>6 000,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Maria Nowak</td>
                                            <td>4 000,00 PLN</td>
                                            <td>800,00 PLN</td>
                                            <td>4 800,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Łączna kwota do zapłaty:</strong> 10 800,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź rozliczenie
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};
