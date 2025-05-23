import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Badge, Accordion } from 'react-bootstrap';

export const Atrybuty = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            {/* Tło sekcji */}
            <Container className="main-content lang-pl mt-2 mb-2">
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-list-check icon-unified mb-2" />
                    <h1 className="page-title">Zarządzanie atrybutami</h1>
                    <p className="text-muted">Grupa: Ogólne</p>
                </div>

                <div className="form-section mb-4">
                    <Row className="g-3">
                        <Col md={4}>
                            <InputGroup>
                                <Form.Control placeholder="Wprowadź nazwę atrybutu" />
                                <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                            </InputGroup>
                        </Col>
                        <Col md={3}>
                            <Form.Select defaultValue="">
                                <option>Wszystkie typy</option>
                                <option value="text">Tekst</option>
                                <option value="number">Liczba</option>
                                <option value="date">Data</option>
                                <option value="list">Lista</option>
                            </Form.Select>
                        </Col>
                        <Col md={3}>
                            <Form.Select defaultValue="">
                                <option>Wszystkie statusy</option>
                                <option value="active">Aktywny</option>
                                <option value="inactive">Nieaktywny</option>
                            </Form.Select>
                        </Col>
                        <Col md={2} className="d-flex align-items-end">
                            <Button variant="primary" className="w-100">Filtruj</Button>
                        </Col>
                    </Row>
                </div>

                <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                    <div>
                        <Button variant="success" className="me-2"><i className="bi bi-plus-lg me-1" />Dodaj nowy</Button>
                        <Button variant="outline-secondary"><i className="bi bi-download me-1" />Eksportuj</Button>
                    </div>
                    <Button variant="outline-danger"><i className="bi bi-trash me-1" />Usuń zaznaczone</Button>
                </div>

                <Table bordered hover responsive className="data-table mb-4">
                    <thead>
                        <tr>
                            <th style={{ width: 50 }}><Form.Check /></th>
                            <th>Nazwa atrybutu</th>
                            <th>Klucz</th>
                            <th>Typ</th>
                            <th>Wymagany</th>
                            <th>Status</th>
                            <th>Opcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Form.Check /></td>
                            <td>Kolor</td>
                            <td>color</td>
                            <td>Tekst</td>
                            <td><span className="badge badge-success">Tak</span></td>
                            <td><span className="badge badge-success">Aktywny</span></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                            </td>
                        </tr>
                        <tr>
                            <td><Form.Check /></td>
                            <td>Waga</td>
                            <td>weight</td>
                            <td>Liczba</td>
                            <td><Badge bg="warning" text="dark">Nie</Badge></td>
                            <td><span className="badge badge-success">Aktywny</span></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                            </td>
                        </tr>
                        <tr>
                            <td><Form.Check /></td>
                            <td>Data ważności</td>
                            <td>expiry_date</td>
                            <td>Data</td>
                            <td><span className="badge badge-success">Tak</span></td>
                            <td><span className="badge badge-inactive">Nieaktywny</span></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nowy atrybut</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={6}><Form.Control placeholder="Nazwa atrybutu*" required /></Col>
                                    <Col md={6}>
                                        <InputGroup>
                                            <Form.Control placeholder="Klucz*" required />
                                            <Button variant="outline-secondary" title="Wygeneruj klucz"><i className="bi bi-magic" /></Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={4}>
                                        <Form.Select required>
                                            <option>Typ*</option>
                                            <option value="text">Tekst</option>
                                            <option value="number">Liczba</option>
                                            <option value="date">Data</option>
                                            <option value="boolean">Tak/Nie</option>
                                            <option value="list">Lista</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Select>
                                            <option>Grupa</option>
                                            <option value="general">Ogólne</option>
                                            <option value="inventory">Magazynowe</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Select>
                                            <option>Status</option>
                                            <option value="active">Aktywny</option>
                                            <option value="inactive">Nieaktywny</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Form.Check label="Wymagany" className="mb-2" />
                                <Form.Check label="Filtrowalny" className="mb-3" />
                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="outline-secondary">Anuluj</Button>
                                    <Button variant="primary">Zapisz atrybut</Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    </Container>
);