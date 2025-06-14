import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, Card, Badge, ListGroup
} from 'react-bootstrap';

export const WiecejFunkcji = () => (
    <div className="background">
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-sliders icon-unified mb-2" />
                <h1 className="page-title">Zaawansowane funkcje</h1>
                <p className="text-muted">Zarządzanie dodatkowymi funkcjonalnościami i raportami systemu</p>
            </div>

            {/* Zakładki */}
            <Tabs defaultActiveKey="raporty" className="mb-4 module-tabs">
                {/* Raporty */}
                <Tab eventKey="raporty" title={<><i className="bi bi-file-bar-graph me-1" />Raporty</>}>
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Label><i className="bi bi-filter-circle me-1" />Typ raportu</Form.Label>
                                    <Form.Select>
                                        <option>Raport sprzedaży</option>
                                        <option>Analiza klientów</option>
                                        <option>Statystyki produktywności</option>
                                    </Form.Select>
                                </Col>
                                <Col md={3}>
                                    <Form.Label><i className="bi bi-calendar-date me-1" />Data od</Form.Label>
                                    <Form.Control type="date" defaultValue="2025-01-01" />
                                </Col>
                                <Col md={3}>
                                    <Form.Label><i className="bi bi-calendar2-check me-1" />Data do</Form.Label>
                                    <Form.Control type="date" defaultValue="2025-05-31" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Table striped bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>Nazwa raportu</th>
                                <th>Data generacji</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Raport sprzedaży Q1 2025</td>
                                <td>2025-04-01</td>
                                <td><Badge bg="success">Gotowy</Badge></td>
                                <td><Button variant="outline-primary" size="sm">Pobierz</Button></td>
                            </tr>
                            <tr>
                                <td>Analiza klientów VIP</td>
                                <td>2025-05-15</td>
                                <td><Badge bg="warning">W trakcie</Badge></td>
                                <td><Button variant="outline-secondary" size="sm" disabled>Oczekuje</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                {/* Harmonogram */}
                <Tab eventKey="harmonogram" title={<><i className="bi bi-calendar3 me-1" />Harmonogram</>}>
                    <Accordion defaultActiveKey="0" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i className="bi bi-funnel me-1" />Filtry harmonogramu</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Zakres dat</Form.Label>
                                            <Form.Select>
                                                <option>Nadchodzące 30 dni</option>
                                                <option>Maj 2025</option>
                                                <option>Niestandardowy</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Typ zdarzenia</Form.Label>
                                            <Form.Select>
                                                <option>Wszystkie</option>
                                                <option>Spotkania</option>
                                                <option>Zadania</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Priorytet</Form.Label>
                                            <Form.Select>
                                                <option>Wszystkie</option>
                                                <option>Wysoki</option>
                                                <option>Średni</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3"><i className="bi bi-clock-history me-1" />Nadchodzące wydarzenia</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="py-2 border-bottom">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <Badge bg="primary" className="me-2">Spotkanie</Badge>
                                            <strong>Prezentacja dla klienta</strong>
                                        </div>
                                        <span>2025-06-05, 10:00</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="py-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <Badge bg="success" className="me-2">Zadanie</Badge>
                                            <strong>Zamknięcie miesiąca</strong>
                                        </div>
                                        <span>2025-05-31, 23:59</span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            {/* Akcje główne */}
            <div className="actions-bar mt-4 d-flex justify-content-between">
                <div>
                    <Button variant="primary" className="me-2">
                        <i className="bi bi-bar-chart-line me-1" />Generuj raport
                    </Button>
                    <Button variant="outline-secondary">
                        <i className="bi bi-box-arrow-down me-1" />Eksportuj dane
                    </Button>
                </div>
                <div>
                    <Button variant="outline-success">
                        <i className="bi bi-save me-1" />Zapisz ustawienia
                    </Button>
                </div>
            </div>
        </Container>
    </div>
);
