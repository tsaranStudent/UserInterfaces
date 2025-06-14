import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col, Button,
    Badge, Card, InputGroup, Tab, Tabs
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const BibliotekaDokumentow = () => (
    <Container className="lang-pl mt-2 mb-2">
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-journals icon-unified mb-2" />
                    <h1 className="page-title">Biblioteka dokumentów</h1>
                    <p className="text-muted">Centralne repozytorium dokumentów firmowych – rok 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="dokumenty" className="mb-4">
                    <Tab eventKey="dokumenty" title={<><i className="bi bi-folder-fill me-1" />Dokumenty</>}>
                        <div className="form-section actions-bar d-flex justify-content-between align-items-center">
                            <div className="actions-bar-start">
                                <Form.Select style={{ maxWidth: '180px' }}>
                                    <option>Wszystkie kategorie</option>
                                    <option>Umowy</option>
                                    <option>Polityki</option>
                                </Form.Select>
                                <Form.Select style={{ maxWidth: '180px' }}>
                                    <option>Wszystkie działy</option>
                                    <option>HR</option>
                                    <option>IT</option>
                                </Form.Select>
                            </div>
                            <div className="actions-bar-end">
                                <Button variant="success" className="me-2">
                                    <i className="bi bi-file-earmark-plus me-1" /> Dodaj
                                </Button>
                                <InputGroup className="search-input">
                                    <Form.Control placeholder="Szukaj dokumentów..." />
                                    <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-file-earmark" /> Nazwa</th>
                                    <th><i className="bi bi-tags" /> Kategoria</th>
                                    <th><i className="bi bi-calendar3" /> Data</th>
                                    <th><i className="bi bi-hdd" /> Rozmiar</th>
                                    <th><i className="bi bi-check2-circle" /> Status</th>
                                    <th><i className="bi bi-tools" /> Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { nazwa: 'Regulamin pracy', kat: 'Polityki', data: '10.03.2025', size: '1.2 MB', badge: 'success' },
                                    { nazwa: 'Procedura RODO', kat: 'Procedury', data: '05.02.2025', size: '800 KB', badge: 'warning' },
                                    { nazwa: 'Umowa o dzieło', kat: 'Umowy', data: '22.01.2025', size: '1.5 MB', badge: 'secondary' }
                                ].map((doc, i) => (
                                    <tr key={i}>
                                        <td>{doc.nazwa}</td>
                                        <td>{doc.kat}</td>
                                        <td>{doc.data}</td>
                                        <td>{doc.size}</td>
                                        <td><Badge bg={doc.badge}>Aktywny</Badge></td>
                                        <td>
                                            <Button size="sm" variant="outline-primary" className="me-1"><i className="bi bi-download" /></Button>
                                            <Button size="sm" variant="outline-info" className="me-1"><i className="bi bi-clock-history" /></Button>
                                            <Button size="sm" variant="outline-danger"><i className="bi bi-archive" /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="szablony" title={<><i className="bi bi-file-earmark-text me-1" />Szablony</>}>
                        <Row className="form-section">
                            {[
                                { tytul: 'Umowa o pracę', opis: 'Standard HR', badge: 'info', data: '15.01.2025' },
                                { tytul: 'Faktura VAT', opis: 'Dla działu finansów', badge: 'primary', data: '20.02.2025' },
                                { tytul: 'Raport miesięczny', opis: 'Wewnętrzne zestawienia', badge: 'secondary', data: '05.03.2025' }
                            ].map((s, i) => (
                                <Col md={4} key={i}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0">{s.tytul}</h5>
                                                <Badge bg={s.badge}>{s.badge.toUpperCase()}</Badge>
                                            </div>
                                            <p className="text-muted mt-2">{s.opis}</p>
                                            <div className="d-flex justify-content-between">
                                                <small className="text-muted">Modyfikacja: {s.data}</small>
                                                <Button size="sm" variant="outline-primary"><i className="bi bi-download" /></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>

                    <Tab eventKey="kategorie" title={<><i className="bi bi-tags-fill me-1" />Kategorie</>}>
                        <Row className="form-section">
                            <Col md={6}>
                                <h5><i className="bi bi-plus-circle me-1" />Dodaj kategorię</h5>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nazwa kategorii</Form.Label>
                                        <Form.Control placeholder="Wpisz nazwę" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Dział</Form.Label>
                                        <Form.Select>
                                            <option>HR</option>
                                            <option>Finanse</option>
                                            <option>IT</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="primary"><i className="bi bi-save me-1" />Zapisz</Button>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <h5><i className="bi bi-list-ul me-1" />Lista kategorii</h5>
                                <Table bordered>
                                    <thead>
                                        <tr><th>Kategoria</th><th>Dział</th><th>Akcje</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Procedury</td><td>HR</td><td><Button size="sm" variant="outline-danger"><i className="bi bi-trash" /></Button></td></tr>
                                        <tr><td>Raporty</td><td>Finanse</td><td><Button size="sm" variant="outline-danger"><i className="bi bi-trash" /></Button></td></tr>
                                        <tr><td>Szablony</td><td>IT</td><td><Button size="sm" variant="outline-danger"><i className="bi bi-trash" /></Button></td></tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <i className="bi bi-folder2-open me-1" /><strong>Dokumentów:</strong> 124
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-clock me-1" /><strong>Ostatnia aktualizacja:</strong> 10.03.2025
                    </div>
                </div>
            </Container>
        </div>
    </Container>
);
