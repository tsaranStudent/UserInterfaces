import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

export const AnkietySzablonyOdpowiedzi = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h3 className="page-title mt-3">Szablony odpowiedzi</h3>
                <p className="text-muted">Zarządzanie szablonami odpowiedzi w ankietach (2025)</p>
            </div>

            <Tabs defaultActiveKey="szablony" className="mb-3">
                <Tab eventKey="szablony" title="Lista szablonów">
                    <div className="form-section mt-3">
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary">Nowy szablon</Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup className="search-input">
                                    <Form.Control placeholder="Szukaj szablonów..." />
                                    <Button variant="outline-secondary">Szukaj</Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Table striped bordered hover className="data-table">
                            <thead>
                                <tr>
                                    <th>Nazwa szablonu</th>
                                    <th>Typ odpowiedzi</th>
                                    <th>Liczba opcji</th>
                                    <th>Data utworzenia</th>
                                    <th>Status</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Skala satysfakcji 1-5</td>
                                    <td><Badge bg="info">Skala liczbowa</Badge></td>
                                    <td>5</td>
                                    <td>15.01.2025</td>
                                    <td><Badge bg="success">Aktywny</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                        <Button variant="outline-danger" size="sm">Usuń</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ocena jakości</td>
                                    <td><Badge bg="warning">Lista wyboru</Badge></td>
                                    <td>4</td>
                                    <td>20.02.2025</td>
                                    <td><Badge bg="warning">Wersja robocza</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                        <Button variant="outline-danger" size="sm">Usuń</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                <Tab eventKey="nowy" title="Nowy szablon">
                    <div className="form-section mt-3">
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Nazwa szablonu*</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ odpowiedzi*</Form.Label>
                                        <Form.Select required>
                                            <option>Skala liczbowa</option>
                                            <option>Lista wyboru</option>
                                            <option>Tak/Nie</option>
                                            <option>Ocena słowna</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Opis szablonu</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>

                            <h5 className="mb-3">Opcje odpowiedzi</h5>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Opcja 1</Form.Label>
                                        <Form.Control type="text" defaultValue="Bardzo niezadowolony" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Opcja 2</Form.Label>
                                        <Form.Control type="text" defaultValue="Niezadowolony" />
                                    </Form.Group>
                                    <Button variant="outline-secondary">
                                        Dodaj opcję
                                    </Button>
                                </Card.Body>
                            </Card>

                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Szablon domyślny dla tego typu pytań"
                                />
                            </Form.Group>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zapisz szablon
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <div className="form-section mt-3">
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Użycie szablonów w ankietach</h5>
                                <Table bordered className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Szablon</th>
                                            <th>Liczba użyć</th>
                                            <th>Ostatnie użycie</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Skala satysfakcji 1-5</td>
                                            <td>12</td>
                                            <td>10.03.2025</td>
                                        </tr>
                                        <tr>
                                            <td>Ocena jakości</td>
                                            <td>8</td>
                                            <td>15.02.2025</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                </Tab>
            </Tabs>

            <div className="summary-box mt-4">
                <div className="summary-text">
                    <strong>Liczba aktywnych szablonów:</strong> 7
                </div>
                <div className="summary-text">
                    <strong>Ostatnio dodany szablon:</strong> 20.02.2025
                </div>
            </div>
            </Container>
    );
};