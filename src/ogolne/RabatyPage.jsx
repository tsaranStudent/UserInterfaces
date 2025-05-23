import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Badge, Accordion } from 'react-bootstrap';

export const Rabaty = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Ikona nad tytułem */}
                    <i className="bi bi-percent mb-2" />
                    <h1 className="page-title">Zarządzanie rabatami</h1>
                    <p className="text-muted">Promocje i oferty specjalne na 2025 rok</p>
                </div>

                {/* Pasek akcji i wyszukiwarka */}
                <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                    <div>
                        <Button variant="success" className="me-2">
                            <i className="bi bi-percent me-1" /> Nowy rabat
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-calendar-week me-1" /> Planowane promocje
                        </Button>
                    </div>
                    <InputGroup className="search-input w-25">
                        <Form.Control placeholder="Wyszukaj rabat..." />
                        <Button variant="outline-secondary">
                            <i className="bi bi-search" />
                        </Button>
                    </InputGroup>
                </div>

                {/* Tabela rabatów */}
                <Table bordered hover responsive className="data-table mb-4">
                    <thead>
                        <tr>
                            <th>Kod rabatu</th>
                            <th>Nazwa promocji</th>
                            <th>Wartość</th>
                            <th>Okres ważności</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RAB2025Q1</td>
                            <td>Noworoczna wyprzedaż</td>
                            <td>15%</td>
                            <td>01.01.2025 - 31.03.2025</td>
                            <td>
                                <span className="badge badge-success">
                                    <i className="bi bi-check-circle me-1" /> Aktywny
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
                            <td>WAKACJE25</td>
                            <td>Letnie promocje</td>
                            <td>10%</td>
                            <td>01.06.2025 - 31.08.2025</td>
                            <td>
                                <span className="badge badge-planned">
                                    <i className="bi bi-hourglass-split me-1" /> Planowany
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

                {/* Accordion - formularz dodawania rabatu */}
                <Accordion className="form-section mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <i className="bi bi-plus-circle me-2" /> Dodaj nowy rabat
                        </Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3 g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="rabatNazwa">
                                            <Form.Label>
                                                <i className="bi bi-tag me-1" /> Nazwa rabatu*
                                            </Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="rabatKod">
                                            <Form.Label>
                                                <i className="bi bi-upc-scan me-1" /> Kod rabatu*
                                            </Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3 g-3">
                                    <Col md={4}>
                                        <Form.Group controlId="rabatWartosc">
                                            <Form.Label>
                                                <i className="bi bi-cash-coin me-1" /> Wartość rabatu*
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" required />
                                                <InputGroup.Text>%</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="rabatStart">
                                            <Form.Label>
                                                <i className="bi bi-calendar-plus me-1" /> Data rozpoczęcia*
                                            </Form.Label>
                                            <Form.Control type="date" min="2025-01-01" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="rabatEnd">
                                            <Form.Label>
                                                <i className="bi bi-calendar-check me-1" /> Data zakończenia*
                                            </Form.Label>
                                            <Form.Control type="date" min="2025-01-02" max="2025-12-31" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-x-circle me-1" /> Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1" /> Zapisz rabat
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Podsumowanie rabatów */}
                <div className="summary-row">
                    <div className="summary-box">
                        <p>
                            <i className="bi bi-patch-check me-2" />
                            <strong>Aktywne rabaty w 2025:</strong> 3
                        </p>
                        <p>
                            <i className="bi bi-calendar-week me-2" />
                            <strong>Planowane promocje:</strong> 5
                        </p>
                        <Button variant="outline-primary" className="submit-btn mt-2">
                            <i className="bi bi-bar-chart-line me-1" /> Raport roczny
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    </Container>
);
