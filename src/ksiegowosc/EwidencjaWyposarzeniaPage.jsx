import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const EwidencjaWyposarzenia = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Ewidencja wyposażenia</h2>
                <p className="text-muted">Ewidencja wyposażenia w firmie (2025)</p>
            </div>

            <Tabs defaultActiveKey="wyposarzenie" className="mb-4">
                <Tab eventKey="wyposarzenie" title="Wyposażenie">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowe wyposażenie</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Komputery</option>
                                <option>Telefony</option>
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
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>WE/2025/001</td>
                                <td>Laptop Dell</td>
                                <td>4 500,00 PLN</td>
                                <td>5 535,00 PLN</td>
                                <td><Badge bg="success">W pełni opłacone</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>WE/2025/002</td>
                                <td>Smartphone Samsung</td>
                                <td>2 000,00 PLN</td>
                                <td>2 460,00 PLN</td>
                                <td><Badge bg="warning">W trakcie płatności</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="koszty" title="Koszty wyposażenia">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Rodzaj wyposażenia*</Form.Label>
                                            <Form.Select required>
                                                <option>Laptop Dell</option>
                                                <option>Smartphone Samsung</option>
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
                                            <th>Kwota</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Amortyzacja Laptop</td>
                                            <td>1 000,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Ubezpieczenie telefonu</td>
                                            <td>300,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Łączny koszt:</strong> 1 300,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź koszty
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
