import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const WyslijDane = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Wysyłka danych</h2>
                <p className="text-muted">Przesyłanie dokumentów do urzędów i kontrahentów (2025)</p>
            </div>

            <Tabs defaultActiveKey="wysylka" className="mb-4">
                <Tab eventKey="wysylka" title="Wysyłka dokumentów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa wysyłka</Button>
                            <Button variant="outline-secondary">Importuj dane</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszystkie typy</option>
                                <option>JPK_V7</option>
                                <option>VAT-7</option>
                                <option>VAT-UE</option>
                            </Form.Select>
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-01"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data wysyłki</th>
                                <th>Typ dokumentu</th>
                                <th>Adresat</th>
                                <th>Status</th>
                                <th>Potwierdzenie</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25.05.2025 14:30</td>
                                <td>JPK_V7</td>
                                <td>Ministerstwo Finansów</td>
                                <td><Badge bg="success">Wysłano</Badge></td>
                                <td>REF-2025-05-2587</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>20.05.2025 09:15</td>
                                <td>VAT-UE</td>
                                <td>Urząd Skarbowy Warszawa</td>
                                <td><Badge bg="warning">W trakcie</Badge></td>
                                <td>Brak</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="nowa" title="Nowa wysyłka">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ dokumentu*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz typ...</option>
                                                <option>JPK_V7</option>
                                                <option>VAT-7</option>
                                                <option>VAT-UE</option>
                                                <option>Inny</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data wysyłki*</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-28"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Adresat*</Form.Label>
                                    <Form.Select required>
                                        <option>Ministerstwo Finansów</option>
                                        <option>Urząd Skarbowy</option>
                                        <option>Kontrahent zagraniczny</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Dodaj pliki*</Form.Label>
                                    <Form.Control
                                        type="file"
                                        required
                                        multiple
                                    />
                                </Form.Group>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Wyślij dokumenty
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="historia" title="Historia wysyłek">
                    <div className="actions-bar mb-3">
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
                            <Button variant="primary">Filtruj</Button>
                        </div>
                    </div>

                    <Table bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Typ</th>
                                <th>Adresat</th>
                                <th>Status</th>
                                <th>Rozmiar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>JPK_V7</td>
                                <td>Ministerstwo Finansów</td>
                                <td><Badge bg="success">Potwierdzono</Badge></td>
                                <td>245 KB</td>
                            </tr>
                            <tr>
                                <td>10.05.2025</td>
                                <td>VAT-UE</td>
                                <td>Urząd Skarbowy</td>
                                <td><Badge bg="info">Przyjęto</Badge></td>
                                <td>180 KB</td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Wysłane w tym miesiącu</h6>
                                    <h3>24</h3>
                                    <div className="text-muted">dokumenty</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Średni czas przetwarzania</h6>
                                    <h3>2,5 dnia</h3>
                                    <div className="text-muted">przez urzędy</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Najczęstszy typ</h6>
                                    <h3>JPK_V7</h3>
                                    <div className="text-muted">68% wysyłek</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};