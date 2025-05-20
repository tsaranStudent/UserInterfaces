import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const SpisZNatury = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Spis z natury</h2>
                <p className="text-muted">Ewidencja spisu z natury w firmie (2025)</p>
            </div>

            <Tabs defaultActiveKey="spis" className="mb-4">
                <Tab eventKey="spis" title="Spis z natury">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy wpis</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Towar A</option>
                                <option>Towar B</option>
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
                                <th>Numer</th>
                                <th>Opis</th>
                                <th>Ilość</th>
                                <th>Wartość</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>SN/2025/001</td>
                                <td>Towar A</td>
                                <td>100 szt.</td>
                                <td>5 000,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowano</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>SN/2025/002</td>
                                <td>Towar B</td>
                                <td>50 szt.</td>
                                <td>2 500,00 PLN</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="podsumowanie" title="Podsumowanie spisu">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Miesiąc spisu*</Form.Label>
                                            <Form.Select required>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Wartość spisu</Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue="7 500,00 PLN"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Opis</th>
                                            <th>Ilość</th>
                                            <th>Wartość</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Towar A</td>
                                            <td>100 szt.</td>
                                            <td>5 000,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Towar B</td>
                                            <td>50 szt.</td>
                                            <td>2 500,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Wartość całkowita:</strong> 7 500,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź spis
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
