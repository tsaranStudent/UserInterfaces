import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
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

export const ArchiwumWydrukow = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Archiwum wydruków</h3>
                    <p className="text-muted">Historia i zarządzanie wydrukami dokumentów (2025)</p>
                </div>

                <Tabs defaultActiveKey="wydruki" className="mb-3">
                    <Tab eventKey="wydruki" title="Historia wydruków">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Control
                                        type="date"
                                        className="me-2"
                                        style={{ maxWidth: '200px' }}
                                        max="2025-12-31"
                                    />
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie typy</option>
                                        <option>Faktury</option>
                                        <option>Zamówienia</option>
                                        <option>Raporty</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj wydruków..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data wydruku</th>
                                        <th>Typ dokumentu</th>
                                        <th>Nazwa pliku</th>
                                        <th>Użytkownik</th>
                                        <th>Rozmiar</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.01.2025 14:30</td>
                                        <td><Badge bg="primary">Faktura VAT</Badge></td>
                                        <td>FV_2025_001.pdf</td>
                                        <td>jan.kowalski</td>
                                        <td>245 KB</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Pobierz</Button>
                                            <Button variant="outline-danger" size="sm">Usuń</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>20.02.2025 09:15</td>
                                        <td><Badge bg="success">Zamówienie</Badge></td>
                                        <td>ZO_2025_015.pdf</td>
                                        <td>anna.nowak</td>
                                        <td>180 KB</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Pobierz</Button>
                                            <Button variant="outline-danger" size="sm">Usuń</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="statystyki" title="Statystyki">
                        <div className="form-section mt-3">
                            <Row>
                                <Col md={6}>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <h5 className="mb-3">Podsumowanie wydruków</h5>
                                            <Table bordered className="data-table">
                                                <tbody>
                                                    <tr>
                                                        <td>Łączna liczba wydruków</td>
                                                        <td>124</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W tym miesiącu</td>
                                                        <td>24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Najczęstszy typ</td>
                                                        <td>Faktury (68%)</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card>
                                        <Card.Body>
                                            <h5 className="mb-3">Ostatnie wydruki</h5>
                                            <div className="mb-2">
                                                <div className="d-flex justify-content-between">
                                                    <span>FV_2025_024.pdf</span>
                                                    <small className="text-muted">10.03.2025</small>
                                                </div>
                                                <div className="progress" style={{ height: '5px' }}>
                                                    <div className="progress-bar" style={{ width: '90%' }}></div>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="d-flex justify-content-between">
                                                    <span>Raport_miesieczny.pdf</span>
                                                    <small className="text-muted">05.03.2025</small>
                                                </div>
                                                <div className="progress" style={{ height: '5px' }}>
                                                    <div className="progress-bar" style={{ width: '75%' }}></div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="ustawienia" title="Ustawienia">
                        <div className="form-section mt-3">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Czas przechowywania wydruków</Form.Label>
                                    <Form.Select>
                                        <option>1 miesiąc</option>
                                        <option>3 miesiące</option>
                                        <option selected>6 miesięcy</option>
                                        <option>1 rok</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Automatyczne czyszczenie archiwum"
                                        defaultChecked
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Maksymalny rozmiar archiwum</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="number" defaultValue="500" />
                                        <InputGroup.Text>MB</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz ustawienia
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Zajęte miejsce:</strong> 124 MB z 500 MB
                    </div>
                    <div className="summary-text">
                        <strong>Ostatni wydruk:</strong> 10.03.2025
                    </div>
                </div>
            </Container>
        </div>
    );
};