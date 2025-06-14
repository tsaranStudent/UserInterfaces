import React from 'react';
import {
    Container, Tabs, Tab, Table, Form, Row, Col, Button,
    Badge, Card, ListGroup, Alert
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const SkrzynkaOperatora = () => (
    <Container className="lang-pl mt-2 mb-2">
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-inbox-fill icon-unified mb-2" />
                    <h1 className="page-title">Skrzynka operatora</h1>
                    <p className="text-muted">Komunikaty i zadania systemowe – rok 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="wiadomosci" className="mb-3">
                    <Tab eventKey="wiadomosci" title={<><i className="bi bi-envelope-fill me-1" />Wiadomości</>}>
                        <div className="form-section">
                            <div className="actions-bar">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie typy</option>
                                        <option>Systemowe</option>
                                        <option>Użytkownicy</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="primary">
                                        <i className="bi bi-envelope-plus me-1" /> Nowa wiadomość
                                    </Button>
                                </div>
                            </div>

                            <ListGroup>
                                {[
                                    {
                                        tytul: 'Awaria systemu - pilne!',
                                        tresc: 'ERP będzie niedostępny 15.04.2025, 22:00–02:00',
                                        autor: 'Administrator systemu',
                                        data: '10.03.2025',
                                        badge: 'danger'
                                    },
                                    {
                                        tytul: 'Prośba o weryfikację danych',
                                        tresc: 'Sprawdź dane klienta XYZ S.A.',
                                        autor: 'Anna Nowak',
                                        data: '08.03.2025',
                                        badge: null
                                    }
                                ].map((msg, i) => (
                                    <ListGroup.Item key={i} className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 className="mb-1">{msg.tytul}</h6>
                                            <p className="mb-1">{msg.tresc}</p>
                                            <small className="text-muted">{msg.autor}, {msg.data}</small>
                                        </div>
                                        {msg.badge && <Badge bg={msg.badge}>Nowe</Badge>}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Tab>

                    <Tab eventKey="zadania" title={<><i className="bi bi-check2-square me-1" />Zadania</>}>
                        <div className="form-section">
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Zadanie</th>
                                        <th>Priorytet</th>
                                        <th>Termin</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            zadanie: 'Weryfikacja danych kontrahentów',
                                            priorytet: 'Wysoki', badgeP: 'danger',
                                            termin: '20.03.2025',
                                            status: 'W realizacji', badgeS: 'warning',
                                            akcja: 'Zakończ', variant: 'success'
                                        },
                                        {
                                            zadanie: 'Aktualizacja dokumentacji',
                                            priorytet: 'Normalny', badgeP: 'info',
                                            termin: '30.04.2025',
                                            status: 'Nowe', badgeS: 'secondary',
                                            akcja: 'Rozpocznij', variant: 'primary'
                                        }
                                    ].map((z, i) => (
                                        <tr key={i}>
                                            <td>{z.zadanie}</td>
                                            <td><Badge bg={z.badgeP}>{z.priorytet}</Badge></td>
                                            <td>{z.termin}</td>
                                            <td><Badge bg={z.badgeS}>{z.status}</Badge></td>
                                            <td><Button size="sm" variant={`outline-${z.variant}`}>{z.akcja}</Button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="powiadomienia" title={<><i className="bi bi-bell-fill me-1" />Powiadomienia</>}>
                        <div className="form-section">
                            <Alert variant="info" className="d-flex justify-content-between align-items-center">
                                <span><i className="bi bi-exclamation-circle me-1" /> Nowa wersja systemu 2.5 dostępna od 01.04.2025</span>
                                <Button variant="outline-info" size="sm">Szczegóły</Button>
                            </Alert>

                            <ListGroup>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span><i className="bi bi-person-check me-1" />Zgłoszenie #2456 przypisane do Ciebie</span>
                                    <small className="text-muted">05.03.2025</small>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span><i className="bi bi-person-plus me-1" />Nowy użytkownik oczekuje akceptacji</span>
                                    <small className="text-muted">03.03.2025</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Tab>
                </Tabs>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <i className="bi bi-envelope-open-fill me-1" /><strong>Nieprzeczytane wiadomości:</strong> 3
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-clipboard2-check-fill me-1" /><strong>Nierozwiązane zadania:</strong> 5
                    </div>
                </div>
            </Container>
        </div>
    </Container>
);
