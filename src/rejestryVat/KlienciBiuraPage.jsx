import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const KlienciBiura = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Klienci biura rachunkowego</h2>
                <p className="text-muted">Zarządzanie klientami i ich dokumentami podatkowymi (2025)</p>
            </div>

            <Tabs defaultActiveKey="klienci" className="mb-4">
                <Tab eventKey="klienci" title="Lista klientów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj klienta</Button>
                            <Button variant="outline-secondary">Importuj z CRM</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszyscy klienci</option>
                                <option>Aktywni</option>
                                <option>Zawieszeni</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj klientów..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Nazwa</th>
                                <th>NIP</th>
                                <th>Forma prawna</th>
                                <th>Data rozpoczęcia współpracy</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ABC Sp. z o.o.</td>
                                <td>1234567890</td>
                                <td>Spółka z o.o.</td>
                                <td>15.03.2023</td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">Profil</Button>
                                    <Button variant="outline-info" size="sm">Dokumenty</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>XYZ Usługi</td>
                                <td>0987654321</td>
                                <td>Jednoosobowa działalność</td>
                                <td>01.01.2025</td>
                                <td><Badge bg="warning">Nowy</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">Profil</Button>
                                    <Button variant="outline-info" size="sm">Dokumenty</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="dokumenty" title="Dokumenty klientów">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Wybierz klienta</Form.Label>
                                        <Form.Select>
                                            <option>ABC Sp. z o.o. (NIP: 1234567890)</option>
                                            <option>XYZ Usługi (NIP: 0987654321)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ dokumentu</Form.Label>
                                        <Form.Select>
                                            <option>Wszystkie dokumenty</option>
                                            <option>Deklaracje VAT</option>
                                            <option>PIT</option>
                                            <option>Rachunki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Table bordered hover className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Typ dokumentu</th>
                                        <th>Numer</th>
                                        <th>Okres</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.05.2025</td>
                                        <td>VAT-7</td>
                                        <td>VAT7/05/2025</td>
                                        <td>Maj 2025</td>
                                        <td><Badge bg="success">Złożono</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Pobierz</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>30.04.2025</td>
                                        <td>JPK_V7</td>
                                        <td>JPK_2025_04</td>
                                        <td>Kwiecień 2025</td>
                                        <td><Badge bg="info">Przesłano</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Pobierz</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="nowy" title="Nowy klient">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Nazwa firmy*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>NIP*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Forma prawna*</Form.Label>
                                            <Form.Select required>
                                                <option>Jednoosobowa działalność</option>
                                                <option>Spółka z o.o.</option>
                                                <option>Spółka akcyjna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data rozpoczęcia współpracy*</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-01"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Uwagi</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz klienta
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Łączna liczba klientów</h5>
                                    <h2 className="text-center">124</h2>
                                    <div className="text-center text-success">+5 w tym miesiącu</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Aktywni klienci</h5>
                                    <h2 className="text-center">118</h2>
                                    <div className="text-center text-success">96% aktywnych</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Średni czas współpracy</h5>
                                    <h2 className="text-center">3,2 roku</h2>
                                    <div className="text-center text-muted">Najdłużej: 8 lat</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};