import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const GrupyTowarowe = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Grupy towarowe 2025</h3>
                    <p className="text-muted">Zarządzaj hierarchią grup towarowych</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-plus-lg me-1"></i> Nowa grupa
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <Form.Control
                            type="text"
                            placeholder="Wyszukaj grupę..."
                            className="search-input"
                        />
                    </div>
                </div>

                <Table bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th>Kod</th>
                            <th>Nazwa grupy</th>
                            <th>Liczba produktów</th>
                            <th>Data utworzenia</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GT-2025-001</td>
                            <td>Elektronika</td>
                            <td>156</td>
                            <td>15.01.2025</td>
                            <td><Badge bg="success">Aktywna</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>GT-2025-002</td>
                            <td>Artykuły biurowe</td>
                            <td>87</td>
                            <td>10.01.2025</td>
                            <td><Badge bg="success">Aktywna</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>GT-2025-003</td>
                            <td>Meble</td>
                            <td>42</td>
                            <td>05.01.2025</td>
                            <td><Badge bg="warning" text="dark">Wstrzymana</Badge></td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-1">
                                    <i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nową grupę towarową</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa grupy*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Grupa nadrzędna</Form.Label>
                                            <Form.Select>
                                                <option value="">Brak</option>
                                                <option value="1">Elektronika</option>
                                                <option value="2">Artykuły biurowe</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Kod grupy*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Status</Form.Label>
                                            <Form.Select>
                                                <option value="active">Aktywna</option>
                                                <option value="inactive">Nieaktywna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">Zapisz</Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="summary-row">
                    <Row>
                        <Col md={{ span: 4, offset: 8 }}>
                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Liczba grup w 2025:</strong> 12
                                </div>
                                <Button variant="outline-primary" className="submit-btn mt-2">
                                    Pełna hierarchia
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};