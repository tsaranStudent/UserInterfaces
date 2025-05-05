import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const DeklaracjeVat_9M = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Deklaracje VAT-9M</h2>
                <p className="text-muted">Kwartalne rozliczenia podatku VAT (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista deklaracji">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa deklaracja</Button>
                            <Button variant="outline-secondary">Importuj dane</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszystkie kwartały</option>
                                <option>Q2 2025</option>
                                <option>Q1 2025</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj deklaracji..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Numer</th>
                                <th>Kwartał</th>
                                <th>Data złożenia</th>
                                <th>VAT należny</th>
                                <th>VAT naliczony</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>VAT-9M/2/2025</td>
                                <td>Q2 2025</td>
                                <td>25.06.2025</td>
                                <td>42 150,00 PLN</td>
                                <td>28 450,00 PLN</td>
                                <td><Badge bg="warning">Weryfikacja</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">PDF</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>VAT-9M/1/2025</td>
                                <td>Q1 2025</td>
                                <td>25.03.2025</td>
                                <td>38 720,50 PLN</td>
                                <td>24 840,00 PLN</td>
                                <td><Badge bg="success">Złożona</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">PDF</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="nowa" title="Nowa deklaracja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Kwartał rozliczeniowy*</Form.Label>
                                            <Form.Select required>
                                                <option>Q2 2025</option>
                                                <option>Q1 2025</option>
                                                <option>Q4 2024</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Termin płatności</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-07-25"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>VAT należny*</Form.Label>
                                            <Form.Control
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>VAT naliczony*</Form.Label>
                                            <Form.Control
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Uwagi</Form.Label>
                                    <Form.Control as="textarea" rows={2} />
                                </Form.Group>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Generuj deklarację
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="rozliczenie" title="Rozliczenie kwartalne">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Wybierz kwartał</Form.Label>
                                <Form.Select>
                                    <option>Q2 2025</option>
                                    <option>Q1 2025</option>
                                </Form.Select>
                            </Form.Group>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Miesiąc</th>
                                        <th>Sprzedaż netto</th>
                                        <th>VAT należny</th>
                                        <th>Zakupy netto</th>
                                        <th>VAT naliczony</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Kwiecień 2025</td>
                                        <td>18 200,00 PLN</td>
                                        <td>4 186,00 PLN</td>
                                        <td>12 500,00 PLN</td>
                                        <td>2 875,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Maj 2025</td>
                                        <td>15 000,00 PLN</td>
                                        <td>3 450,00 PLN</td>
                                        <td>8 000,00 PLN</td>
                                        <td>1 840,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>VAT do zapłaty za kwartał:</strong> 13 700,00 PLN
                                </div>
                                <Button variant="primary" className="mt-2">
                                    Zatwierdź rozliczenie
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Średni VAT kwartalny</h6>
                                    <h3>15 240,00 PLN</h3>
                                    <div className="text-muted">w 2025 roku</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Najwyższy VAT</h6>
                                    <h3>18 450,00 PLN</h3>
                                    <div className="text-muted">Q1 2025</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Średnie opóźnienie</h6>
                                    <h3>1,5 dnia</h3>
                                    <div className="text-muted">w składaniu</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};