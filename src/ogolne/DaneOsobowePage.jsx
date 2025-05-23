import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Accordion } from 'react-bootstrap';

export const DaneOsobowe = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            {/* Tło sekcji */}
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-person-lines-fill icon-unified mb-2" />
                    <h1 className="page-title">Zarządzanie danymi osobowymi</h1>
                    <p className="text-muted">Aktualne dane na rok 2025</p>
                </div>

                {/* Pasek filtrów */}
                <div className="form-section mb-4">
                    <Row className="g-3">
                        <Col md={4}>
                            <InputGroup>
                                <Form.Control placeholder="Imię, nazwisko lub ID" />
                                <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                            </InputGroup>
                        </Col>
                        <Col md={3}>
                            <Form.Select>
                                <option>Wszystkie działy</option>
                                <option>HR</option>
                                <option>Finanse</option>
                                <option>IT</option>
                            </Form.Select>
                        </Col>
                        <Col md={3}>
                            <Form.Select>
                                <option>Wszystkie statusy</option>
                                <option>Aktywny</option>
                                <option>Urlop</option>
                                <option>Nieaktywny</option>
                            </Form.Select>
                        </Col>
                        <Col md={2} className="d-flex align-items-end">
                            <Button variant="primary" className="w-100">Filtruj</Button>
                        </Col>
                    </Row>
                </div>

                {/* Pasek akcji */}
                <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                    <div>
                        <Button variant="success" className="me-2"><i className="bi bi-person-plus me-1" />Dodaj</Button>
                        <Button variant="outline-primary"><i className="bi bi-upload me-1" />Importuj</Button>
                    </div>
                    <div>
                        <Button variant="outline-secondary" className="me-2"><i className="bi bi-printer me-1" />Drukuj</Button>
                        <Button variant="outline-success"><i className="bi bi-file-excel me-1" />Eksportuj</Button>
                    </div>
                </div>

                {/* Tabela danych */}
                <Table bordered hover responsive className="data-table mb-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imię i nazwisko</th>
                            <th>Stanowisko</th>
                            <th>Dział</th>
                            <th>Data zatr.</th>
                            <th>Umowa do</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Anna Kowalska</td>
                            <td>Księgowa</td>
                            <td>Finanse</td>
                            <td>15.02.2023</td>
                            <td>31.12.2025</td>
                            <td><span className="badge badge-success">Aktywny</span></td>
                            <td><Button size="sm"><i className="bi bi-pencil" /></Button></td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Piotr Nowak</td>
                            <td>Programista</td>
                            <td>IT</td>
                            <td>01.06.2021</td>
                            <td>—</td>
                            <td><span className="badge badge-success">Aktywny</span></td>
                            <td><Button size="sm"><i className="bi bi-pencil" /></Button></td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Maria Wiśniewska</td>
                            <td>HRBP</td>
                            <td>HR</td>
                            <td>10.09.2024</td>
                            <td>—</td>
                            <td><span className="badge badge-planned">Urlop</span></td>
                            <td><Button size="sm"><i className="bi bi-pencil" /></Button></td>
                        </tr>
                    </tbody>
                </Table>

                {/* Formularz dodawania */}
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj pracownika</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={4}><Form.Control placeholder="Imię*" required /></Col>
                                    <Col md={4}><Form.Control placeholder="Nazwisko*" required /></Col>
                                    <Col md={4}><Form.Control placeholder="PESEL*" pattern="\d{11}" required /></Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Select required>
                                            <option>Stanowisko*</option>
                                            <option>Księgowa</option>
                                            <option>Programista</option>
                                            <option>HRBP</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Select required>
                                            <option>Dział*</option>
                                            <option>Finanse</option>
                                            <option>HR</option>
                                            <option>IT</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={4}><Form.Control type="date" max="2025-12-31" required /></Col>
                                    <Col md={4}><Form.Control type="date" min="2025-01-01" /></Col>
                                    <Col md={4}>
                                        <Form.Select required>
                                            <option>Typ umowy*</option>
                                            <option>Umowa o pracę</option>
                                            <option>B2B</option>
                                            <option>Zlecenie</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                                    <Button variant="primary"><i className="bi bi-save me-1" />Zapisz</Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <p><strong>Łącznie:</strong> 3</p>
                    <p><strong>Nowi:</strong> 1</p>
                    <p><strong>Ostatnia aktualizacja:</strong> 15.01.2025</p>
                    <Button variant="outline-primary"><i className="bi bi-graph-up me-1" />Statystyki</Button>
                </div>
            </Container>
        </div>
    </Container>
);
