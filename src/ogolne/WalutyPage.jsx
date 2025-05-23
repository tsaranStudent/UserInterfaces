import React from 'react';
import '../App.css';
import { Container, Row, Col, Table, Form, InputGroup, Button, Badge, Accordion } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Waluty = () => (
    <Container className="main-content lang-pl mt-3 mb-3">
        {/* Nagłówek sekcji z ikoną */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-currency-exchange icon-unified mb-2" />
            <h1 className="page-title">Kursy walut 2025</h1>
            <p className="text-muted">Aktualne kursy i zarządzanie walutami</p>
        </div>

        {/* Pasek akcji */}
        <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
            <div className="actions-bar-start">
                <Button variant="primary" className="me-2">
                    <i className="bi bi-arrow-repeat me-1"></i> Aktualizuj kursy
                </Button>
                <Button variant="outline-success">
                    <i className="bi bi-plus-circle me-1"></i> Dodaj walutę
                </Button>
            </div>
            <div className="actions-bar-end">
                <span className="text-muted me-2">
                    <i className="bi bi-clock-history me-1" />
                    Ostatnia aktualizacja: 15.01.2025
                </span>
            </div>
        </div>

        {/* Tabela kursów walut */}
        <Table striped bordered hover responsive className="data-table mb-4">
            <thead>
                <tr>
                    <th><i className="bi bi-currency-dollar me-1" />Waluta</th>
                    <th><i className="bi bi-123 me-1" />Kod</th>
                    <th><i className="bi bi-graph-up-arrow me-1" />Kurs (PLN)</th>
                    <th><i className="bi bi-calendar-week me-1" />Data obowiązywania</th>
                    <th><i className="bi bi-patch-check me-1" />Status</th>
                    <th><i className="bi bi-gear me-1" />Akcje</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dolar amerykański</td>
                    <td>USD</td>
                    <td>4.25</td>
                    <td>01.01.2025 - 31.01.2025</td>
                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />Aktywny</Badge></td>
                    <td>
                        <Button variant="outline-primary" size="sm" className="me-1" title="Edytuj">
                            <i className="bi bi-pencil"></i>
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Historia">
                            <i className="bi bi-graph-up"></i>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>Euro</td>
                    <td>EUR</td>
                    <td>4.55</td>
                    <td>01.01.2025 - 31.01.2025</td>
                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />Aktywny</Badge></td>
                    <td>
                        <Button variant="outline-primary" size="sm" className="me-1" title="Edytuj">
                            <i className="bi bi-pencil"></i>
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Historia">
                            <i className="bi bi-graph-up"></i>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>Funt szterling</td>
                    <td>GBP</td>
                    <td>5.18</td>
                    <td>01.01.2025 - 31.01.2025</td>
                    <td><Badge bg="warning"><i className="bi bi-hourglass-split me-1" />Zmieniony</Badge></td>
                    <td>
                        <Button variant="outline-primary" size="sm" className="me-1" title="Edytuj">
                            <i className="bi bi-pencil"></i>
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Historia">
                            <i className="bi bi-graph-up"></i>
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>

        {/* Accordion - formularz dodania waluty */}
        <Accordion className="mt-4 form-section">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <i className="bi bi-plus-square me-2" />Dodaj nową walutę
                </Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Row className="mb-3 g-3">
                            <Col md={4}>
                                <Form.Group controlId="walutaNazwa">
                                    <Form.Label>
                                        <i className="bi bi-currency-exchange me-1" />Nazwa waluty*
                                    </Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group controlId="walutaKod">
                                    <Form.Label>
                                        <i className="bi bi-123 me-1" />Kod*
                                    </Form.Label>
                                    <Form.Select required>
                                        <option value="">Wybierz...</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="walutaKurs">
                                    <Form.Label>
                                        <i className="bi bi-graph-up-arrow me-1" />Kurs (PLN)*
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control type="number" step="0.0001" required />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="walutaData">
                                    <Form.Label>
                                        <i className="bi bi-calendar-week me-1" />Data obowiązywania*
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        min="2025-01-01"
                                        max="2025-12-31"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="actions-bar-end d-flex justify-content-end gap-2">
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" /> Anuluj
                            </Button>
                            <Button variant="primary">
                                <i className="bi bi-save me-1" /> Zapisz walutę
                            </Button>
                        </div>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        {/* Podsumowanie */}
        <div className="summary-box mt-4">
            <p>
                <i className="bi bi-cash-coin me-2" />
                <strong>Liczba obsługiwanych walut:</strong> 8
            </p>
            <p>
                <i className="bi bi-calendar2-week me-2" />
                <strong>Ostatnia zmiana kursu:</strong> 15.01.2025
            </p>
            <Button variant="outline-primary" className="submit-btn mt-2">
                <i className="bi bi-clock-history me-1" /> Historia kursów
            </Button>
        </div>
    </Container>
);
