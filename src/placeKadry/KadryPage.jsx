import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const Kadry = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Płace i Kadry</h2>
                <p className="text-muted">Zarządzanie pracownikami i płacami (2025)</p>
            </div>

            <Tabs defaultActiveKey="pracownicy" className="mb-4">
                <Tab eventKey="pracownicy" title="Pracownicy">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy pracownik</Button>
                            <Button variant="outline-secondary">Importuj dane</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-01"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                            <Form.Control
                                placeholder="Szukaj..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Imię i nazwisko</th>
                                <th>Stanowisko</th>
                                <th>Data zatrudnienia</th>
                                <th>Wynagrodzenie</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jan Kowalski</td>
                                <td>Manager</td>
                                <td>01.01.2025</td>
                                <td>10 000,00 PLN</td>
                                <td><Badge bg="success">Zatrudniony</Badge></td>
                            </tr>
                            <tr>
                                <td>Agnieszka Nowak</td>
                                <td>Specjalista</td>
                                <td>15.03.2025</td>
                                <td>6 500,00 PLN</td>
                                <td><Badge bg="warning">Na próbę</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="plany" title="Plany urlopowe">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Pracownik*</Form.Label>
                                            <Form.Select required>
                                                <option>Jan Kowalski</option>
                                                <option>Agnieszka Nowak</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data rozpoczęcia urlopu*</Form.Label>
                                            <Form.Control type="date" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Data</th>
                                            <th>Typ urlopu</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10.06.2025</td>
                                            <td>Wypoczynkowy</td>
                                            <td><Badge bg="success">Zatwierdzony</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>01.07.2025</td>
                                            <td>Bez płatny</td>
                                            <td><Badge bg="danger">Oczekujący</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Urlopy do wykorzystania:</strong> 12 dni
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź urlop
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};
