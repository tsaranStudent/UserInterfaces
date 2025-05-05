import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, Alert } from 'react-bootstrap';
import '../App.css';

export const RozniceKursowe = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Różnice kursowe</h2>
                <p className="text-muted">Ewidencja i rozliczanie różnic kursowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="ewidencja" className="mb-4">
                <Tab eventKey="ewidencja" title="Ewidencja">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj różnicę</Button>
                            <Button variant="outline-secondary">Eksportuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup style={{ width: '300px' }}>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-01"
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
                                        <th>Data</th>
                                        <th>Waluta</th>
                                        <th>Kwota</th>
                                        <th>Kurs NBP</th>
                                        <th>Różnica</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.05.2025</td>
                                        <td>EUR</td>
                                        <td>10 000,00</td>
                                        <td>4.6521</td>
                                        <td>+1 250,00 PLN</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                        <td>
                                            <Button variant="outline-info" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18.05.2025</td>
                                        <td>USD</td>
                                        <td>5 000,00</td>
                                        <td>3.9518</td>
                                        <td>-450,00 PLN</td>
                                        <td><Badge bg="warning">Do rozliczenia</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Rozlicz</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="nowa" title="Nowa różnica">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Dodaj nową różnicę kursową</h5>

                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data operacji</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Waluta</Form.Label>
                                        <Form.Select>
                                            <option>EUR</option>
                                            <option>USD</option>
                                            <option>GBP</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kwota</Form.Label>
                                        <Form.Control type="number" step="0.01" placeholder="0,00" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Kurs NBP</Form.Label>
                                        <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Kurs transakcyjny</Form.Label>
                                        <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Alert variant="info">
                                Różnica kursowa: <strong>0,00 PLN</strong>
                            </Alert>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zapisz różnicę
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raporty" title="Raporty">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Rozliczenia miesięczne - Maj 2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Waluta</th>
                                                <th>Liczba operacji</th>
                                                <th>Suma różnic</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EUR</td>
                                                <td>12</td>
                                                <td>+8 250,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>USD</td>
                                                <td>8</td>
                                                <td>-1 950,00 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Kursy średnie NBP</h5>
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
                                                <td>4.6521</td>
                                                <td className="text-success">+0.12%</td>
                                            </tr>
                                            <tr>
                                                <td>USD</td>
                                                <td>3.9518</td>
                                                <td className="text-danger">-0.45%</td>
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