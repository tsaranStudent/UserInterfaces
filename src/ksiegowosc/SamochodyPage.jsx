import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const Samochody = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Samochody firmowe</h2>
                <p className="text-muted">Ewidencja samochodów służbowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="samochody" className="mb-4">
                <Tab eventKey="samochody" title="Ewidencja samochodów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy samochód</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Samochód A</option>
                                <option>Samochód B</option>
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
                                <th>Numer rejestracyjny</th>
                                <th>Marka</th>
                                <th>Model</th>
                                <th>Rok produkcji</th>
                                <th>Wartość</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>ABC1234</td>
                                <td>Volkswagen</td>
                                <td>Golf</td>
                                <td>2023</td>
                                <td>80 000,00 PLN</td>
                                <td><Badge bg="success">W pełni opłacony</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>XYZ5678</td>
                                <td>Audi</td>
                                <td>A4</td>
                                <td>2022</td>
                                <td>100 000,00 PLN</td>
                                <td><Badge bg="warning">W trakcie finansowania</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="koszty" title="Koszty użytkowania">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Samochód*</Form.Label>
                                            <Form.Select required>
                                                <option>Volkswagen Golf</option>
                                                <option>Audi A4</option>
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
                                            <th>Koszt</th>
                                            <th>Kwota</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ubezpieczenie</td>
                                            <td>1 200,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Serwis</td>
                                            <td>800,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Całkowity koszt użytkowania:</strong> 2 000,00 PLN
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
