import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const EwidencjaSrodkowTrwalych = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Ewidencja środków trwałych</h2>
                <p className="text-muted">Ewidencja środków trwałych w firmie (2025)</p>
            </div>

            <Tabs defaultActiveKey="srodki" className="mb-4">
                <Tab eventKey="srodki" title="Środki trwałe">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy środek trwały</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Samochody</option>
                                <option>Maszyny</option>
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
                                <th>Data zakupu</th>
                                <th>Numer ewidencyjny</th>
                                <th>Opis</th>
                                <th>Wartość netto</th>
                                <th>Wartość brutto</th>
                                <th>Amortyzacja</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>SRT/2025/001</td>
                                <td>Samochód firmowy</td>
                                <td>60 000,00 PLN</td>
                                <td>74 000,00 PLN</td>
                                <td>20%</td>
                                <td><Badge bg="success">W pełni zamortyzowany</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>SRT/2025/002</td>
                                <td>Maszyna produkcyjna</td>
                                <td>150 000,00 PLN</td>
                                <td>180 000,00 PLN</td>
                                <td>10%</td>
                                <td><Badge bg="warning">W trakcie amortyzacji</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="amortyzacja" title="Amortyzacja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Środek trwały*</Form.Label>
                                            <Form.Select required>
                                                <option>Samochód firmowy</option>
                                                <option>Maszyna produkcyjna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
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
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Opis</th>
                                            <th>Kwota amortyzacji</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Samochód firmowy</td>
                                            <td>12 000,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Maszyna produkcyjna</td>
                                            <td>15 000,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Łączna kwota amortyzacji:</strong> 27 000,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź amortyzację
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
