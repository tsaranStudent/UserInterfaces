import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const NowyParagon = () => {
    return (
        <div className="background">
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
                    <h3 className="page-title mt-3">Nowy paragon</h3>
                </div>
            </Container>
            <Container fluid className="lang-pl">

                <Form className="form">
                    <div className="form-section">
                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Sprzedawca</Form.Label>
                                    <Form.Select className="form-control">
                                        <option>Kasa 1 - Anna Nowak</option>
                                        <option>Kasa 2 - Jan Kowalski</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Klient</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="Nazwa klienta (opcjonalnie)"
                                            className="form-control search-input"
                                        />
                                        <Button variant="outline-secondary">Wyszukaj</Button>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label className="form-label">Data od</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="RRRR-MM-DD"
                                        className="form-control"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label className="form-label">Data do</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="RRRR-MM-DD"
                                        className="form-control"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <h5 className="mt-4 mb-3">Lista produktów</h5>


                    <div className="form-section">
                        <Table bordered responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>Kod</th>
                                    <th>Nazwa</th>
                                    <th>Ilość</th>
                                    <th>Cena brutto</th>
                                    <th>Wartość</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            placeholder="Skanuj kod"
                                            className="form-control"
                                        />
                                    </td>
                                    <td>Produkt testowy</td>
                                    <td>
                                        <Form.Control
                                            type="number"
                                            defaultValue="1"
                                            min="1"
                                            className="form-control"
                                        />
                                    </td>
                                    <td>25.99 zł</td>
                                    <td>25.99 zł</td>
                                    <td>
                                        <Button variant="danger" size="sm">Usuń</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="actions-bar">
                            <Button variant="outline-primary">Dodaj produkt</Button>
                            <Button variant="outline-secondary">Rabat</Button>
                        </div>
                    </div>

                    <div className="actions-bar-end">
                        <h5 className="summary-text mb-0 me-3">
                            Suma: <strong>25.99 zł</strong>
                        </h5>
                        <Button variant="success" size="lg">Wystaw paragon</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};
