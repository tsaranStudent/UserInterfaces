import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';

export const Pracownicy = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zarządzanie pracownikami</h3>
                    <p className="text-muted">Aktualne dane na rok 2025</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-person-plus me-1"></i> Dodaj pracownika
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-upload me-1"></i> Importuj dane
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <InputGroup className="search-input">
                            <Form.Control placeholder="Wyszukaj pracownika..." />
                            <Button variant="outline-secondary">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </div>
                </div>

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
                            <td>PRAC-2025-001</td>
                            <td>Jan Kowalski</td>
                            <td>Kierownik działu</td>
                            <td>15.01.2020</td>
                            <td>31.12.2025</td>
                            <td><Badge bg="success">Aktywny</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-eye"></i>
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>PRAC-2025-002</td>
                            <td>Anna Nowak</td>
                            <td>Specjalista HR</td>
                            <td>01.01.2025</td>
                            <td>31.12.2026</td>
                            <td><Badge bg="warning" text="dark">Okres próbny</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-eye"></i>
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nowego pracownika</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Imię*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwisko*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Stanowisko*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz stanowisko...</option>
                                                <option>Kierownik</option>
                                                <option>Specjalista</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data zatrudnienia*</Form.Label>
                                            <Form.Control type="date" max="2025-12-31" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz pracownika
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Liczba pracowników w 2025:</strong> 42
                    </div>
                    <div className="summary-text">
                        <strong>Nowi pracownicy w 2025:</strong> 5
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Raport roczny
                    </Button>
                </div>
            </Container>
        </div>
    );
};