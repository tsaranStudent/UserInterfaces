import React from 'react';
import {
    Container, Form, Row, Col, Button, Card,
    Accordion, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const NowyDokument = () => (
    <Container className="lang-pl mt-2 mb-2">
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-file-earmark-plus-fill icon-unified mb-2" />
                    <h1 className="page-title">Nowy dokument</h1>
                    <p className="text-muted">Tworzenie dokumentu w systemie – rok 2025</p>
                </div>

                <Card className="form-section mb-4">
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label><i className="bi bi-file-text me-1" /> Nazwa dokumentu</Form.Label>
                                    <Form.Control placeholder="Wprowadź nazwę" />
                                </Col>
                                <Col md={3}>
                                    <Form.Label><i className="bi bi-layers me-1" /> Typ</Form.Label>
                                    <Form.Select>
                                        <option>Faktura</option>
                                        <option>Umowa</option>
                                        <option>Raport</option>
                                        <option>Notatka służbowa</option>
                                    </Form.Select>
                                </Col>
                                <Col md={3}>
                                    <Form.Label><i className="bi bi-building me-1" /> Dział</Form.Label>
                                    <Form.Select>
                                        <option>Finanse</option>
                                        <option>HR</option>
                                        <option>IT</option>
                                        <option>Marketing</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Label><i className="bi bi-pencil-square me-1" /> Opis</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Opis dokumentu..." />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label><i className="bi bi-paperclip me-1" /> Załącznik</Form.Label>
                                    <Form.Control type="file" />
                                    <Form.Text muted>Maks. 10MB</Form.Text>
                                </Col>
                                <Col md={3}>
                                    <Form.Label><i className="bi bi-calendar me-1" /> Data</Form.Label>
                                    <Form.Control type="date" max="2025-12-31" />
                                </Col>
                                <Col md={3}>
                                    <Form.Label><i className="bi bi-exclamation-circle me-1" /> Priorytet</Form.Label>
                                    <Form.Select>
                                        <option>Normalny</option>
                                        <option>Wysoki</option>
                                        <option>Krytyczny</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Accordion className="mb-4">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><i className="bi bi-sliders me-2" />Opcje dodatkowe</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={4}>
                                                <Form.Check label="Wymagaj akceptacji" defaultChecked />
                                            </Col>
                                            <Col md={4}>
                                                <Form.Check label="Poufny dokument" />
                                            </Col>
                                            <Col md={4}>
                                                <Form.Check label="Powiadom zespół" />
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="d-flex justify-content-between">
                                <Button variant="outline-secondary">
                                    <i className="bi bi-arrow-left me-1" /> Anuluj
                                </Button>
                                <div>
                                    <Button variant="outline-primary" className="me-2">
                                        <i className="bi bi-eye me-1" /> Podgląd
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1" /> Zapisz
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Szybkie skróty */}
                <Card>
                    <Card.Body>
                        <h5 className="mb-3"><i className="bi bi-lightning-charge-fill me-1" />Szybkie tworzenie</h5>
                        <Row>
                            {[
                                { label: 'Nowa faktura', icon: 'file-earmark-text', variant: 'outline-success' },
                                { label: 'Nowa umowa', icon: 'file-earmark-check', variant: 'outline-info' },
                                { label: 'Nowy raport', icon: 'file-earmark-bar-graph', variant: 'outline-warning' },
                                { label: 'Notatka służbowa', icon: 'file-earmark-medical', variant: 'outline-dark' }
                            ].map((item, i) => (
                                <Col md={3} key={i}>
                                    <Button className="w-100 mb-2" variant={item.variant}>
                                        <i className={`bi bi-${item.icon} me-1`} /> {item.label}
                                    </Button>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    </Container>
);
