import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, Button, Badge, Accordion, Table } from 'react-bootstrap';

export const UdzielPelnomocnictwa = () => (
    <Container className="main-content lang-pl mt-3 mb-3">
        {/* Nagłówek sekcji z ikoną */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-person-badge icon-unified mb-2" />
            <h1 className="page-title">Pełnomocnictwa</h1>
            <p className="text-muted">Zarządzanie pełnomocnictwami na rok 2025</p>
        </div>

        {/* Pasek akcji z wyszukiwarką */}
        <div className="actions-bar form-section mb-4">
            <div className="actions-bar-start">
                <Button variant="success" className="me-2">
                    <i className="bi bi-file-earmark-plus me-1" /> Nowe pełnomocnictwo
                </Button>
            </div>
            <div className="actions-bar-end">
                <Form.Control placeholder="Wyszukaj pełnomocnictwo..." className="search-input" />
            </div>
        </div>

        {/* Tabela pełnomocnictw */}
        <Table striped bordered hover responsive className="data-table mb-4">
            <thead>
                <tr>
                    <th>Nr pełnomocnictwa</th>
                    <th>Mocodawca</th>
                    <th>Pełnomocnik</th>
                    <th>Data ważności</th>
                    <th>Status</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PEL/2025/001</td>
                    <td>Jan Kowalski</td>
                    <td>Anna Nowak</td>
                    <td>31.12.2025</td>
                    <td>
                        <span className="badge badge-success">
                            <i className="bi bi-check-circle me-1" /> Aktywne
                        </span>
                    </td>
                    <td>
                        <Button variant="outline-primary" size="sm" className="me-1" title="Podgląd">
                            <i className="bi bi-eye" />
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Edytuj">
                            <i className="bi bi-pencil" />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>PEL/2025/002</td>
                    <td>Barbara Wiśniewska</td>
                    <td>Piotr Zalewski</td>
                    <td>20.06.2025</td>
                    <td>
                        <span className="badge badge-planned">
                            <i className="bi bi-hourglass-split me-1" /> Wygasa
                        </span>
                    </td>
                    <td>
                        <Button variant="outline-primary" size="sm" className="me-1" title="Podgląd">
                            <i className="bi bi-eye" />
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Edytuj">
                            <i className="bi bi-pencil" />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>PEL/2025/003</td>
                    <td>Tomasz Malinowski</td>
                    <td>Katarzyna Zielińska</td>
                    <td>15.03.2025</td>
                    <td>
                        <span className="badge badge-inactive">
                            <i className="bi bi-x-circle me-1" /> Wygasło
                        </span>
                    </td>
                    <td>
                        <Button variant="outline-primary" size="sm" className="me-1" title="Podgląd">
                            <i className="bi bi-eye" />
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Edytuj">
                            <i className="bi bi-pencil" />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>

        {/* Accordion - formularz nowego pełnomocnictwa */}
        <Accordion className="mt-4 form-section">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <i className="bi bi-person-plus me-2" /> Utwórz nowe pełnomocnictwo
                </Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Row className="mb-3 g-3">
                            <Col md={6}>
                                <Form.Group controlId="peniodawca">
                                    <Form.Label>
                                        <i className="bi bi-person me-1" /> Mocodawca*
                                    </Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="pelnomocnik">
                                    <Form.Label>
                                        <i className="bi bi-person-check me-1" /> Pełnomocnik*
                                    </Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3 g-3">
                            <Col md={6}>
                                <Form.Group controlId="zakresUprawnien">
                                    <Form.Label>
                                        <i className="bi bi-shield-lock me-1" /> Zakres uprawnień*
                                    </Form.Label>
                                    <Form.Select required>
                                        <option>Pełne</option>
                                        <option>Ograniczone</option>
                                        <option>Czasowe</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="dataWaznosci">
                                    <Form.Label>
                                        <i className="bi bi-calendar-check me-1" /> Data ważności*
                                    </Form.Label>
                                    <Form.Control type="date" min="2025-01-01" max="2025-12-31" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="opisUprawnien" className="mb-3">
                            <Form.Label>
                                <i className="bi bi-info-circle me-1" /> Opis uprawnień
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="actions-bar-end d-flex justify-content-end gap-2">
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" /> Anuluj
                            </Button>
                            <Button variant="primary">
                                <i className="bi bi-save me-1" /> Zapisz pełnomocnictwo
                            </Button>
                        </div>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        {/* Podsumowanie */}
        <div className="summary-box mt-4">
            <p>
                <i className="bi bi-patch-check me-2" />
                <strong>Aktywne pełnomocnictwa w 2025:</strong> 12
            </p>
            <p>
                <i className="bi bi-hourglass-top me-2" />
                <strong>Wygasające w 2025:</strong> 3
            </p>
            <Button variant="outline-primary" className="submit-btn mt-2">
                <i className="bi bi-clipboard-data me-1" /> Generuj zestawienie
            </Button>
        </div>
    </Container>
);
