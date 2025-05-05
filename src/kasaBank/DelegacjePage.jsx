import React from 'react';
import { Container, Table, Accordion, Form, Row, Col, Badge, Button, Card, Tabs, Tab } from 'react-bootstrap';
import '../App.css';

export const Delegacje = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Zarządzanie delegacjami</h2>
                <p className="text-muted">Moduł rozliczeń delegacji służbowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista delegacji">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa delegacja</Button>
                            <Button variant="outline-secondary">Importuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="text"
                                placeholder="Szukaj delegacji..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Numer</th>
                                <th>Pracownik</th>
                                <th>Cel delegacji</th>
                                <th>Okres</th>
                                <th>Kwota</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DEL/2025/012</td>
                                <td>Jan Kowalski</td>
                                <td>Szkolenie ERP</td>
                                <td>15-17.05.2025</td>
                                <td>1 245,00 PLN</td>
                                <td><Badge bg="success">Rozliczona</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>DEL/2025/018</td>
                                <td>Anna Nowak</td>
                                <td>Wizyta u klienta</td>
                                <td>22-24.05.2025</td>
                                <td>890,00 PLN</td>
                                <td><Badge bg="warning">Do rozliczenia</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="nowa" title="Nowa delegacja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Pracownik*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz pracownika...</option>
                                                <option>Jan Kowalski</option>
                                                <option>Anna Nowak</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data zlecenia*</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-01" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Cel delegacji*</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data rozpoczęcia*</Form.Label>
                                            <Form.Control type="date" min="2025-05-01" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data zakończenia*</Form.Label>
                                            <Form.Control type="date" min="2025-05-01" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Koszty delegacji</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col md={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Dieta</Form.Label>
                                                        <Form.Control type="number" min="0" step="0.01" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Nocleg</Form.Label>
                                                        <Form.Control type="number" min="0" step="0.01" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Transport</Form.Label>
                                                        <Form.Control type="number" min="0" step="0.01" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz delegację
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="rozliczenia" title="Rozliczenia">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Wybierz delegację do rozliczenia</Form.Label>
                                <Form.Select>
                                    <option>DEL/2025/018 - Anna Nowak (22-24.05.2025)</option>
                                    <option>DEL/2025/019 - Marek Wiśniewski (28-30.05.2025)</option>
                                </Form.Select>
                            </Form.Group>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Kategoria</th>
                                        <th>Kwota zaliczki</th>
                                        <th>Kwota rozliczenia</th>
                                        <th>Różnica</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dieta</td>
                                        <td>450,00 PLN</td>
                                        <td>420,00 PLN</td>
                                        <td>-30,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Nocleg</td>
                                        <td>800,00 PLN</td>
                                        <td>750,00 PLN</td>
                                        <td>-50,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Saldo końcowe:</strong> -80,00 PLN
                                </div>
                                <Button variant="primary" className="mt-2">
                                    Zatwierdź rozliczenie
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};