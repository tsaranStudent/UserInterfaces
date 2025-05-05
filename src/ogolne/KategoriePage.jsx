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

export const Kategorie = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Kategorie produktów 2025</h3>
                    <p className="text-muted">Zarządzaj kategoriami produktów</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-plus-lg me-1"></i> Nowa kategoria
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-diagram-3 me-1"></i> Drzewo kategorii
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <Form.Control
                            type="text"
                            placeholder="Wyszukaj kategorię..."
                            className="search-input"
                        />
                    </div>
                </div>

                <Table bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nazwa kategorii</th>
                            <th>Liczba produktów</th>
                            <th>Data utworzenia</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>KAT-2025-001</td>
                            <td>Elektronika</td>
                            <td>215</td>
                            <td>05.01.2025</td>
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
                            <td>KAT-2025-002</td>
                            <td>Artykuły gospodarstwa domowego</td>
                            <td>178</td>
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
                            <td>KAT-2025-003</td>
                            <td>Odzież</td>
                            <td>342</td>
                            <td>15.01.2025</td>
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
                        <Accordion.Header>Dodaj nową kategorię</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa kategorii*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Kategoria nadrzędna</Form.Label>
                                            <Form.Select>
                                                <option value="">Brak (kategoria główna)</option>
                                                <option value="1">Elektronika</option>
                                                <option value="2">Artykuły gospodarstwa domowego</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Status</Form.Label>
                                            <Form.Select>
                                                <option value="active">Aktywna</option>
                                                <option value="inactive">Nieaktywna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data ważności</Form.Label>
                                            <Form.Control type="date" min="2025-01-01" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1"></i> Zapisz kategorię
                                    </Button>
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
                                    <strong>Liczba kategorii w 2025:</strong> 24
                                </div>
                                <div className="summary-text">
                                    <strong>Ostatnia aktualizacja:</strong> 20.01.2025
                                </div>
                                <Button variant="outline-primary" className="submit-btn mt-2">
                                    <i className="bi bi-diagram-3 me-1"></i> Pełna hierarchia
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};