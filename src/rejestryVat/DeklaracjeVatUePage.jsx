import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const DeklaracjeVatUe = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Deklaracje VAT UE</h2>
                <p className="text-muted">Rozliczenia transakcji wewnątrzwspólnotowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="wdt" className="mb-4">
                <Tab eventKey="wdt" title="WDT">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa deklaracja</Button>
                            <Button variant="outline-secondary">Importuj dane</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Maj 2025</option>
                                <option>Kwiecień 2025</option>
                                <option>Marzec 2025</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj kontrahenta..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Kraj</th>
                                <th>Kontrahent</th>
                                <th>Numer VAT</th>
                                <th>Wartość netto</th>
                                <th>Liczba transakcji</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DE</td>
                                <td>ABC GmbH</td>
                                <td>DE123456789</td>
                                <td>15 200,00 EUR</td>
                                <td>3</td>
                                <td><Badge bg="success">Zgłoszono</Badge></td>
                            </tr>
                            <tr>
                                <td>FR</td>
                                <td>XYZ SAS</td>
                                <td>FR987654321</td>
                                <td>8 500,00 EUR</td>
                                <td>2</td>
                                <td><Badge bg="warning">W przygotowaniu</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="wnt" title="WNT">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Okres rozliczeniowy*</Form.Label>
                                        <Form.Select required>
                                            <option>Maj 2025</option>
                                            <option>Kwiecień 2025</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Termin zgłoszenia</Form.Label>
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-06-25"
                                            disabled
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Kraj pochodzenia</th>
                                        <th>Dostawca</th>
                                        <th>Numer VAT</th>
                                        <th>Wartość netto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>IT</td>
                                        <td>FORNITURE SRL</td>
                                        <td>IT12345678901</td>
                                        <td>12 350,00 EUR</td>
                                    </tr>
                                    <tr>
                                        <td>ES</td>
                                        <td>TECNOLOGIA SA</td>
                                        <td>ES987654321</td>
                                        <td>5 800,00 EUR</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Łączna wartość WNT:</strong> 18 150,00 EUR
                                </div>
                                <Button variant="primary" className="mt-2">
                                    Generuj deklarację WNT
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="intrastat" title="INTRASTAT">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Generuj raport</Button>
                        </div>
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
                            <Button variant="outline-secondary">Eksportuj do XML</Button>
                        </div>
                    </div>

                    <Table bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Kod towaru</th>
                                <th>Kraj</th>
                                <th>Wartość netto</th>
                                <th>Ilość</th>
                                <th>Jednostka</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>84713000</td>
                                <td>DE</td>
                                <td>24 500,00 EUR</td>
                                <td>5</td>
                                <td>szt</td>
                            </tr>
                            <tr>
                                <td>85423110</td>
                                <td>FR</td>
                                <td>12 300,00 EUR</td>
                                <td>120</td>
                                <td>kg</td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row className="mb-4">
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Transakcje WDT</h5>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Liczba kontrahentów</td>
                                                <td className="text-end">12</td>
                                            </tr>
                                            <tr>
                                                <td>Łączna wartość</td>
                                                <td className="text-end">68 450,00 EUR</td>
                                            </tr>
                                            <tr>
                                                <td>Najczęstszy kraj</td>
                                                <td className="text-end">Niemcy (45%)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Transakcje WNT</h5>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Liczba dostawców</td>
                                                <td className="text-end">8</td>
                                            </tr>
                                            <tr>
                                                <td>Łączna wartość</td>
                                                <td className="text-end">42 150,00 EUR</td>
                                            </tr>
                                            <tr>
                                                <td>Najczęstszy kraj</td>
                                                <td className="text-end">Włochy (38%)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};