import React from 'react';
import '../App.css';
import { Container, Row, Col, Tabs, Tab, Button, InputGroup, Form, Table, Badge, Accordion, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const WymiaryOpisuAnalitycznego = () => {
    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-sliders icon-unified mb-2" />
                <h1 className="page-title">Wymiary opisu analitycznego</h1>
                <p className="text-muted">
                    Zarządzanie wymiarami analitycznymi w systemie ERP (2025)
                </p>
            </div>

            {/* Zakładki - Lista & Raporty */}
            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title={<><i className="bi bi-list-ul me-1" />Lista wymiarów</>}>
                    {/* Akcje nad tabelą */}
                    <div className="form-section mt-3">
                        <div className="actions-bar mb-3 d-flex justify-content-between align-items-center">
                            <div className="actions-bar-start">
                                <Button variant="success">
                                    <i className="bi bi-plus-circle me-1" /> Dodaj wymiar
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup className="search-input">
                                    <Form.Control placeholder="Szukaj wymiarów..." />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                        {/* Tabela wymiarów - minimum 3 pozycje */}
                        <Table striped bordered hover responsive className="data-table mb-4">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-code me-1" />Kod</th>
                                    <th><i className="bi bi-tag me-1" />Nazwa</th>
                                    <th><i className="bi bi-info-circle me-1" />Opis</th>
                                    <th><i className="bi bi-patch-check me-1" />Status</th>
                                    <th><i className="bi bi-calendar3 me-1" />Data utworzenia</th>
                                    <th><i className="bi bi-gear me-1" />Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>W01</td>
                                    <td>Region</td>
                                    <td>Podział geograficzny</td>
                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />Aktywny</Badge></td>
                                    <td>15.01.2025</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title="Edytuj">
                                            <i className="bi bi-pencil" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title="Usuń">
                                            <i className="bi bi-trash" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>W02</td>
                                    <td>Kanał sprzedaży</td>
                                    <td>Sposób dystrybucji</td>
                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />Aktywny</Badge></td>
                                    <td>20.02.2025</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title="Edytuj">
                                            <i className="bi bi-pencil" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title="Usuń">
                                            <i className="bi bi-trash" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>W03</td>
                                    <td>Typ kosztu</td>
                                    <td>Rodzaj wydatku</td>
                                    <td><Badge bg="secondary"><i className="bi bi-dash-circle me-1" />Nieaktywny</Badge></td>
                                    <td>10.02.2025</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title="Edytuj">
                                            <i className="bi bi-pencil" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title="Usuń">
                                            <i className="bi bi-trash" />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                <Tab eventKey="raporty" title={<><i className="bi bi-graph-up me-1" />Raporty</>}>
                    {/* Accordion z podsumowaniem/statystyką */}
                    <div className="form-section mt-3">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="bi bi-bar-chart me-2" />Statystyki użycia wymiarów
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={6}>
                                            <div className="summary-text">
                                                <i className="bi bi-patch-check me-1" />
                                                <strong>Liczba aktywnych wymiarów:</strong> 2
                                            </div>
                                            <div className="summary-text">
                                                <i className="bi bi-star me-1" />
                                                <strong>Najczęściej używany wymiar:</strong> Region (W01)
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="summary-text">
                                                <i className="bi bi-plus-circle me-1" />
                                                <strong>Ostatnio dodany wymiar:</strong> 20.02.2025
                                            </div>
                                            <div className="summary-text">
                                                <i className="bi bi-dash-circle me-1" />
                                                <strong>Wymiary nieaktywne:</strong> 1
                                            </div>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Tab>
            </Tabs>

            {/* Modal dodania/edycji wymiaru - z ikonkami i selectem min. 3 wartości */}
            <Modal show={false} onHide={() => { }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i className="bi bi-plus-circle me-2" />Nowy wymiar analityczny
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3 g-3">
                            <Col md={6}>
                                <Form.Group controlId="wymKod">
                                    <Form.Label>
                                        <i className="bi bi-code me-1" />Kod wymiaru*
                                    </Form.Label>
                                    <Form.Control type="text" required maxLength={10} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="wymNazwa">
                                    <Form.Label>
                                        <i className="bi bi-tag me-1" />Nazwa wymiaru*
                                    </Form.Label>
                                    <Form.Select required>
                                        <option value="">Wybierz...</option>
                                        <option value="Region">Region</option>
                                        <option value="Kanał sprzedaży">Kanał sprzedaży</option>
                                        <option value="Typ kosztu">Typ kosztu</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="wymOpis" className="mb-3">
                            <Form.Label>
                                <i className="bi bi-info-circle me-1" />Opis wymiaru
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="wymStatus" className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label={<><i className="bi bi-patch-check me-1" />Wymiar aktywny</>}
                                defaultChecked
                            />
                        </Form.Group>
                        <div className="actions-bar-end d-flex justify-content-end gap-2">
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" /> Anuluj
                            </Button>
                            <Button variant="primary">
                                <i className="bi bi-save me-1" /> Zapisz wymiar
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};
