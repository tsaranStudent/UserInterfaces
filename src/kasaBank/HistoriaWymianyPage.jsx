import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const HistoriaWymiany = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Historia wymiany walut</h2>
                <p className="text-muted">Archiwum operacji wymiany walutowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista operacji">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Form.Select style={{ width: '200px' }}>
                                <option>Wszystkie waluty</option>
                                <option>EUR</option>
                                <option>USD</option>
                                <option>GBP</option>
                            </Form.Select>
                            <Button variant="outline-secondary">Eksportuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup style={{ width: '300px' }}>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-01-01"
                                />
                                <InputGroup.Text>-</InputGroup.Text>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-31"
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Numer operacji</th>
                                        <th>Data</th>
                                        <th>Waluta źródłowa</th>
                                        <th>Waluta docelowa</th>
                                        <th>Kurs</th>
                                        <th>Kwota</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>WE/2025/001</td>
                                        <td>12.05.2025</td>
                                        <td>10 000 PLN</td>
                                        <td>2 150,00 EUR</td>
                                        <td>4,6512</td>
                                        <td>10 000,00 PLN</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>WE/2025/002</td>
                                        <td>18.05.2025</td>
                                        <td>5 000 USD</td>
                                        <td>19 750,00 PLN</td>
                                        <td>3,9500</td>
                                        <td>5 000,00 USD</td>
                                        <td><Badge bg="warning">Oczekuje</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="nowa" title="Nowa wymiana">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Nowa operacja wymiany walut</h5>

                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data operacji</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Waluta źródłowa</Form.Label>
                                        <Form.Select>
                                            <option>PLN</option>
                                            <option>EUR</option>
                                            <option>USD</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kwota</Form.Label>
                                        <Form.Control type="number" placeholder="0,00" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Waluta docelowa</Form.Label>
                                        <Form.Select>
                                            <option>EUR</option>
                                            <option>USD</option>
                                            <option>GBP</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kurs wymiany</Form.Label>
                                        <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kwota po wymianie</Form.Label>
                                        <Form.Control type="text" readOnly placeholder="0,00" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zatwierdź wymianę
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raport" title="Raport kursów">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Średnie kursy walut - Maj 2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Waluta</th>
                                                <th>Kurs średni</th>
                                                <th>Zmiana</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EUR</td>
                                                <td>4,6521</td>
                                                <td className="text-success">+0,12%</td>
                                            </tr>
                                            <tr>
                                                <td>USD</td>
                                                <td>3,9518</td>
                                                <td className="text-danger">-0,45%</td>
                                            </tr>
                                            <tr>
                                                <td>GBP</td>
                                                <td>5,4123</td>
                                                <td className="text-success">+0,08%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Statystyki wymian</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Para walutowa</th>
                                                <th>Liczba operacji</th>
                                                <th>Łączna kwota</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PLN → EUR</td>
                                                <td>24</td>
                                                <td>120 450,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>USD → PLN</td>
                                                <td>15</td>
                                                <td>59 250,00 USD</td>
                                            </tr>
                                            <tr>
                                                <td>EUR → USD</td>
                                                <td>8</td>
                                                <td>32 150,00 EUR</td>
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