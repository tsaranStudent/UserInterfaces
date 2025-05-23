import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Table, Form, InputGroup, Row, Col, Button, Accordion } from 'react-bootstrap';

export const Pracownicy = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-people icon-unified mb-2" />
                    <h1 className="page-title">Zarządzanie pracownikami</h1>
                    <p className="text-muted">Aktualne dane na rok 2025</p>
                </div>

                {/* Pasek akcji i wyszukiwarka */}
                <div className="form-section mb-4 d-flex justify-content-between align-items-center">
                    <div>
                        <Button variant="success" className="me-2">
                            <i className="bi bi-person-plus me-1" /> Dodaj
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-upload me-1" /> Importuj
                        </Button>
                    </div>
                    <InputGroup className="search-input w-25">
                        <Form.Control placeholder="Szukaj pracownika..." />
                        <Button variant="outline-secondary">
                            <i className="bi bi-search" />
                        </Button>
                    </InputGroup>
                </div>

                {/* Tabela pracowników */}
                <div className="form-section mb-4">
                    <Table striped bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imię i nazwisko</th>
                                <th>Stanowisko</th>
                                <th>Data zatrudnienia</th>
                                <th>Umowa do</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PRAC-001</td>
                                <td>Jan Kowalski</td>
                                <td>Kierownik</td>
                                <td>2020-01-15</td>
                                <td>2025-12-31</td>
                                <td><span className="badge badge-success">Aktywny</span></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">
                                        <i className="bi bi-eye" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>PRAC-002</td>
                                <td>Anna Nowak</td>
                                <td>Specjalista</td>
                                <td>2025-01-01</td>
                                <td>2026-12-31</td>
                                <td><span className="badge badge-planned">Okres próbny</span></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">
                                        <i className="bi bi-eye" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>PRAC-003</td>
                                <td>Kamil Kwiatkowski</td>
                                <td>Magazynier</td>
                                <td>2024-06-10</td>
                                <td>2025-12-31</td>
                                <td><span className="badge badge-inactive">Nieaktywny</span></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">
                                        <i className="bi bi-eye" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* Formularz dodawania pracownika */}
                <Accordion className="form-section mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj pracownika</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={6}><Form.Control placeholder="Imię*" /></Col>
                                    <Col md={6}><Form.Control placeholder="Nazwisko*" /></Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        {/* Lista rozwijana - min. 3 pozycje */}
                                        <Form.Select>
                                            <option>Stanowisko</option>
                                            <option>Kierownik</option>
                                            <option>Specjalista</option>
                                            <option>Magazynier</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={6}><Form.Control type="date" /></Col>
                                </Row>
                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="outline-secondary">Anuluj</Button>
                                    <Button variant="primary">Zapisz</Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Podsumowanie */}
                <Container>
                    <div className="summary-box">
                        <p><strong>Łącznie pracowników:</strong> 3</p>
                        <p><strong>Nowi w 2025:</strong> 1</p>
                        <Button variant="outline-primary" className="mt-2">Raport roczny</Button>
                    </div>
                </Container>
            </Container>
        </div>
    </Container>
);
