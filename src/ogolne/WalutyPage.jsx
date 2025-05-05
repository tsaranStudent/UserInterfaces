import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';

export const Waluty = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Kursy walut 2025</h3>
                    <p className="text-muted">Aktualne kursy i zarządzanie walutami</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="primary" className="me-2">
                            <i className="bi bi-arrow-repeat me-1"></i> Aktualizuj kursy
                        </Button>
                        <Button variant="outline-success">
                            <i className="bi bi-plus-circle me-1"></i> Dodaj walutę
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <span className="text-muted me-2">Ostatnia aktualizacja: 15.01.2025</span>
                    </div>
                </div>

                <Table striped bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th>Waluta</th>
                            <th>Kod</th>
                            <th>Kurs (PLN)</th>
                            <th>Data obowiązywania</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dolar amerykański</td>
                            <td>USD</td>
                            <td>4.25</td>
                            <td>01.01.2025 - 31.01.2025</td>
                            <td><Badge bg="success">Aktywny</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-graph-up"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>EUR</td>
                            <td>4.55</td>
                            <td>01.01.2025 - 31.01.2025</td>
                            <td><Badge bg="success">Aktywny</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="bi bi-graph-up"></i>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nową walutę</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa waluty*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Kod*</Form.Label>
                                            <Form.Control type="text" maxLength="3" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Kurs (PLN)*</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" step="0.0001" required />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data obowiązywania*</Form.Label>
                                            <Form.Control type="date" min="2025-01-01" max="2025-12-31" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz walutę
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Liczba obsługiwanych walut:</strong> 8
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnia zmiana kursu:</strong> 15.01.2025
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Historia kursów
                    </Button>
                </div>
            </Container>
        </div>
    );
};