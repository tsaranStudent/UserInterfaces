import React from 'react';
import { Container, Tabs, Tab, Accordion, Form, Row, Col, Button, Table, Card, Alert, Badge } from 'react-bootstrap';

export const InneInne = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <h1 className="page-title">Narzędzia dodatkowe</h1>
            <p className="text-muted">Funkcje pomocnicze (2025)</p>
        </div>

        {/* Zakładki */}
        <Tabs defaultActiveKey="narzedzia" className="mb-4">
            <Tab eventKey="narzedzia" title="Narzędzia">
                <Accordion defaultActiveKey="0" className="form-section">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Eksport danych</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={6}><Form.Select><option>Excel</option><option>CSV</option></Form.Select></Col>
                                    <Col md={6}><Form.Select><option>Bieżący</option><option>Wszystkie</option></Form.Select></Col>
                                </Row>
                                <Button variant="primary">Generuj</Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Import danych</Accordion.Header>
                        <Accordion.Body>
                            <Form.Group className="mb-3">
                                <Form.Control type="file" />
                                <Form.Text className="text-muted">.xlsx, .csv (max 10MB)</Form.Text>
                            </Form.Group>
                            <Button variant="primary">Rozpocznij</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Tab>
            <Tab eventKey="statystyki" title="Statystyki">
                <Card className="form-section mb-4">
                    <Card.Body>
                        <h5>Statystyki systemowe</h5>
                        <Table striped bordered className="data-table mt-3">
                            <tbody>
                                <tr><td>Liczba użytkowników</td><td>24</td><td><Badge bg="success">+2</Badge></td></tr>
                                <tr><td>Dokumenty</td><td>1 248</td><td><Badge bg="info">104/m-c</Badge></td></tr>
                                <tr><td>Ostatnia aktualizacja</td><td>15.06.2025</td><td><Badge bg="primary">v2.5.1</Badge></td></tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Tab>
            <Tab eventKey="pomoc" title="Pomoc">
                <Alert variant="info" className="form-section">
                    Godziny wsparcia: Pon-Pt 8-16 | Tel: +48 123 456 789
                </Alert>
                <Form className="form-section">
                    <Form.Control placeholder="Temat" className="mb-3" />
                    <Form.Control as="textarea" rows={4} className="mb-3" placeholder="Opis problemu" />
                    <Form.Select className="mb-3"><option>Niski</option><option>Normalny</option><option>Wysoki</option><option>Krytyczny</option></Form.Select>
                    <div className="actions-bar-end">
                        <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                        <Button variant="primary">Wyślij</Button>
                    </div>
                </Form>
            </Tab>
        </Tabs>

        {/* Szybkie akcje */}
        <div className="form-section">
            <h5>Szybkie akcje</h5>
            <Row className="g-3">
                <Col md={4}><Button variant="outline-secondary" className="w-100">Backup</Button></Col>
                <Col md={4}><Button variant="outline-secondary" className="w-100">Historia</Button></Col>
                <Col md={4}><Button variant="outline-secondary" className="w-100">Ustawienia</Button></Col>
            </Row>
        </div>
    </Container>
);
