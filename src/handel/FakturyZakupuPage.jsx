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

export const FakturyZakupu = () => {
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
                    <h3 className="page-title mt-3">Lista faktur zakupu</h3>
                </div>
            </Container>

            {/* Sekcja filtrowania */}
            <Accordion defaultActiveKey="filtr" className="accordion">
                <Accordion.Item eventKey="filtr" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Filtrowanie faktur zakupu
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Dostawca</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nazwa dostawcy"
                                            className="search-input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar-end">
                                <Button variant="primary">Dodaj nową fakturę</Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Tytuł strony */}
            <h4 className="mt-4 page-title">Rejestr faktur zakupu</h4>

            {/* Tabela faktur */}
            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Nr faktury</th>
                        <th>Dostawca</th>
                        <th>Data zakupu</th>
                        <th>Kwota</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>FZ/2024/15</td>
                        <td>ABC Tools</td>
                        <td>2024-03-15</td>
                        <td>4 800,00 zł</td>
                        <td>
                            <span className="badge badge-success">Zaksięgowana</span>
                        </td>
                    </tr>
                    <tr>
                        <td>FZ/2024/16</td>
                        <td>Global Parts</td>
                        <td>2024-03-18</td>
                        <td>9 200,00 zł</td>
                        <td>
                            <span className="badge badge-danger">W toku</span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
