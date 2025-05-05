import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const PreliminarzPlatnosci = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Preliminarz płatności</h2>
                <p className="text-muted">Planowanie i zarządzanie nadchodzącymi płatnościami (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista płatności">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj płatność</Button>
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
                                        <th>Termin płatności</th>
                                        <th>Dokument</th>
                                        <th>Kontrahent</th>
                                        <th>Kwota</th>
                                        <th>Waluta</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>20.05.2025</td>
                                        <td>FV/2025/123</td>
                                        <td>ABC Sp. z o.o.</td>
                                        <td>12 450,00</td>
                                        <td>PLN</td>
                                        <td><Badge bg="warning">Oczekuje</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Zrealizuj</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>25.05.2025</td>
                                        <td>FV/2025/456</td>
                                        <td>XYZ S.A.</td>
                                        <td>8 900,00</td>
                                        <td>EUR</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                        <td>
                                            <Button variant="outline-info" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="nowa" title="Nowa płatność">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Dodaj nową płatność</h5>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ dokumentu</Form.Label>
                                        <Form.Select>
                                            <option>Faktura</option>
                                            <option>Rachunek</option>
                                            <option>Inne</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Termin płatności</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Numer dokumentu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Kontrahent</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź nazwę" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kwota</Form.Label>
                                        <Form.Control type="number" step="0.01" placeholder="0,00" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Waluta</Form.Label>
                                        <Form.Select>
                                            <option>PLN</option>
                                            <option>EUR</option>
                                            <option>USD</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Sposób płatności</Form.Label>
                                        <Form.Select>
                                            <option>Przelew</option>
                                            <option>Gotówka</option>
                                            <option>Karta</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zapisz płatność
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="podsumowanie" title="Podsumowanie">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Płatności wg statusu - Maj 2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Liczba</th>
                                                <th>Kwota</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Oczekujące</td>
                                                <td>15</td>
                                                <td>85 200,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Zrealizowane</td>
                                                <td>24</td>
                                                <td>142 750,00 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Płatności wg waluty</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Waluta</th>
                                                <th>Liczba</th>
                                                <th>Kwota</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PLN</td>
                                                <td>32</td>
                                                <td>195 450,00</td>
                                            </tr>
                                            <tr>
                                                <td>EUR</td>
                                                <td>7</td>
                                                <td>32 500,00</td>
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