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
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App.css';

export const BibliotekaDokumentow = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Biblioteka dokumentów</h3>
                    <p className="text-muted">Centralne repozytorium dokumentów firmowych (2025)</p>
                </div>

                <Tabs defaultActiveKey="dokumenty" className="mb-3">
                    <Tab eventKey="dokumenty" title="Dokumenty firmowe">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie kategorie</option>
                                        <option>Umowy</option>
                                        <option>Polityki</option>
                                        <option>Procedury</option>
                                    </Form.Select>
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie działy</option>
                                        <option>HR</option>
                                        <option>Finanse</option>
                                        <option>IT</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-plus-circle"></i> Dodaj dokument
                                    </Button>
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj dokumentów..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Nazwa dokumentu</th>
                                        <th>Kategoria</th>
                                        <th>Wersja</th>
                                        <th>Data modyfikacji</th>
                                        <th>Rozmiar</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Polityka bezpieczeństwa IT</td>
                                        <td>Polityki</td>
                                        <td>2.1</td>
                                        <td>12.03.2025</td>
                                        <td>1.2 MB</td>
                                        <td><Badge bg="success">Aktualny</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Pobierz</Button>
                                            <Button variant="outline-info" size="sm" className="me-1">Historia</Button>
                                            <Button variant="outline-danger" size="sm">Archiwizuj</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Procedura rekrutacyjna</td>
                                        <td>Procedury</td>
                                        <td>1.3</td>
                                        <td>28.02.2025</td>
                                        <td>850 KB</td>
                                        <td><Badge bg="warning">W trakcie aktualizacji</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Pobierz</Button>
                                            <Button variant="outline-info" size="sm" className="me-1">Historia</Button>
                                            <Button variant="outline-danger" size="sm">Archiwizuj</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="szablony" title="Szablony dokumentów">
                        <div className="form-section mt-3">
                            <Row>
                                <Col md={4}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0">Umowa o pracę</h5>
                                                <Badge bg="info">HR</Badge>
                                            </div>
                                            <p className="text-muted mt-2">Szablon podstawowej umowy o pracę</p>
                                            <div className="d-flex justify-content-between mt-3">
                                                <small className="text-muted">Ostatnia modyfikacja: 15.01.2025</small>
                                                <Button variant="outline-primary" size="sm">Pobierz</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0">Faktura VAT</h5>
                                                <Badge bg="primary">Finanse</Badge>
                                            </div>
                                            <p className="text-muted mt-2">Standardowy szablon faktury VAT</p>
                                            <div className="d-flex justify-content-between mt-3">
                                                <small className="text-muted">Ostatnia modyfikacja: 20.02.2025</small>
                                                <Button variant="outline-primary" size="sm">Pobierz</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0">Raport miesięczny</h5>
                                                <Badge bg="secondary">Wszystkie działy</Badge>
                                            </div>
                                            <p className="text-muted mt-2">Uniwersalny szablon raportu</p>
                                            <div className="d-flex justify-content-between mt-3">
                                                <small className="text-muted">Ostatnia modyfikacja: 05.03.2025</small>
                                                <Button variant="outline-primary" size="sm">Pobierz</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="kategorie" title="Zarządzanie kategoriami">
                        <div className="form-section mt-3">
                            <Row>
                                <Col md={6}>
                                    <h5 className="mb-3">Dodaj nową kategorię</h5>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nazwa kategorii</Form.Label>
                                            <Form.Control type="text" placeholder="Wprowadź nazwę" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Przypisz do działu</Form.Label>
                                            <Form.Select>
                                                <option>Wybierz dział</option>
                                                <option>HR</option>
                                                <option>Finanse</option>
                                                <option>IT</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Button variant="primary">Dodaj kategorię</Button>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <h5 className="mb-3">Lista kategorii</h5>
                                    <Table bordered className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Kategoria</th>
                                                <th>Dział</th>
                                                <th>Akcje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Umowy</td>
                                                <td>HR</td>
                                                <td>
                                                    <Button variant="outline-danger" size="sm">Usuń</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Faktury</td>
                                                <td>Finanse</td>
                                                <td>
                                                    <Button variant="outline-danger" size="sm">Usuń</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Liczba dokumentów:</strong> 124
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnio dodany:</strong> 10.03.2025
                    </div>
                </div>
            </Container>
        </div>
    );
};