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

export const PrzesylkiKurierskie = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Przesyłki kurierskie 2025</h3>
                    <p className="text-muted">Zarządzanie przesyłkami i nadaniami</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-plus-circle me-1"></i> Nowa przesyłka
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-printer me-1"></i> Drukuj etykiety
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <InputGroup className="search-input">
                            <Form.Control placeholder="Wyszukaj przesyłkę..." />
                            <Button variant="outline-secondary">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </div>
                </div>

                <Table striped bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th>Nr przesyłki</th>
                            <th>Nadawca</th>
                            <th>Odbiorca</th>
                            <th>Data nadania</th>
                            <th>Status</th>
                            <th>Kurier</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>KUR-2025-00147</td>
                            <td>TechCorp Sp. z o.o.</td>
                            <td>Jan Kowalski</td>
                            <td>15.01.2025</td>
                            <td><Badge bg="success">Dostarczona</Badge></td>
                            <td>DPD (J. Nowak)</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-eye"></i>
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-printer"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>KUR-2025-00148</td>
                            <td>SklepOnline.pl</td>
                            <td>Anna Wiśniewska</td>
                            <td>16.01.2025</td>
                            <td><Badge bg="warning" text="dark">W transporcie</Badge></td>
                            <td>InPost (A. Kowalczyk)</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-eye"></i>
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-printer"></i>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Nadaj nową przesyłkę</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nadawca*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Odbiorca*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data nadania*</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-01-18" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Firma kurierska*</Form.Label>
                                            <Form.Select required>
                                                <option>DPD</option>
                                                <option>InPost</option>
                                                <option>DHL</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Waga (kg)*</Form.Label>
                                            <Form.Control type="number" step="0.1" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Nadaj przesyłkę
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Przesyłki w 2025:</strong> 148
                    </div>
                    <div className="summary-text">
                        <strong>Dostarczone:</strong> 132 (89%)
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Generuj raport
                    </Button>
                </div>
            </Container>
        </div>
    );
};