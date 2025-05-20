import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const Inwentaryzacja = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Inwentaryzacja</h2>
                <p className="text-muted">Ewidencja inwentaryzacyjna (2025)</p>
            </div>

            <Tabs defaultActiveKey="inwentaryzacja" className="mb-4">
                <Tab eventKey="inwentaryzacja" title="Inwentaryzacja">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa inwentaryzacja</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Środki trwałe</option>
                                <option>Wyposażenie</option>
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
                                <th>Numer inwentaryzacji</th>
                                <th>Typ</th>
                                <th>Opis</th>
                                <th>Wartość netto</th>
                                <th>Wartość brutto</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>INW/2025/001</td>
                                <td>Środek trwały</td>
                                <td>Samochód firmowy</td>
                                <td>50 000,00 PLN</td>
                                <td>61 500,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowano</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>INW/2025/002</td>
                                <td>Wyposażenie</td>
                                <td>Laptop Dell</td>
                                <td>4 500,00 PLN</td>
                                <td>5 535,00 PLN</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenie" title="Rozliczenie inwentaryzacji">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ inwentaryzacji*</Form.Label>
                                            <Form.Select required>
                                                <option>Środki trwałe</option>
                                                <option>Wyposażenie</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data inwentaryzacji*</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-01"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Opis</th>
                                            <th>Kwota</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Wartość netto samochodu</td>
                                            <td>50 000,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Wartość netto laptopa</td>
                                            <td>4 500,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Łączna wartość do rozliczenia:</strong> 54 500,00 PLN
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
