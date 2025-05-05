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
import '../App.css';

export const SkrzynkaPocztowa = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Skrzynka pocztowa</h3>
                    <p className="text-muted">System zarządzania wiadomościami (2025)</p>
                </div>

                <Tabs defaultActiveKey="odebrane" className="mb-3">
                    <Tab eventKey="odebrane" title="Odebrane">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-arrow-clockwise"></i> Odśwież
                                    </Button>
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie</option>
                                        <option>Nieprzeczytane</option>
                                        <option>Oznaczone</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj wiadomości..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <ListGroup>
                                <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <div className="fw-bold">Potwierdzenie zamówienia #2456</div>
                                        <small className="text-muted">Dział sprzedaży - 10.03.2025 14:30</small>
                                    </div>
                                    <Badge bg="primary" pill>Nowe</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="fw-bold">Zmiana terminów dostawy</div>
                                    <small className="text-muted">Dział logistyki - 08.03.2025 09:15</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Tab>

                    <Tab eventKey="wyslane" title="Wysłane">
                        <div className="form-section mt-3">
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Adresat</th>
                                        <th>Temat</th>
                                        <th>Data wysłania</th>
                                        <th>Status</th>
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

                    <Tab eventKey="nowa" title="Nowa wiadomość">
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group controlId="formRecipient">
                                                    <Form.Label>Adresat</Form.Label>
                                                    <Form.Control type="email" placeholder="Wprowadź adres e-mail" />
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
                                            <Form.Label>Załączniki</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>

                                        <div className="d-flex justify-content-end">
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
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Nieprzeczytane:</strong> 5 wiadomości
                    </div>
                    <div className="summary-text">
                        <strong>Wersja systemu:</strong> 2.5.0
                    </div>
                </div>
            </Container>
        </div>
    );
};