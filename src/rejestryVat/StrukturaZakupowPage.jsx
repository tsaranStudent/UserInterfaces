import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, ProgressBar } from 'react-bootstrap';
import '../App.css';

export const StrukturaZakupow = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Struktura zakupów</h2>
                <p className="text-muted">Analiza zakupów VAT za okresy rozliczeniowe (2025)</p>
            </div>

            <Tabs defaultActiveKey="analiza" className="mb-4">
                <Tab eventKey="analiza" title="Analiza zakupów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Generuj raport</Button>
                            <Button variant="outline-secondary">Eksportuj do Excel</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Maj 2025</option>
                                <option>Kwiecień 2025</option>
                                <option>Marzec 2025</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Filtruj dostawców..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6 className="text-muted">Łączna wartość zakupów</h6>
                                    <h3>124 560,00 PLN</h3>
                                    <ProgressBar now={75} variant="success" className="mt-2" />
                                    <small className="text-muted">15% wzrost względem poprzedniego miesiąca</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6 className="text-muted">VAT naliczony</h6>
                                    <h3>28 648,80 PLN</h3>
                                    <ProgressBar now={60} variant="info" className="mt-2" />
                                    <small className="text-muted">12% wzrost względem poprzedniego miesiąca</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6 className="text-muted">Liczba faktur</h6>
                                    <h3>87</h3>
                                    <ProgressBar now={45} variant="warning" className="mt-2" />
                                    <small className="text-muted">5% wzrost względem poprzedniego miesiąca</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Dostawca</th>
                                <th>NIP</th>
                                <th>Wartość netto</th>
                                <th>VAT</th>
                                <th>Liczba faktur</th>
                                <th>Udział %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ABC Zaopatrzenie Sp. z o.o.</td>
                                <td>1234567890</td>
                                <td>45 200,00 PLN</td>
                                <td>10 396,00 PLN</td>
                                <td>12</td>
                                <td>
                                    <ProgressBar now={36} label={`36%`} variant="success" />
                                </td>
                            </tr>
                            <tr>
                                <td>XYZ Materiały Budowlane</td>
                                <td>0987654321</td>
                                <td>32 150,00 PLN</td>
                                <td>7 394,50 PLN</td>
                                <td>8</td>
                                <td>
                                    <ProgressBar now={26} label={`26%`} variant="info" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="stawki" title="Stawki VAT">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Okres rozliczeniowy</Form.Label>
                                        <Form.Select>
                                            <option>Maj 2025</option>
                                            <option>Kwiecień 2025</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Grupa dostawców</Form.Label>
                                        <Form.Select>
                                            <option>Wszystkie grupy</option>
                                            <option>Materiały budowlane</option>
                                            <option>Usługi</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Stawka VAT</th>
                                        <th>Wartość netto</th>
                                        <th>Kwota VAT</th>
                                        <th>Liczba dokumentów</th>
                                        <th>Udział %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>23%</td>
                                        <td>78 450,00 PLN</td>
                                        <td>18 043,50 PLN</td>
                                        <td>45</td>
                                        <td>63%</td>
                                    </tr>
                                    <tr>
                                        <td>8%</td>
                                        <td>32 150,00 PLN</td>
                                        <td>2 572,00 PLN</td>
                                        <td>22</td>
                                        <td>26%</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Łączna wartość netto:</strong> 110 600,00 PLN
                                </div>
                                <Button variant="primary" className="mt-2">
                                    Generuj zestawienie
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="dostawcy" title="Analiza dostawców">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-end">
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-01"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-31"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                            <Button variant="primary">Filtruj</Button>
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Lp.</th>
                                <th>Dostawca</th>
                                <th>NIP</th>
                                <th>Wartość zakupów</th>
                                <th>Trend</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ABC Zaopatrzenie Sp. z o.o.</td>
                                <td>1234567890</td>
                                <td>45 200,00 PLN</td>
                                <td><Badge bg="success">+15%</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>XYZ Materiały Budowlane</td>
                                <td>0987654321</td>
                                <td>32 150,00 PLN</td>
                                <td><Badge bg="danger">-5%</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </Container>
    );
};