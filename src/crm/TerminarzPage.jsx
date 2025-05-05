import React from 'react';
import {
    Container, Table, Form, Row, Col,
    Button, Badge, Card, Tabs, Tab,
    ListGroup, Alert
} from 'react-bootstrap';
import '../App.css';

export const Terminarz = () => {
    return (
        <Container className="main-content py-3">
            <div className="form-section">
                <h2 className="page-title">Terminarz</h2>
                <p className="text-muted">Zarządzanie wydarzeniami i zadaniami (Maj 2025)</p>
            </div>

            <Card className="mb-4 shadow-sm">
                <Card.Header className="bg-white">
                    <h4 className="mb-0">Terminarz - Maj 2025</h4>
                </Card.Header>
                <Card.Body>
                    <Tabs defaultActiveKey="wydarzenia" className="mb-4">
                        <Tab eventKey="wydarzenia" title="Nadchodzące">
                            <div className="d-flex justify-content-between mb-3">
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-01"
                                    style={{ maxWidth: '200px' }}
                                />
                                <Button variant="primary">
                                    Dodaj wydarzenie
                                </Button>
                            </div>

                            <ListGroup>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Badge bg="primary" className="me-2">Spotkanie</Badge>
                                        <strong>Spotkanie z klientem ABC</strong>
                                        <div className="text-muted small">10 maja 2025, 10:00-11:30</div>
                                    </div>
                                    <Button size="sm" variant="outline-secondary">Szczegóły</Button>
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Badge bg="warning" className="me-2">Zadanie</Badge>
                                        <strong>Przygotowanie raportu</strong>
                                        <div className="text-muted small">15 maja 2025, do 14:00</div>
                                    </div>
                                    <Button size="sm" variant="outline-secondary">Szczegóły</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab>

                        <Tab eventKey="kalendarz" title="Widok kalendarza">
                            <Alert variant="info" className="text-center py-4">
                                Widok kalendarza - funkcjonalność w przygotowaniu
                            </Alert>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>

            <Card className="shadow-sm">
                <Card.Header className="bg-white">
                    <h5>Statystyki - Maj 2025</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4}>
                            <div className="text-center p-3 border rounded">
                                <div className="h4 mb-1">12</div>
                                <div className="text-muted">Wydarzenia w maju</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center p-3 border rounded">
                                <div className="h4 mb-1">3</div>
                                <div className="text-muted">Zaplanowane spotkania</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center p-3 border rounded">
                                <div className="h4 mb-1">5</div>
                                <div className="text-muted">Zadania do wykonania</div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};