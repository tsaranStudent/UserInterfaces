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
import '../App.css';

export const FakturyCykliczne = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Faktury cykliczne</h3>
                    <p className="text-muted">Zarządzanie cyklicznymi fakturami w systemie (2025)</p>
                </div>

                <Tabs defaultActiveKey="aktywne" className="mb-3">
                    <Tab eventKey="aktywne" title="Aktywne">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie kontrahentów</option>
                                        <option>Firma A</option>
                                        <option>Firma B</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="primary" className="me-2">
                                        <i className="bi bi-plus-circle"></i> Nowa faktura cykliczna
                                    </Button>
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj faktur..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Kontrahent</th>
                                        <th>Okres</th>
                                        <th>Wartość netto</th>
                                        <th>Następna faktura</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FV/2025/CYC/001</td>
                                        <td>Firma ABC Sp. z o.o.</td>
                                        <td>Miesięczny</td>
                                        <td>1 250,00 zł</td>
                                        <td>15.04.2025</td>
                                        <td><Badge bg="success">Aktywna</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                            <Button variant="outline-danger" size="sm">Zatrzymaj</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FV/2025/CYC/002</td>
                                        <td>XYZ S.A.</td>
                                        <td>Kwartalny</td>
                                        <td>4 500,00 zł</td>
                                        <td>30.06.2025</td>
                                        <td><Badge bg="success">Aktywna</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                            <Button variant="outline-danger" size="sm">Zatrzymaj</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="zarchiwizowane" title="Zarchiwizowane">
                        <div className="form-section mt-3">
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Kontrahent</th>
                                        <th>Okres</th>
                                        <th>Wartość netto</th>
                                        <th>Data zakończenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FV/2024/CYC/045</td>
                                        <td>Testowa Sp. z o.o.</td>
                                        <td>Miesięczny</td>
                                        <td>800,00 zł</td>
                                        <td>31.12.2024</td>
                                        <td>
                                            <Button variant="outline-secondary" size="sm">Przywróć</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="nowa" title="Nowa faktura">
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group controlId="contractor">
                                                    <Form.Label>Kontrahent</Form.Label>
                                                    <Form.Select>
                                                        <option>Wybierz kontrahenta</option>
                                                        <option>Firma A</option>
                                                        <option>Firma B</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="period">
                                                    <Form.Label>Okres rozliczeniowy</Form.Label>
                                                    <Form.Select>
                                                        <option>Miesięczny</option>
                                                        <option>Kwartalny</option>
                                                        <option>Roczny</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={4}>
                                                <Form.Group controlId="startDate">
                                                    <Form.Label>Data początkowa</Form.Label>
                                                    <Form.Control type="date" min="2025-01-01" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group controlId="nextDate">
                                                    <Form.Label>Następna faktura</Form.Label>
                                                    <Form.Control type="date" min="2025-01-01" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group controlId="endDate">
                                                    <Form.Label>Data końcowa (opcjonalnie)</Form.Label>
                                                    <Form.Control type="date" min="2025-01-01" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Opis (widoczny na fakturze)</Form.Label>
                                            <Form.Control as="textarea" rows={2} />
                                        </Form.Group>

                                        <div className="d-flex justify-content-end">
                                            <Button variant="outline-secondary" className="me-2">
                                                Anuluj
                                            </Button>
                                            <Button variant="primary">
                                                Zapisz fakturę cykliczną
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
                        <strong>Aktywnych faktur:</strong> 12
                    </div>
                    <div className="summary-text">
                        <strong>Wartość miesięczna:</strong> 24 500,00 zł
                    </div>
                </div>
            </Container>
        </div>
    );
};