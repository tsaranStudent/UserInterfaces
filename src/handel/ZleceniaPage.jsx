import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const Zlecenia = () => {
    return (
        <Container fluid className="background lang-pl">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid className="lang-pl ms-3">
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto d-flex flex-wrap align-items-center ">
                            {/* Sekcje z linkami */}

                            <div className="navbar-section">
                                <Nav.Item><Link to="/faktury" className="nav-link custom-link">Faktury</Link></Nav.Item>
                                <Nav.Item><Link to="/nowaFaktura" className="nav-link custom-link">Nowa faktura</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/paragony" className="nav-link custom-link">Paragony</Link></Nav.Item>
                                <Nav.Item><Link to="/nowyParagon" className="nav-link custom-link">Nowy paragon</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/rezerwacjeOdbiorcy" className="nav-link custom-link">Rezerwacje odbiorcy</Link></Nav.Item>
                                <Nav.Item><Link to="/fakturyProforma" className="nav-link custom-link">Faktury proforma</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/sprzedarzDedykowana" className="nav-link custom-link">Sprzedaż dedykowana</Link></Nav.Item>
                                <Nav.Item><Link to="/fakturyZakupu" className="nav-link custom-link">Faktury zakupu</Link></Nav.Item>
                                <Nav.Item><Link to="/zleceniaUDostawcy" className="nav-link custom-link">Zlecenia u dostawcy</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/zasoby" className="nav-link custom-link">Zasoby</Link></Nav.Item>
                                <Nav.Item><Link to="/raportBrakow" className="nav-link custom-link">Raport braków</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/wydaniaZewnetrzne" className="nav-link custom-link">Wydania zewnętrzne WZ</Link></Nav.Item>
                                <Nav.Item><Link to="/przyjeciaZewnetrzne" className="nav-link custom-link">Przyjęcia zewnętrzne PZ</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/zlecenia" className="nav-link custom-link">Zlecenia</Link></Nav.Item>
                                <Nav.Item><Link to="/zleceniaCykliczne" className="nav-link custom-link">Zlecenia cykliczne</Link></Nav.Item>
                            </div>
                            <div className="nav-divider" />

                            <div className="navbar-section">
                                <Nav.Item><Link to="/urzadzniaServis" className="nav-link custom-link">Urządzenia</Link></Nav.Item>
                                <Nav.Item><Link to="/rodzajeUrzadzenServis" className="nav-link custom-link">Rodzaje urządzeń</Link></Nav.Item>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zlecenia servisowe</h3>
                </div>
            </Container>
            {/* Pasek akcji */}
            <div className="actions-bar">
                <div className="actions-bar-start">
                    <Form className="d-flex search-input">
                        <Form.Control
                            type="search"
                            placeholder="Wyszukaj po nr zlecenia"
                            className="me-2"
                        />
                        <Button variant="outline-primary" type="submit">
                            Szukaj
                        </Button>
                    </Form>
                </div>

                <div className="actions-bar-end">
                    <Button variant="primary">+ Nowe zlecenie</Button>
                </div>
            </div>

            {/* Filtry */}
            <div className="form-section">
                <Form>
                    <Row className="align-items-end">
                        <Col md={3}>
                            <Form.Label className="form-label">Data od</Form.Label>
                            <Form.Control type="date" />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="form-label">Data do</Form.Label>
                            <Form.Control type="date" />
                        </Col>
                        <Col md={4}>
                            <Form.Label className="form-label">Wyszukaj tytuł</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tytuł zlecenia"
                                className="search-input"
                            />
                        </Col>
                        <Col md={2} className="d-grid">
                            <Button variant="outline-primary">Szukaj</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

            {/* Tabele zleceń */}
            <Tabs defaultActiveKey="otwarte" className="module-tabs">
                <Tab eventKey="otwarte" title="Otwarte">
                    <Table striped hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>Numer zlecenia</th>
                                <th>Tytuł</th>
                                <th>Data utworzenia</th>
                                <th>Termin realizacji</th>
                                <th>Status</th>
                                <th>Priorytet</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZLC/2023/07/001</td>
                                <td>Naprawa dachu</td>
                                <td>2023-07-15</td>
                                <td>2023-07-22</td>
                                <td><Badge bg="warning" className="badge-w-realizacji">W realizacji</Badge></td>
                                <td>Wysoki</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                    <Button variant="outline-success" size="sm" className="ms-2">Zatwierdź</Button>
                                    <Button variant="outline-danger" size="sm" className="ms-2">Anuluj</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>ZLC/2023/07/003</td>
                                <td>Montaż okien</td>
                                <td>2023-07-18</td>
                                <td>2023-07-25</td>
                                <td><Badge bg="info">Oczekuje</Badge></td>
                                <td>Średni</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                    <Button variant="outline-warning" size="sm" className="ms-2">Oczekuj</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="zamkniete" title="Zamknięte">
                    <Table striped hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>Numer zlecenia</th>
                                <th>Tytuł</th>
                                <th>Data utworzenia</th>
                                <th>Data zamknięcia</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZLC/2023/06/010</td>
                                <td>Malowanie biura</td>
                                <td>2023-06-01</td>
                                <td>2023-06-10</td>
                                <td><Badge bg="success">Zakończone</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>ZLC/2023/06/015</td>
                                <td>Wymiana oświetlenia</td>
                                <td>2023-06-05</td>
                                <td>2023-06-12</td>
                                <td><Badge bg="success">Zakończone</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </Container>
    );
};
