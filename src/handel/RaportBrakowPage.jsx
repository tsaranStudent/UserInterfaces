import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const RaportBrakow = () => {
    return (
        <Container fluid className="lang-pl background">
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
                    <h3 className="page-title mt-3">Raport brakow magazynowych</h3>
                </div>
            </Container>
            <Card className="form-section mb-4">

                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Wybierz magazyn</Form.Label>
                            <Form.Select className="form-control">
                                <option>Wszystkie magazyny</option>
                                <option>Magazyn główny</option>
                                <option>Magazyn zapasowy</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="actions-bar-end">
                            <Button variant="primary">
                                Generuj raport
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <h4 className="page-title">Braki magazynowe</h4>
            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Kod produktu</th>
                        <th>Nazwa produktu</th>
                        <th>Minimalny stan</th>
                        <th>Aktualny stan</th>
                        <th>Różnica</th>
                        <th>Ostatnia dostawa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PROD-001</td>
                        <td>Kabel HDMI 2.0</td>
                        <td>10</td>
                        <td>2</td>
                        <td><span className="badge badge-danger">-8</span></td>
                        <td>2023-06-15</td>
                    </tr>
                    <tr>
                        <td>PROD-002</td>
                        <td>Adapter USB-C</td>
                        <td>15</td>
                        <td>0</td>
                        <td><span className="badge badge-danger">-15</span></td>
                        <td>2023-05-22</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
