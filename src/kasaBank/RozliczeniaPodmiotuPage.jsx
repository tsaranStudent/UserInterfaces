import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, Accordion } from 'react-bootstrap';
import '../App.css';

export const RozliczeniaPodmiotu = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Rozliczenia między podmiotami</h2>
                <p className="text-muted">Zarządzanie rozliczeniami wewnętrznymi (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista rozliczeń">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowe rozliczenie</Button>
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
                                        <th>Numer rozliczenia</th>
                                        <th>Data</th>
                                        <th>Podmiot źródłowy</th>
                                        <th>Podmiot docelowy</th>
                                        <th>Kwota</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RZ/2025/001</td>
                                        <td>15.05.2025</td>
                                        <td>Dział Sprzedaży</td>
                                        <td>Dział Marketingu</td>
                                        <td>25 000,00 PLN</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                        <td>
                                            <Button variant="outline-info" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>RZ/2025/002</td>
                                        <td>18.05.2025</td>
                                        <td>Centrala</td>
                                        <td>Oddział Warszawa</td>
                                        <td>50 000,00 PLN</td>
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

                <Tab eventKey="nowe" title="Nowe rozliczenie">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Utwórz nowe rozliczenie</h5>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Podmiot źródłowy</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz podmiot...</option>
                                            <option>Dział Sprzedaży</option>
                                            <option>Centrala</option>
                                            <option>Magazyn Główny</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Podmiot docelowy</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz podmiot...</option>
                                            <option>Dział Marketingu</option>
                                            <option>Oddział Warszawa</option>
                                            <option>Dział Logistyki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data rozliczenia</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
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
                            </Row>

                            <Form.Group className="mb-4">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Wprowadź opis rozliczenia..." />
                            </Form.Group>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zapisz rozliczenie
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
                                                <th>Podmiot</th>
                                                <th>Liczba rozliczeń</th>
                                                <th>Suma kwot</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Centrala</td>
                                                <td>12</td>
                                                <td>185 000,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Dział Sprzedaży</td>
                                                <td>8</td>
                                                <td>95 000,00 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Salda podmiotów</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Podmiot</th>
                                                <th>Saldo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Centrala</td>
                                                <td>+250 000,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Oddział Warszawa</td>
                                                <td>-85 000,00 PLN</td>
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