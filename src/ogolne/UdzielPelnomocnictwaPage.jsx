import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

export const UdzielPelnomocnictwa = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Pełnomocnictwa</h3>
                    <p className="text-muted">Zarządzanie pełnomocnictwami na rok 2025</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-file-earmark-plus me-1"></i> Nowe pełnomocnictwo
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <Form.Control
                            placeholder="Wyszukaj pełnomocnictwo..."
                            className="search-input"
                        />
                    </div>
                </div>

                <Table striped bordered hover responsive className="data-table">
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
                            <td><Badge bg="success">Aktywne</Badge></td>
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
                        <Accordion.Header>Utwórz nowe pełnomocnictwo</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Mocodawca*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Pełnomocnik*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Zakres uprawnień*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz zakres...</option>
                                                <option>Pełne</option>
                                                <option>Ograniczone</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data ważności*</Form.Label>
                                            <Form.Control
                                                type="date"
                                                min="2025-01-01"
                                                max="2025-12-31"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label className="form-label">Opis uprawnień</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz pełnomocnictwo
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Aktywne pełnomocnictwa w 2025:</strong> 12
                    </div>
                    <div className="summary-text">
                        <strong>Wygasające w 2025:</strong> 3
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Generuj zestawienie
                    </Button>
                </div>
            </Container>
        </div>
    );
};