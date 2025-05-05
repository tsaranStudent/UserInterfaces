import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, Accordion } from 'react-bootstrap';
import '../App.css';

export const KlienciBiura = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Klienci biura walutowego</h2>
                <p className="text-muted">Zarządzanie klientami wymiany walut (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista klientów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj klienta</Button>
                            <Button variant="outline-secondary">Eksportuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup style={{ width: '300px' }}>
                                <Form.Control
                                    placeholder="Wyszukaj klienta..."
                                />
                                <Button variant="outline-secondary">
                                    Szukaj
                                </Button>
                            </InputGroup>
                        </div>
                    </div>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID Klienta</th>
                                        <th>Nazwa</th>
                                        <th>Typ</th>
                                        <th>Ostatnia transakcja</th>
                                        <th>Liczba transakcji</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>KW/2025/001</td>
                                        <td>Jan Nowak</td>
                                        <td>Osoba fizyczna</td>
                                        <td>15.05.2025</td>
                                        <td>12</td>
                                        <td><Badge bg="success">Aktywny</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Historia</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>KW/2025/002</td>
                                        <td>ABC Sp. z o.o.</td>
                                        <td>Firma</td>
                                        <td>10.05.2025</td>
                                        <td>5</td>
                                        <td><Badge bg="warning">Weryfikacja</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Historia</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="dodaj" title="Nowy klient">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Rejestracja nowego klienta</h5>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ klienta</Form.Label>
                                        <Form.Select>
                                            <option>Osoba fizyczna</option>
                                            <option>Firma</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data rejestracji</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Imię i nazwisko / Nazwa firmy</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź nazwę" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Numer dokumentu</Form.Label>
                                        <Form.Control type="text" placeholder="PESEL/NIP" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Accordion className="mb-4">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Dane kontaktowe</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="email@domena.pl" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Telefon</Form.Label>
                                                    <Form.Control type="tel" placeholder="+48 123 456 789" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zarejestruj klienta
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Aktywność klientów - 2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Miesiąc</th>
                                                <th>Nowi klienci</th>
                                                <th>Transakcje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Maj 2025</td>
                                                <td>24</td>
                                                <td>156</td>
                                            </tr>
                                            <tr>
                                                <td>Kwiecień 2025</td>
                                                <td>18</td>
                                                <td>132</td>
                                            </tr>
                                            <tr>
                                                <td>Marzec 2025</td>
                                                <td>15</td>
                                                <td>98</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Podział klientów</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Typ klienta</th>
                                                <th>Liczba</th>
                                                <th>% udziału</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Osoby fizyczne</td>
                                                <td>85</td>
                                                <td>68%</td>
                                            </tr>
                                            <tr>
                                                <td>Firmy</td>
                                                <td>40</td>
                                                <td>32%</td>
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