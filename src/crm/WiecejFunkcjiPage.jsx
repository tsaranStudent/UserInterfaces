import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';

export const WiecejFunkcji = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Zaawansowane funkcjonalności</h2>
                <p className="text-muted">Moduł zarządzania dodatkowymi funkcjami systemu (2025)</p>
            </div>

            <Tabs defaultActiveKey="raporty" className="mb-4">
                <Tab eventKey="raporty" title={
                    <span>Raporty</span>
                }>
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ raportu</Form.Label>
                                        <Form.Select>
                                            <option>Raport sprzedaży</option>
                                            <option>Analiza klientów</option>
                                            <option>Statystyki produktywności</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Data od</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-01-01" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Data do</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-31" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <div className="table-responsive">
                        <Table striped bordered hover className="data-table">
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
                    </div>
                </Tab>

                <Tab eventKey="harmonogram" title={
                    <span>Harmonogram</span>
                }>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Filtry harmonogramu
                            </Accordion.Header>
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

                    <div className="mt-4 p-3 bg-white rounded shadow-sm">
                        <h5>Nadchodzące wydarzenia</h5>
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
                    </div>
                </Tab>
            </Tabs>

            <div className="actions-bar mt-4">
                <div className="actions-bar-start">
                    <Button variant="primary" className="me-2">
                        Generuj raport
                    </Button>
                    <Button variant="outline-secondary">
                        Eksportuj dane
                    </Button>
                </div>
                <div className="actions-bar-end">
                    <Button variant="outline-success">
                        Zapisz ustawienia
                    </Button>
                </div>
            </div>
        </Container>
    );
};