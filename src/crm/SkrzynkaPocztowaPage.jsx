import React from 'react';
import {
    Container, Tabs, Tab, Table, Form, Row, Col,
    Button, Badge, Card, ListGroup, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const SkrzynkaPocztowa = () => (
    <Container className="lang-pl mt-2 mb-2">
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-envelope-paper-fill icon-unified mb-2" />
                    <h1 className="page-title">Skrzynka pocztowa</h1>
                    <p className="text-muted">System zarządzania wiadomościami – rok 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="odebrane" className="mb-3">
                    <Tab eventKey="odebrane" title={<><i className="bi bi-inbox me-1" />Odebrane</>}>
                        <div className="form-section">
                            <div className="actions-bar">
                                <div className="actions-bar-start">
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-arrow-clockwise me-1" />Odśwież
                                    </Button>
                                    <Form.Select style={{ maxWidth: '180px' }}>
                                        <option>Wszystkie</option>
                                        <option>Nieprzeczytane</option>
                                        <option>Oznaczone</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj wiadomości..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search" />
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <ListGroup>
                                <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <div className="fw-bold">Potwierdzenie zamówienia #2456</div>
                                        <small className="text-muted">Dział sprzedaży – 10.03.2025 14:30</small>
                                    </div>
                                    <Badge bg="primary" pill>Nowe</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="fw-bold">Zmiana terminów dostawy</div>
                                    <small className="text-muted">Dział logistyki – 08.03.2025 09:15</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Tab>

                    <Tab eventKey="wyslane" title={<><i className="bi bi-send-fill me-1" />Wysłane</>}>
                        <div className="form-section">
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th><i className="bi bi-person-fill" /> Adresat</th>
                                        <th><i className="bi bi-chat-text" /> Temat</th>
                                        <th><i className="bi bi-calendar" /> Data</th>
                                        <th><i className="bi bi-check2-circle" /> Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>jan.kowalski@firma.pl</td>
                                        <td>Zapytanie ofertowe</td>
                                        <td>05.03.2025 11:20</td>
                                        <td><Badge bg="success">Dostarczono</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>anna.nowak@kontrahent.pl</td>
                                        <td>Potwierdzenie płatności</td>
                                        <td>03.03.2025 16:45</td>
                                        <td><Badge bg="warning">Wysłano</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="nowa" title={<><i className="bi bi-pencil-square me-1" />Nowa wiadomość</>}>
                        <div className="form-section">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group controlId="formRecipient">
                                                    <Form.Label>Adresat</Form.Label>
                                                    <Form.Control type="email" placeholder="np. jan@firma.pl" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formSubject">
                                                    <Form.Label>Temat</Form.Label>
                                                    <Form.Control type="text" placeholder="Temat wiadomości" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Treść wiadomości</Form.Label>
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Załącznik</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>

                                        <div className="d-flex justify-content-end">
                                            <Button variant="outline-secondary" className="me-2">
                                                <i className="bi bi-x-lg me-1" />Anuluj
                                            </Button>
                                            <Button variant="primary">
                                                <i className="bi bi-send-fill me-1" />Wyślij wiadomość
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>
                </Tabs>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <i className="bi bi-envelope-open me-1" /><strong>Nieprzeczytane:</strong> 5 wiadomości
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-info-circle me-1" /><strong>Wersja systemu:</strong> 2.5.0
                    </div>
                </div>
            </Container>
        </div>
    </Container>
);
