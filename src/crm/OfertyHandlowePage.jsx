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
import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';

export const OfertyHandlowe = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Oferty handlowe</h3>
                    <p className="text-muted">Zarządzanie ofertami handlowymi (2025)</p>
                </div>

                <Tabs defaultActiveKey="aktywne" className="mb-3">
                    <Tab eventKey="aktywne" title="Aktywne">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszyscy klienci</option>
                                        <option>Firma A</option>
                                        <option>Firma B</option>
                                    </Form.Select>
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie statusy</option>
                                        <option>W przygotowaniu</option>
                                        <option>Wysłana</option>
                                        <option>Zaakceptowana</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="primary" className="me-2">
                                        <i className="bi bi-plus-circle"></i> Nowa oferta
                                    </Button>
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj ofert..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Numer oferty</th>
                                        <th>Klient</th>
                                        <th>Data wystawienia</th>
                                        <th>Termin ważności</th>
                                        <th>Wartość</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>OF/2025/03/001</td>
                                        <td>ABC Sp. z o.o.</td>
                                        <td>01.03.2025</td>
                                        <td>31.03.2025</td>
                                        <td>12 450,00 zł</td>
                                        <td><Badge bg="warning">Wysłana</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Podgląd</Button>
                                            <Button variant="outline-success" size="sm">Akceptuj</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>OF/2025/02/045</td>
                                        <td>XYZ S.A.</td>
                                        <td>15.02.2025</td>
                                        <td>15.03.2025</td>
                                        <td>28 700,00 zł</td>
                                        <td><Badge bg="success">Zaakceptowana</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Podgląd</Button>
                                            <Button variant="outline-info" size="sm">Zamówienie</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="nowa" title="Nowa oferta">
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group controlId="client">
                                                    <Form.Label>Klient</Form.Label>
                                                    <Form.Select>
                                                        <option>Wybierz klienta</option>
                                                        <option>ABC Sp. z o.o.</option>
                                                        <option>XYZ S.A.</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group controlId="offerDate">
                                                    <Form.Label>Data wystawienia</Form.Label>
                                                    <Form.Control type="date" defaultValue="2025-03-10" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group controlId="validDate">
                                                    <Form.Label>Termin ważności</Form.Label>
                                                    <Form.Control type="date" min="2025-03-11" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <Form.Group controlId="offerDescription">
                                                    <Form.Label>Opis oferty</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <h5 className="mb-3">Pozycje oferty</h5>
                                        <Table bordered className="mb-3">
                                            <thead>
                                                <tr>
                                                    <th>Lp.</th>
                                                    <th>Produkt/usługa</th>
                                                    <th>Ilość</th>
                                                    <th>Cena</th>
                                                    <th>Wartość</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Usługa serwisowa</td>
                                                    <td>5</td>
                                                    <td>1 200,00 zł</td>
                                                    <td>6 000,00 zł</td>
                                                    <td><Button variant="outline-danger" size="sm">Usuń</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <Button variant="outline-primary">
                                                <i className="bi bi-plus-circle"></i> Dodaj pozycję
                                            </Button>
                                            <div className="text-end">
                                                <h5>Suma: <strong>6 000,00 zł</strong></h5>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <Button variant="outline-secondary" className="me-2">
                                                Anuluj
                                            </Button>
                                            <Button variant="primary" className="me-2">
                                                Zapisz wersję roboczą
                                            </Button>
                                            <Button variant="success">
                                                Wyślij ofertę
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>

                    <Tab eventKey="statystyki" title="Statystyki">
                        <div className="form-section mt-3">
                            <Row>
                                <Col md={6}>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <h5 className="mb-3">Skuteczność ofert</h5>
                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span>Zaakceptowane</span>
                                                    <span>32%</span>
                                                </div>
                                                <ProgressBar variant="success" now={32} />
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span>Odrzucone</span>
                                                    <span>18%</span>
                                                </div>
                                                <ProgressBar variant="danger" now={18} />
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span>W toku</span>
                                                    <span>50%</span>
                                                </div>
                                                <ProgressBar variant="warning" now={50} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card>
                                        <Card.Body>
                                            <h5 className="mb-3">Najlepsze oferty</h5>
                                            <Table bordered>
                                                <thead>
                                                    <tr>
                                                        <th>Numer</th>
                                                        <th>Klient</th>
                                                        <th>Wartość</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>OF/2025/01/120</td>
                                                        <td>Firma Tech</td>
                                                        <td>45 200,00 zł</td>
                                                    </tr>
                                                    <tr>
                                                        <td>OF/2025/02/045</td>
                                                        <td>XYZ S.A.</td>
                                                        <td>28 700,00 zł</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Aktywnych ofert:</strong> 24
                    </div>
                    <div className="summary-text">
                        <strong>Wartość w toku:</strong> 156 800,00 zł
                    </div>
                </div>
            </Container>
        </div>
    );
};