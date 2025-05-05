import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup, ListGroup } from 'react-bootstrap';
import '../App.css';

export const WiadomosciOdKlientow = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Wiadomości od klientów</h2>
                <p className="text-muted">Komunikacja z klientami w sprawach rozliczeniowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="skrzynka" className="mb-4">
                <Tab eventKey="skrzynka" title="Skrzynka odbiorcza">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa wiadomość</Button>
                            <Button variant="outline-secondary">Oznacz jako przeczytane</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszystkie typy</option>
                                <option>Pytania o faktury</option>
                                <option>Prośby o korekty</option>
                                <option>Inne</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj wiadomości..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <ListGroup variant="flush">
                        <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Faktura nr FV/2025/123</div>
                                <span className="text-muted">Jan Kowalski (NIP: 1234567890)</span>
                                <p className="mb-0 mt-1">Proszę o przesłanie korekty faktury...</p>
                            </div>
                            <div className="text-end">
                                <Badge bg="danger" className="mb-1">Nowa</Badge>
                                <div className="text-muted small">15.05.2025</div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Pytanie o płatność</div>
                                <span className="text-muted">ABC Sp. z o.o. (NIP: 9876543210)</span>
                                <p className="mb-0 mt-1">Czy płatność za fakturę FV/2025/120 została zaksięgowana?...</p>
                            </div>
                            <div className="text-end">
                                <Badge bg="success" className="mb-1">Odczytana</Badge>
                                <div className="text-muted small">12.05.2025</div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Tab>

                <Tab eventKey="nowa" title="Nowa wiadomość">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Klient*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz klienta...</option>
                                                <option>Jan Kowalski (NIP: 1234567890)</option>
                                                <option>ABC Sp. z o.o. (NIP: 9876543210)</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data wiadomości</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-20"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Temat*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Temat wiadomości..."
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Treść wiadomości*</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Załączniki</Form.Label>
                                    <Form.Control
                                        type="file"
                                    />
                                </Form.Group>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Wyślij wiadomość
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="wyslane" title="Wysłane">
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
                                defaultValue="2025-05-20"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                            <Button variant="primary">Filtruj</Button>
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Odbiorca</th>
                                <th>Temat</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18.05.2025</td>
                                <td>ABC Sp. z o.o.</td>
                                <td>Potwierdzenie płatności</td>
                                <td><Badge bg="success">Przeczytana</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Podgląd</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>10.05.2025</td>
                                <td>Jan Kowalski</td>
                                <td>Korekta faktury</td>
                                <td><Badge bg="warning">Nieprzeczytana</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Podgląd</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="szablony" title="Szablony">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Nowy szablon</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <Form.Control
                                        placeholder="Szukaj szablonów..."
                                        className="search-input"
                                    />
                                </div>
                            </div>

                            <ListGroup>
                                <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Potwierdzenie płatności</div>
                                        <p className="mb-0 mt-1 small text-muted">Standardowa wiadomość potwierdzająca otrzymanie płatności...</p>
                                    </div>
                                    <Button variant="outline-secondary" size="sm">Użyj</Button>
                                </ListGroup.Item>
                                <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Prośba o dokumenty</div>
                                        <p className="mb-0 mt-1 small text-muted">Prośba o przesłanie brakujących dokumentów...</p>
                                    </div>
                                    <Button variant="outline-secondary" size="sm">Użyj</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};