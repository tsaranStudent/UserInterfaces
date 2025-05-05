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
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';

export const WindykacjaSchematy = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Schematy windykacyjne</h2>
                <p className="text-muted">Zarządzanie procesami windykacyjnymi (2025)</p>
            </div>

            <Tabs defaultActiveKey="schematy" className="mb-4">
                <Tab eventKey="schematy" title="Lista schematów">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy schemat</Button>
                            <Button variant="outline-secondary">Importuj schemat</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="text"
                                placeholder="Szukaj schematów..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Card className="mb-4 shadow-sm">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Standardowy proces windykacji</Accordion.Header>
                                <Accordion.Body>
                                    <Table borderless className="mb-0">
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
                                                <td>+7 dni od terminu</td>
                                                <td><Badge bg="success">Aktywny</Badge></td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                                    <Button variant="outline-danger" size="sm">Usuń</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Telefon windykacyjny</td>
                                                <td>+14 dni od terminu</td>
                                                <td><Badge bg="success">Aktywny</Badge></td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                                    <Button variant="outline-danger" size="sm">Usuń</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Tab>

                <Tab eventKey="nowy" title="Nowy schemat">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Nazwa schematu*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ klienta*</Form.Label>
                                            <Form.Select required>
                                                <option>Standardowy</option>
                                                <option>VIP</option>
                                                <option>Korporacyjny</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h5 className="mb-3">Kroki w schemacie</h5>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>1. Wysłanie upomnienia</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Typ działania</Form.Label>
                                                <Form.Select>
                                                    <option>Email</option>
                                                    <option>SMS</option>
                                                    <option>List</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="outline-danger" size="sm">Usuń krok</Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Button variant="outline-primary" className="mt-3 me-2">
                                    Dodaj krok
                                </Button>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz schemat
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            <div className="summary-box mt-4">
                <div className="summary-text">
                    <strong>Liczba aktywnych schematów:</strong> 5
                </div>
                <div className="summary-text">
                    <strong>Ostatnia modyfikacja:</strong> 15.05.2025
                </div>
            </div>
        </Container>
    );
};