import React from 'react';
import {
    Container, Tabs, Tab, Form, Row, Col, Button,
    Badge, Card, Accordion, Table
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const WindykacjaSchematy = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-exclamation-triangle-fill icon-unified mb-2" />
            <h1 className="page-title">Schematy windykacyjne</h1>
            <p className="text-muted">Zarządzanie procesami windykacyjnymi – rok 2025</p>
        </div>

        {/* Zakładki */}
        <Tabs defaultActiveKey="schematy" className="mb-4 module-tabs">
            <Tab eventKey="schematy" title={<><i className="bi bi-list-ul me-1" />Lista schematów</>}>
                <div className="form-section">
                    <div className="actions-bar">
                        <div className="actions-bar-start">
                            <Button variant="primary"><i className="bi bi-plus-circle me-1" />Nowy schemat</Button>
                            <Button variant="outline-secondary"><i className="bi bi-upload me-1" />Importuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control type="text" placeholder="Szukaj schematów..." className="search-input" />
                        </div>
                    </div>

                    <Card className="shadow-sm">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><i className="bi bi-diagram-3-fill me-2" />Standardowy proces windykacji</Accordion.Header>
                                <Accordion.Body>
                                    <Table borderless className="data-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Krok</th>
                                                <th>Działanie</th>
                                                <th>Termin</th>
                                                <th>Status</th>
                                                <th>Akcje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Wysłanie upomnienia</td>
                                                <td>+7 dni</td>
                                                <td><Badge bg="success">Aktywny</Badge></td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                                    <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Telefon windykacyjny</td>
                                                <td>+14 dni</td>
                                                <td><Badge bg="success">Aktywny</Badge></td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                                    <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </div>
            </Tab>

            <Tab eventKey="nowy" title={<><i className="bi bi-plus-square-fill me-1" />Nowy schemat</>}>
                <div className="form-section">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Label>Nazwa schematu*</Form.Label>
                                        <Form.Control type="text" placeholder="np. Windykacja standardowa" required />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Typ klienta*</Form.Label>
                                        <Form.Select required>
                                            <option>Standardowy</option>
                                            <option>VIP</option>
                                            <option>Korporacyjny</option>
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <h5 className="mb-3"><i className="bi bi-cursor-fill me-1" />Kroki w schemacie</h5>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><i className="bi bi-1-circle me-2" />Wysłanie upomnienia</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Typ działania</Form.Label>
                                                <Form.Select>
                                                    <option>Email</option>
                                                    <option>SMS</option>
                                                    <option>List</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /> Usuń krok</Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Button variant="outline-primary" className="mt-3 me-2">
                                    <i className="bi bi-plus-circle" /> Dodaj krok
                                </Button>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-x-lg" /> Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-check-circle" /> Zapisz schemat
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
                <i className="bi bi-layers-fill me-1" /><strong>Aktywnych schematów:</strong> 5
            </div>
            <div className="summary-text">
                <i className="bi bi-clock-history me-1" /><strong>Ostatnia modyfikacja:</strong> 15.05.2025
            </div>
        </div>
    </Container>
);
