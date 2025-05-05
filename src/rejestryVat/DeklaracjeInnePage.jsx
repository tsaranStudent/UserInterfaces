import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const DeklaracjeInne = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Inne deklaracje VAT</h2>
                <p className="text-muted">Specjalne formularze i rozliczenia podatkowe (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista deklaracji">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa deklaracja</Button>
                            <Button variant="outline-secondary">Importuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszystkie typy</option>
                                <option>VAT-R</option>
                                <option>VAT-Z</option>
                                <option>VAT-D</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj deklaracji..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Typ</th>
                                <th>Numer</th>
                                <th>Okres</th>
                                <th>Data złożenia</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>VAT-R</td>
                                <td>VAT-R/05/2025</td>
                                <td>Maj 2025</td>
                                <td>15.05.2025</td>
                                <td><Badge bg="success">Zatwierdzona</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">PDF</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>VAT-Z</td>
                                <td>VAT-Z/03/2025</td>
                                <td>Marzec 2025</td>
                                <td>30.03.2025</td>
                                <td><Badge bg="warning">Weryfikacja</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">PDF</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="nowa" title="Nowa deklaracja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ deklaracji*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz typ...</option>
                                                <option>VAT-R (Ryczałt)</option>
                                                <option>VAT-Z (Zwolnienie)</option>
                                                <option>VAT-D (Deklaracja korygująca)</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Okres rozliczeniowy*</Form.Label>
                                            <Form.Select required>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Data złożenia</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-15"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Termin płatności</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-25"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Uwagi</Form.Label>
                                    <Form.Control as="textarea" rows={2} />
                                </Form.Group>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz deklarację
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="szablony" title="Szablony">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Dodaj szablon</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <Form.Control
                                        placeholder="Szukaj szablonów..."
                                        className="search-input"
                                    />
                                </div>
                            </div>

                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nazwa szablonu</th>
                                        <th>Typ deklaracji</th>
                                        <th>Data utworzenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Zwolnienie miesięczne</td>
                                        <td>VAT-Z</td>
                                        <td>15.01.2025</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Użyj</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Korekta roczna</td>
                                        <td>VAT-D</td>
                                        <td>20.03.2025</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Użyj</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};