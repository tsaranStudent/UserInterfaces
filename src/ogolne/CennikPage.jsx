import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Tabs, Tab, Row, Col, Table, Button, Accordion, Form } from 'react-bootstrap';

export const Cennik = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            {/* Tło sekcji */}
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-tags icon-unified mb-2" />
                    <h1 className="page-title">Zarządzanie cennikiem 2025</h1>
                    <p className="text-muted">Definiuj i zarządzaj cennikami produktów i usług na rok 2025</p>
                </div>

                {/* Zakładki cennika */}
                <Container className="mt-3">
                    <Tabs defaultActiveKey="products" id="price-tabs" className="mb-4">
                        <Tab eventKey="products" title="Produkty">
                            {/* Panel akcji produktów */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                                <div>
                                    <Button variant="success" className="me-2"><i className="bi bi-plus-lg me-1" /> Nowy cennik</Button>
                                    <Button variant="outline-primary"><i className="bi bi-arrow-repeat me-1" /> Aktualizuj ceny</Button>
                                </div>
                                <div>
                                    <Button variant="outline-secondary" className="me-2"><i className="bi bi-printer me-1" /> Drukuj</Button>
                                    <Button variant="outline-success"><i className="bi bi-file-excel me-1" /> Eksportuj</Button>
                                </div>
                            </div>
                            {/* Tabela produktów */}
                            <Table bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Nazwa</th>
                                        <th>Od</th>
                                        <th>Do</th>
                                        <th>Waluta</th>
                                        <th>Pozycji</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Standardowy</td>
                                        <td>01.01.2025</td>
                                        <td>31.12.2025</td>
                                        <td>PLN</td>
                                        <td>500</td>
                                        <td><span className="badge badge-success">Aktywny</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Promocyjny Q1</td>
                                        <td>01.01.2025</td>
                                        <td>31.03.2025</td>
                                        <td>PLN</td>
                                        <td>200</td>
                                        <td><span className="badge badge-planned">Planowany</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Sezonowy Wiosna</td>
                                        <td>01.04.2025</td>
                                        <td>30.06.2025</td>
                                        <td>PLN</td>
                                        <td>150</td>
                                        <td><span className="badge badge-planned">Planowany</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Letni</td>
                                        <td>01.07.2025</td>
                                        <td>30.09.2025</td>
                                        <td>PLN</td>
                                        <td>120</td>
                                        <td><span className="badge badge-inactive">Wyczerpany</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="services" title="Usługi">
                            {/* Panel akcji usług */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                                <div>
                                    <Button variant="success" className="me-2"><i className="bi bi-plus-lg me-1" /> Nowy cennik</Button>
                                    <Button variant="outline-primary"><i className="bi bi-people me-1" /> Grupy</Button>
                                </div>
                                <div>
                                    <Button variant="outline-secondary" className="me-2"><i className="bi bi-printer me-1" /> Drukuj</Button>
                                    <Button variant="outline-success"><i className="bi bi-file-excel me-1" /> Eksportuj</Button>
                                </div>
                            </div>
                            {/* Tabela usług */}
                            <Table bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Nazwa</th>
                                        <th>Od</th>
                                        <th>Do</th>
                                        <th>Waluta</th>
                                        <th>Pozycji</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Usługa Podstawowa</td>
                                        <td>01.01.2025</td>
                                        <td>31.12.2025</td>
                                        <td>PLN</td>
                                        <td>100</td>
                                        <td><span className="badge badge-success">Aktywny</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Usługa Premium</td>
                                        <td>01.03.2025</td>
                                        <td>28.02.2026</td>
                                        <td>EUR</td>
                                        <td>50</td>
                                        <td><span className="badge badge-success">Aktywny</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Wsparcie 24/7</td>
                                        <td>01.01.2025</td>
                                        <td>31.12.2025</td>
                                        <td>PLN</td>
                                        <td>20</td>
                                        <td><span className="badge badge-success">Aktywny</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Szkolenie</td>
                                        <td>01.06.2025</td>
                                        <td>30.06.2025</td>
                                        <td>PLN</td>
                                        <td>10</td>
                                        <td><span className="badge badge-planned">Planowany</span></td>
                                        <td><Button size="sm"><i className="bi bi-eye" /></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>

                    {/* Formularz dodawania */}
                    <Accordion className="mt-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Dodaj cennik</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}><Form.Control placeholder="Nazwa*" /></Col>
                                        <Col md={3}><Form.Control type="date" /></Col>
                                        <Col md={3}><Form.Control type="date" /></Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="outline-secondary">Anuluj</Button>
                                        <Button variant="primary"><i className="bi bi-save me-1" /> Zapisz</Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie */}
                    <Container className="mt-4">
                        <div className="summary-box">
                            <p><strong>Łącznie cenników:</strong> 20</p>
                            <p><strong>Aktywnych:</strong> 7</p>
                            <p><strong>Ost. aktualizacja:</strong> 01.05.2025</p>
                            <Button variant="outline-primary" className="mt-2"><i className="bi bi-clock-history me-1" /> Historia</Button>
                        </div>
                    </Container>
                </Container>
            </Container>
        </div>
    </Container>
);
``
