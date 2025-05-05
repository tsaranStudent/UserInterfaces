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

export const Rabaty = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zarządzanie rabatami</h3>
                    <p className="text-muted">Promocje i oferty specjalne na 2025 rok</p>
                </div>

                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-percent me-1"></i> Nowy rabat
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-calendar-week me-1"></i> Planowane promocje
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <InputGroup className="search-input">
                            <Form.Control placeholder="Wyszukaj rabat..." />
                            <Button variant="outline-secondary">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </div>
                </div>

                <Table striped bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th>Kod rabatu</th>
                            <th>Nazwa promocji</th>
                            <th>Wartość</th>
                            <th>Okres ważności</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RAB2025Q1</td>
                            <td>Noworoczna wyprzedaż</td>
                            <td>15%</td>
                            <td>01.01.2025 - 31.03.2025</td>
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
                            <td>WAKACJE25</td>
                            <td>Letnie promocje</td>
                            <td>10%</td>
                            <td>01.06.2025 - 31.08.2025</td>
                            <td><Badge bg="warning" text="dark">Planowany</Badge></td>
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
                        <Accordion.Header>Dodaj nowy rabat</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa rabatu*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Kod rabatu*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Wartość rabatu*</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" required />
                                                <InputGroup.Text>%</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data rozpoczęcia*</Form.Label>
                                            <Form.Control type="date" min="2025-01-01" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data zakończenia*</Form.Label>
                                            <Form.Control type="date" min="2025-01-02" max="2025-12-31" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz rabat
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Aktywne rabaty w 2025:</strong> 3
                    </div>
                    <div className="summary-text">
                        <strong>Planowane promocje:</strong> 5
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Raport roczny
                    </Button>
                </div>
            </Container>
        </div>
    );
};