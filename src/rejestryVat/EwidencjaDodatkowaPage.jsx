import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, Accordion } from 'react-bootstrap';
import '../App.css';

export const EwidencjaDodatkowa = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Ewidencja dodatkowa VAT</h2>
                <p className="text-muted">Specjalne rejestry i zestawienia podatkowe (2025)</p>
            </div>

            <Tabs defaultActiveKey="rejestry" className="mb-4">
                <Tab eventKey="rejestry" title="Rejestry specjalne">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy wpis</Button>
                            <Button variant="outline-secondary">Generuj raport</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszystkie rejestry</option>
                                <option>Środki trwałe</option>
                                <option>Usługi międzynarodowe</option>
                                <option>Samochody służbowe</option>
                            </Form.Select>
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-01"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Typ rejestru</th>
                                <th>Numer dokumentu</th>
                                <th>Kwota netto</th>
                                <th>VAT</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>Środki trwałe</td>
                                <td>ST/2025/012</td>
                                <td>12 500,00 PLN</td>
                                <td>2 875,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowano</Badge></td>
                            </tr>
                            <tr>
                                <td>10.05.2025</td>
                                <td>Usługi międzynarodowe</td>
                                <td>UM/2025/008</td>
                                <td>8 200,00 PLN</td>
                                <td>0,00 PLN</td>
                                <td><Badge bg="warning">Do weryfikacji</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="zestawienia" title="Zestawienia okresowe">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Okres rozliczeniowy*</Form.Label>
                                        <Form.Select required>
                                            <option>Maj 2025</option>
                                            <option>Kwiecień 2025</option>
                                            <option>Marzec 2025</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ zestawienia*</Form.Label>
                                        <Form.Select required>
                                            <option>Wybór opodatkowania</option>
                                            <option>Podzielona płatność</option>
                                            <option>WDT/WNT</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Accordion defaultActiveKey="0" className="mb-4">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Szczegóły zestawienia</Accordion.Header>
                                    <Accordion.Body>
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th>Kategoria</th>
                                                    <th>Liczba transakcji</th>
                                                    <th>Wartość netto</th>
                                                    <th>VAT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Wewnątrzwspólnotowe nabycie towarów</td>
                                                    <td>5</td>
                                                    <td>24 500,00 PLN</td>
                                                    <td>5 635,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>Wewnątrzwspólnotowa dostawa towarów</td>
                                                    <td>3</td>
                                                    <td>18 200,00 PLN</td>
                                                    <td>0,00 PLN</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Łączna wartość transakcji:</strong> 42 700,00 PLN
                                </div>
                                <Button variant="primary" className="mt-2">
                                    Eksportuj do JPK
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="korekty" title="Korekty VAT">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj korektę</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                placeholder="Szukaj korekt..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data korekty</th>
                                <th>Dokument źródłowy</th>
                                <th>Kwota korekty</th>
                                <th>VAT</th>
                                <th>Typ korekty</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18.05.2025</td>
                                <td>FV/2025/123</td>
                                <td>-1 200,00 PLN</td>
                                <td>-276,00 PLN</td>
                                <td>Faktura korygująca</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>12.05.2025</td>
                                <td>ST/2025/005</td>
                                <td>850,00 PLN</td>
                                <td>195,50 PLN</td>
                                <td>Korekta środka trwałego</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="analiza" title="Analiza rozliczeń">
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Transakcje specjalne</h6>
                                    <h3>24</h3>
                                    <div className="text-muted">w bieżącym miesiącu</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Łączna wartość korekt</h6>
                                    <h3>-2 450,00 PLN</h3>
                                    <div className="text-muted">w ostatnim kwartale</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h6>Średni czas rozliczenia</h6>
                                    <h3>3,5 dnia</h3>
                                    <div className="text-muted">dla transakcji specjalnych</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="card-title mb-3">Statystyki miesięczne</h5>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Miesiąc</th>
                                        <th>Transakcje specjalne</th>
                                        <th>Korekty VAT</th>
                                        <th>Wartość netto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Maj 2025</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>15 200,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Kwiecień 2025</td>
                                        <td>12</td>
                                        <td>4</td>
                                        <td>24 500,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};