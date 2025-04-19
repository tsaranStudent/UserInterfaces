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

export const Faktury = () => {
    return (
        <Container fluid className="lang-pl background"> 

            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid className="lang-pl ms-3">
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto d-flex flex-wrap align-items-center">
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
                <h3 className="page-title mt-3">Lista faktur sprzedażowych</h3>
            </div>
            </Container>
            

            <Accordion defaultActiveKey="kryteria" className="module-tabs">
                <Accordion.Item eventKey="kryteria" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Wyszukiwanie faktur sprzedażowych
                    </Accordion.Header>
                    <Accordion.Body className="form-section">
                        <Form>
                            <Row fluid className="mb-2 row">
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Numer faktury</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Wprowadź numer"
                                            className="search-input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Kontrahent</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nazwa kontrahenta"
                                            className="search-input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col mmd={2}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data od</Form.Label>
                                        <Form.Control
                                            type="date"
                                            className="form-control"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data do</Form.Label>
                                        <Form.Control
                                            type="date"
                                            className="form-control"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Status płatności</Form.Label>
                                        <Form.Select className="form-control">
                                            <option>Wszystkie</option>
                                            <option value="zaplacona">Zapłacona</option>
                                            <option value="niezaplacona">Niezapłacona</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-2">                                
                                <Col md={12} className="d-flex align-items-end justify-content-end">
                                    <div className="actions-bar-end">
                                        <Button variant="secondary">Wyczyść</Button>
                                        <Button variant="primary" className="ms-2">Filtruj</Button>
                                    </div>
                                </Col>
                            </Row>

                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="actions-bar-end mt-4 form-section">
                <Link to="/nowaFaktura">
                    <Button variant="outline-success" className="me-3">Nowa faktura</Button>
                </Link>
                <Link to="/fakturyProforma">
                    <Button variant="outline-primary">Lista proforma</Button>
                </Link>
            </div>

            <Table striped bordered hover responsive className="data-table mt-4">
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Data wystawienia</th>
                        <th>Kontrahent</th>
                        <th>Kwota brutto</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>FV/2024/001</td>
                        <td>2024-04-01</td>
                        <td>ABC Sp. z o.o.</td>
                        <td>5 000,00 zł</td>
                        <td><span className="badge badge-success">Zapłacona</span></td>
                    </tr>
                    <tr>
                        <td>FV/2024/002</td>
                        <td>2024-04-03</td>
                        <td>XYZ S.A.</td>
                        <td>8 500,00 zł</td>
                        <td><span className="badge badge-danger">Niezapłacona</span></td>
                    </tr>
                    <tr>
                        <td>FV/2024/003</td>
                        <td>2024-04-05</td>
                        <td>Nowak Jan</td>
                        <td>1 200,00 zł</td>
                        <td><span className="badge badge-success">Zapłacona</span></td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    );
};
