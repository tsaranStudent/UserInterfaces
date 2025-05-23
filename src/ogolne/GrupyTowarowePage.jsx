import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, Button, Table, Accordion } from 'react-bootstrap';

export const GrupyTowarowe = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            {/* Tło sekcji */}
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-tags icon-unified mb-2" />
                    <h1 className="page-title">Grupy towarowe 2025</h1>
                    <p className="text-muted">Zarządzaj hierarchią grup towarowych</p>
                </div>

                {/* Pasek akcji i wyszukiwarka */}
                <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                    <Button variant="success">
                        <i className="bi bi-plus-lg me-1" /> Nowa grupa
                    </Button>
                    <Form.Control
                        type="text"
                        placeholder="Wyszukaj grupę..."
                        className="search-input w-25"
                    />
                </div>

                {/* Tabela grup towarowych */}
                <Table bordered hover responsive className="data-table mb-4">
                    <thead>
                        <tr>
                            <th>Kod</th>
                            <th>Nazwa</th>
                            <th>Liczba</th>
                            <th>Data utw.</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>EL</td>
                            <td>Elektronika</td>
                            <td>120</td>
                            <td>05.02.2025</td>
                            <td><span className="badge badge-success">Aktywna</span></td>
                            <td>
                                <Button size="sm"><i className="bi bi-pencil" /></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>BIU</td>
                            <td>Biurowe</td>
                            <td>80</td>
                            <td>12.01.2025</td>
                            <td><span className="badge badge-success">Aktywna</span></td>
                            <td>
                                <Button size="sm"><i className="bi bi-pencil" /></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>HIG</td>
                            <td>Higiena</td>
                            <td>45</td>
                            <td>20.03.2025</td>
                            <td><span className="badge badge-planned">Planowana</span></td>
                            <td>
                                <Button size="sm"><i className="bi bi-pencil" /></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>RTV</td>
                            <td>RTV</td>
                            <td>60</td>
                            <td>28.03.2025</td>
                            <td><span className="badge badge-inactive">Nieaktywna</span></td>
                            <td>
                                <Button size="sm"><i className="bi bi-pencil" /></Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* Dodawanie nowej grupy */}
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nową grupę</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Control placeholder="Nazwa grupy*" required />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control placeholder="Kod grupy*" required />
                                    </Col>
                                    <Col md={2}>
                                        {/* Przykładowa lista rozwijana */}
                                        <Form.Select required>
                                            <option>Typ grupy*</option>
                                            <option>Asortyment</option>
                                            <option>Usługa</option>
                                            <option>Zestaw</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="success">
                                        <i className="bi bi-save me-1" /> Zapisz
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    </Container>
);
