import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, Alert } from 'react-bootstrap';
import '../App.css';

export const ZapisyKasowoBankowe = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Zapisy kasowo-bankowe</h2>
                <p className="text-muted">Ewidencja operacji finansowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="operacje" className="mb-4">
                <Tab eventKey="operacje" title="Operacje">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa operacja</Button>
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
                                        <th>Numer dokumentu</th>
                                        <th>Typ</th>
                                        <th>Kwota</th>
                                        <th>Konto</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.05.2025</td>
                                        <td>KP/2025/123</td>
                                        <td>Wypłata gotówki</td>
                                        <td>5 000,00 PLN</td>
                                        <td>Kasa główna</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                        <td>
                                            <Button variant="outline-info" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18.05.2025</td>
                                        <td>PL/2025/456</td>
                                        <td>Przelew wychodzący</td>
                                        <td>12 450,00 PLN</td>
                                        <td>Konto bieżące</td>
                                        <td><Badge bg="warning">W trakcie</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="nowa" title="Nowa operacja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Dodaj nową operację</h5>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ operacji</Form.Label>
                                        <Form.Select>
                                            <option>Wpływ gotówki</option>
                                            <option>Wypłata gotówki</option>
                                            <option>Przelew przychodzący</option>
                                            <option>Przelew wychodzący</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data operacji</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Kwota</Form.Label>
                                        <Form.Control type="number" step="0.01" placeholder="0,00" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Konto</Form.Label>
                                        <Form.Select>
                                            <option>Kasa główna</option>
                                            <option>Konto bieżące</option>
                                            <option>Konto walutowe</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-4">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Wprowadź opis operacji..." />
                            </Form.Group>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zapisz operację
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="salda" title="Salda">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3">Stan kont na 31.05.2025</h5>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Konto</th>
                                        <th>Saldo</th>
                                        <th>Waluta</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Kasa główna</td>
                                        <td>25 450,00</td>
                                        <td>PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Konto bieżące</td>
                                        <td>185 200,00</td>
                                        <td>PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Konto walutowe</td>
                                        <td>32 150,00</td>
                                        <td>EUR</td>
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