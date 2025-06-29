﻿import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const ZapisyKPiR = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Zapisy KPiR</h2>
                <p className="text-muted">Ewidencja zapisów Księgi Przychodów i Rozchodów (2025)</p>
            </div>

            <Tabs defaultActiveKey="zapisy" className="mb-4">
                <Tab eventKey="zapisy" title="Ewidencja zapisów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy wpis</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Przychód</option>
                                <option>Rozchód</option>
                            </Form.Select>
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
                                <th>Data</th>
                                <th>Numer</th>
                                <th>Opis</th>
                                <th>Kwota</th>
                                <th>Typ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>KP/2025/123</td>
                                <td>Sprzedaż towarów</td>
                                <td>5 000,00 PLN</td>
                                <td><Badge bg="success">Przychód</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>KW/2025/124</td>
                                <td>Zakup materiałów</td>
                                <td>2 500,00 PLN</td>
                                <td><Badge bg="danger">Rozchód</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenie" title="Podsumowanie rozliczeń">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Miesiąc rozliczeniowy*</Form.Label>
                                            <Form.Select required>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Podatek dochodowy</Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue="1 000,00 PLN"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Rodzaj operacji</th>
                                            <th>Kwota</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Przychód</td>
                                            <td>15 000,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Rozchód</td>
                                            <td>5 000,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Dochód netto:</strong> 10 000,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź rozliczenie
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
