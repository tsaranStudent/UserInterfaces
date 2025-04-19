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

export const FakturyProforma = () => {
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
                    <h3 className="page-title mt-3">Lista faktur proforma</h3>
                </div>
            </Container>


            <Accordion defaultActiveKey="kryteria" className="module-tabs">
                <Accordion.Item eventKey="kryteria" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Wyszukiwanie faktur proforma
                    </Accordion.Header>
                    <Accordion.Body className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Odbiorca</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nazwa odbiorcy"
                                            className="search-input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Nr faktury Vat</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nr faktury"
                                            className="search-input"
                                        />
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
                            <div className="form-section">
                                <div className="actions-bar-end">
                                    <Button variant="secondary">Wyczyść</Button>                                    {/* Dodajemy przycisk "Szukaj" */}
                                    <Button variant="primary" className="ms-2">Szukaj</Button>
                                    <Button variant="success">Generuj Fakturę VAT</Button>
                                    
                                </div>
                            </div>                            
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Nowa faktura i lista faktur VAT - kontener z przyciskami */}

            <div className="actions-bar-end mt-4 form-section">
                <Link to="/nowaFaktura">
                    <Button variant="outline-success" className="me-3">Nowa faktura</Button>
                </Link>
                <Link to="/faktury">
                    <Button variant="outline-primary">Lista faktur VAT</Button>
                </Link>
            </div>

            

            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Nr proformy</th>
                        <th>Odbiorca</th>
                        <th>Data</th>
                        <th>Kwota</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PF/2024/01</td>
                        <td>TechWorld</td>
                        <td>2024-04-01</td>
                        <td>3 500,00 zł</td>
                        <td><span className="badge badge-success">Wysłana</span></td>
                    </tr>
                    <tr>
                        <td>PF/2024/02</td>
                        <td>StudioDesign</td>
                        <td>2024-04-04</td>
                        <td>7 200,00 zł</td>
                        <td><span className="badge badge-danger">Oczekuje</span></td>
                    </tr>
                </tbody>
            </Table>

            
            
        </Container>
    );
};
