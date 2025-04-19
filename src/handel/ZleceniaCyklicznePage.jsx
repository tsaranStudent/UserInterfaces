import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const ZleceniaCykliczne = () => {
    return (
        <Container fluid className="background">
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
                    <h3 className="page-title mt-3">Zlecenia cykliczne</h3>
                </div>
            </Container>

            {/* Pasek akcji z filtrowaniem i przyciskiem */}
            <div className="actions-bar">
                <div className="actions-bar-start">
                    <Form className="d-flex search-input">
                        <Form.Control
                            type="search"
                            placeholder="Szukaj zlecenia..."
                            className="me-2"
                        />
                    </Form>

                    <Form.Select aria-label="Filtruj status">
                        <option>Wszystkie statusy</option>
                        <option value="aktywny">Aktywne</option>
                        <option value="zakonczony">Zakończone</option>
                        <option value="wplanie">W planie</option>
                    </Form.Select>
                </div>

                <div className="actions-bar-end">
                    <Button variant="primary">+ Nowe zlecenie cykliczne</Button>
                </div>
            </div>

            {/* Tabela zleceń */}
            <Table bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Numer zlecenia</th>
                        <th>Nazwa zlecenia</th>
                        <th>Data rozpoczęcia</th>
                        <th>Częstotliwość</th>
                        <th>Ostatnie wykonanie</th>
                        <th>Następne wykonanie</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CYK/2023/01/001</td>
                        <td>Przegląd klimatyzacji</td>
                        <td>2023-01-15</td>
                        <td>Co 3 miesiące</td>
                        <td>2024-07-15</td>
                        <td>2024-10-15</td>
                        <td>
                            <span className="badge badge-w-realizacji">Aktywne</span>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>CYK/2023/02/005</td>
                        <td>Serwis ekspresów do kawy</td>
                        <td>2023-02-01</td>
                        <td>Co 6 miesięcy</td>
                        <td>2024-08-01</td>
                        <td>2025-02-01</td>
                        <td>
                            <span className="badge badge-success">Zakończone</span>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>CYK/2023/03/012</td>
                        <td>Kontrola instalacji elektrycznej</td>
                        <td>2023-03-10</td>
                        <td>Co 12 miesięcy</td>
                        <td>2024-03-10</td>
                        <td>2025-03-10</td>
                        <td>
                            <span className="badge badge-danger">W planie</span>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
