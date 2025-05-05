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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const Raporty = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Generowanie raportów</h3>
                    <p className="text-muted">Dane za rok 2025</p>
                </div>

                <Tabs defaultActiveKey="sales" className="mb-3">
                    <Tab eventKey="sales" title="Sprzedażowe">
                        <div className="form-section mt-3">
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Od daty</Form.Label>
                                        <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Do daty</Form.Label>
                                        <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                                    </Form.Group>
                                </Col>
                                <Col md={4} className="d-flex align-items-end">
                                    <Button variant="primary" className="w-100">
                                        Generuj raport
                                    </Button>
                                </Col>
                            </Row>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Typ raportu</th>
                                        <th>Okres</th>
                                        <th>Data wygenerowania</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Raport miesięczny</td>
                                        <td>Styczeń 2025</td>
                                        <td>01.02.2025</td>
                                        <td><Badge bg="success">Gotowy</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                Pobierz
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="warehouse" title="Magazynowe">
                        <div className="form-section mt-3">
                            <Form.Group className="mb-3">
                                <Form.Label className="form-label">Produkt</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz nazwę produktu" />
                            </Form.Group>
                            <Button variant="primary" className="me-2">
                                Raport stanów
                            </Button>
                            <Button variant="secondary">
                                Raport ruchów
                            </Button>
                        </div>
                    </Tab>
                </Tabs>

                <div className="form-section">
                    <h5>Zaplanowane raporty</h5>
                    <Table bordered className="data-table">
                        <thead>
                            <tr>
                                <th>Nazwa raportu</th>
                                <th>Częstotliwość</th>
                                <th>Odbiorcy</th>
                                <th>Następne wykonanie</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Raport tygodniowy</td>
                                <td>Co tydzień</td>
                                <td>kierownik@firma.pl</td>
                                <td>15.01.2025</td>
                                <td>
                                    <Button variant="outline-secondary" size="sm">
                                        Edytuj
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Wygenerowano w 2025:</strong> 24 raporty
                    </div>
                    <div className="summary-text">
                        <strong>Zaplanowane:</strong> 8 raportów
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Historia raportów
                    </Button>
                </div>
            </Container>
        </div>
    );
};