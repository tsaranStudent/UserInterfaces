import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

export const NowyDokument = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Nowy dokument</h3>
                    <p className="text-muted">Tworzenie nowego dokumentu w systemie (2025)</p>
                </div>

                <Card className="mb-4">
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group controlId="documentName">
                                        <Form.Label>Nazwa dokumentu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź nazwę dokumentu" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="documentType">
                                        <Form.Label>Typ dokumentu</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz typ</option>
                                            <option>Faktura</option>
                                            <option>Umowa</option>
                                            <option>Raport</option>
                                            <option>Notatka służbowa</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="documentDepartment">
                                        <Form.Label>Dział</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz dział</option>
                                            <option>Finanse</option>
                                            <option>HR</option>
                                            <option>IT</option>
                                            <option>Marketing</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={12}>
                                    <Form.Group controlId="documentDescription">
                                        <Form.Label>Opis dokumentu</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Krótki opis dokumentu..." />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group controlId="documentFile">
                                        <Form.Label>Załącz plik</Form.Label>
                                        <Form.Control type="file" />
                                        <Form.Text muted>
                                            Maksymalny rozmiar pliku: 10MB
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="documentDate">
                                        <Form.Label>Data dokumentu</Form.Label>
                                        <Form.Control type="date" max="2025-12-31" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="documentPriority">
                                        <Form.Label>Priorytet</Form.Label>
                                        <Form.Select>
                                            <option>Normalny</option>
                                            <option>Wysoki</option>
                                            <option>Krytyczny</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Accordion className="mb-4">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Dodatkowe opcje</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Wymagaj akceptacji"
                                                        id="requireApproval"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Oznacz jako poufne"
                                                        id="markAsConfidential"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Powiadom zespół"
                                                        id="notifyTeam"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="d-flex justify-content-between">
                                <Button variant="outline-secondary" className="me-2">
                                    <i className="bi bi-arrow-left"></i> Anuluj
                                </Button>
                                <div>
                                    <Button variant="outline-primary" className="me-2">
                                        <i className="bi bi-file-earmark"></i> Podgląd
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save"></i> Zapisz dokument
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <h5 className="mb-3">Szybkie tworzenie</h5>
                        <Row>
                            <Col md={3}>
                                <Button variant="outline-success" className="w-100 mb-2">
                                    <i className="bi bi-file-earmark-text"></i> Nowa faktura
                                </Button>
                            </Col>
                            <Col md={3}>
                                <Button variant="outline-info" className="w-100 mb-2">
                                    <i className="bi bi-file-earmark-check"></i> Nowa umowa
                                </Button>
                            </Col>
                            <Col md={3}>
                                <Button variant="outline-warning" className="w-100 mb-2">
                                    <i className="bi bi-file-earmark-bar-graph"></i> Nowy raport
                                </Button>
                            </Col>
                            <Col md={3}>
                                <Button variant="outline-dark" className="w-100 mb-2">
                                    <i className="bi bi-file-earmark-medical"></i> Notatka służbowa
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};