import React from 'react';
import { Container, Table, Accordion, Form, Row, Col, Badge, Button, Card, Tabs, Tab } from 'react-bootstrap';
import '../App.css';

export const DokumentyKompensat = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Dokumenty kompensat</h2>
                <p className="text-muted">Zarządzanie dokumentami kompensat finansowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista dokumentów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa kompensata</Button>
                            <Button variant="outline-secondary">Importuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="text"
                                placeholder="Szukaj dokumentów..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Numer dokumentu</th>
                                <th>Data</th>
                                <th>Kontrahent</th>
                                <th>Kwota</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>KMP/2025/012</td>
                                <td>15.05.2025</td>
                                <td>ABC Sp. z o.o.</td>
                                <td>12 450,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowana</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>KMP/2025/018</td>
                                <td>22.05.2025</td>
                                <td>XYZ S.A.</td>
                                <td>8 900,00 PLN</td>
                                <td><Badge bg="warning">W trakcie</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Edytuj</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="nowy" title="Nowy dokument">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ dokumentu*</Form.Label>
                                            <Form.Select required>
                                                <option>Kompensata wewnętrzna</option>
                                                <option>Kompensata z kontrahentem</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data dokumentu*</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-01" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Kontrahent*</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Pozycje kompensaty</Accordion.Header>
                                        <Accordion.Body>
                                            <Table bordered>
                                                <thead>
                                                    <tr>
                                                        <th>Typ</th>
                                                        <th>Numer dokumentu</th>
                                                        <th>Kwota</th>
                                                        <th>Saldo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Faktura</td>
                                                        <td>FV/2025/123</td>
                                                        <td>5 000,00 PLN</td>
                                                        <td>5 000,00 PLN</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Płatność</td>
                                                        <td>PL/2025/456</td>
                                                        <td>-3 000,00 PLN</td>
                                                        <td>2 000,00 PLN</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Button variant="outline-primary" className="mt-3">
                                                Dodaj pozycję
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz dokument
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raporty" title="Raporty">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Okres od</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-01-01" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Okres do</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table striped bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Miesiąc</th>
                                            <th>Liczba kompensat</th>
                                            <th>Wartość</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Maj 2025</td>
                                            <td>12</td>
                                            <td>45 200,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Kwiecień 2025</td>
                                            <td>8</td>
                                            <td>32 150,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Button variant="outline-primary">
                                    Generuj raport
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};