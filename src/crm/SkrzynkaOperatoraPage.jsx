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
import Alert from 'react-bootstrap/Alert';
import '../App.css';

export const SkrzynkaOperatora = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Skrzynka operatora</h3>
                    <p className="text-muted">Komunikaty i zadania systemowe (2025)</p>
                </div>

                <Tabs defaultActiveKey="wiadomosci" className="mb-3">
                    <Tab eventKey="wiadomosci" title="Wiadomości">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie typy</option>
                                        <option>Systemowe</option>
                                        <option>Od użytkowników</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="primary" className="me-2">
                                        <i className="bi bi-envelope-plus"></i> Nowa wiadomość
                                    </Button>
                                </div>
                            </div>

                            <ListGroup>
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h6>Awaria systemu - pilne!</h6>
                                        <p className="mb-1">System ERP będzie niedostępny w dniu 15.04.2025 w godzinach 22:00-02:00</p>
                                        <small className="text-muted">Administrator systemu, 10.03.2025</small>
                                    </div>
                                    <Badge bg="danger">Nowe</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6>Prośba o weryfikację danych</h6>
                                    <p className="mb-1">Anna Nowak prosi o sprawdzenie danych klienta XYZ S.A.</p>
                                    <small className="text-muted">Anna Nowak, 08.03.2025</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Tab>

                    <Tab eventKey="zadania" title="Zadania">
                        <div className="form-section mt-3">
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Zadanie</th>
                                        <th>Priorytet</th>
                                        <th>Termin</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Weryfikacja danych kontrahentów</td>
                                        <td><Badge bg="danger">Wysoki</Badge></td>
                                        <td>20.03.2025</td>
                                        <td><Badge bg="warning">W realizacji</Badge></td>
                                        <td>
                                            <Button variant="outline-success" size="sm">Zakończ</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Aktualizacja dokumentacji</td>
                                        <td><Badge bg="info">Normalny</Badge></td>
                                        <td>30.04.2025</td>
                                        <td><Badge bg="secondary">Nowe</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Rozpocznij</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="powiadomienia" title="Powiadomienia">
                        <div className="form-section mt-3">
                            <Alert variant="info" className="d-flex justify-content-between">
                                <span>Nowa wersja systemu 2.5 dostępna od 01.04.2025</span>
                                <Button variant="outline-info" size="sm">Szczegóły</Button>
                            </Alert>

                            <ListGroup>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span>Zgłoszenie #2456 zostało przypisane do Ciebie</span>
                                    <small className="text-muted">05.03.2025</small>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span>Nowy użytkownik wymaga akceptacji</span>
                                    <small className="text-muted">03.03.2025</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Nieprzeczytane wiadomości:</strong> 3
                    </div>
                    <div className="summary-text">
                        <strong>Nierozwiązane zadania:</strong> 5
                    </div>
                </div>
            </Container>
        </div>
    );
};