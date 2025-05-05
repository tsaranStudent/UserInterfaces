import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const InneInne = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                {/* Nagłówek sekcji */}
                <div className="form-section">
                    <h3 className="page-title mt-3">Narzędzia dodatkowe</h3>
                    <p className="text-muted">Różne funkcje pomocnicze systemu ERP (2025)</p>
                </div>

                {/* System zakładek */}
                <Tabs defaultActiveKey="narzedzia" className="mb-3">
                    {/* Zakładka narzędzi systemowych */}
                    <Tab eventKey="narzedzia" title="Narzędzia">
                        <div className="form-section mt-3">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Eksport danych</Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Format eksportu</Form.Label>
                                                        <Form.Select>
                                                            <option>Excel (.xlsx)</option>
                                                            <option>CSV (.csv)</option>
                                                            <option>PDF (.pdf)</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Zakres danych</Form.Label>
                                                        <Form.Select>
                                                            <option>Bieżący widok</option>
                                                            <option>Wszystkie rekordy</option>
                                                            <option>Wybrane kolumny</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Button variant="primary">Generuj raport</Button>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Import danych</Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Wybierz plik do importu</Form.Label>
                                                <Form.Control type="file" />
                                                <Form.Text className="text-muted">
                                                    Obsługiwane formaty: .xlsx, .csv (max 10MB)
                                                </Form.Text>
                                            </Form.Group>
                                            <Button variant="primary">Rozpocznij import</Button>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Tab>

                    {/* Zakładka statystyk systemu */}
                    <Tab eventKey="statystyki" title="Statystyki">
                        <div className="form-section mt-3">
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5>Statystyki systemowe</h5>
                                    <Table striped bordered className="data-table mt-3">
                                        <tbody>
                                            <tr>
                                                <td>Liczba użytkowników</td>
                                                <td>24</td>
                                                <td><Badge bg="success">+2 w 2025</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>Liczba dokumentów</td>
                                                <td>1,248</td>
                                                <td><Badge bg="info">Średnio 104/miesiąc</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>Ostatnia aktualizacja</td>
                                                <td>15.06.2025</td>
                                                <td><Badge bg="primary">Wersja 2.5.1</Badge></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>

                    {/* Zakładka pomocy technicznej */}
                    <Tab eventKey="pomoc" title="Pomoc techniczna">
                        <div className="form-section mt-3">
                            <Alert variant="info">
                                <strong>Godziny pracy wsparcia:</strong> Pon-Pt 8:00-16:00 | Tel: +48 123 456 789
                            </Alert>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Temat zgłoszenia</Form.Label>
                                    <Form.Control type="text" placeholder="Krótko opisz problem" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opis problemu</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Priorytet</Form.Label>
                                    <Form.Select>
                                        <option>Niski</option>
                                        <option>Normalny</option>
                                        <option>Wysoki</option>
                                        <option>Krytyczny</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Wyślij zgłoszenie
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>
                </Tabs>

                {/* Sekcja szybkich akcji */}
                <div className="form-section mt-4">
                    <h5 className="mb-3">Szybkie akcje</h5>
                    <Row>
                        <Col md={4}>
                            <Button variant="outline-secondary" className="w-100 mb-2">
                                Generuj kopię zapasową
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button variant="outline-secondary" className="w-100 mb-2">
                                Historia zmian
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button variant="outline-secondary" className="w-100 mb-2">
                                Ustawienia systemowe
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};