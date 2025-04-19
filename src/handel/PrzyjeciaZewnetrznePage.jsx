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

export const PrzyjeciaZewnetrzne = () => {
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
                    <h3 className="page-title mt-3">Przyjecia zewnetrzne PZ</h3>
                </div>
            </Container>
            
            <Accordion defaultActiveKey="form" className="module-tabs">
                <Accordion.Item eventKey="form" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Dodaj nowe przyjęcie zewnętrzne
                    </Accordion.Header>
                    <Accordion.Body className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Numer dokumentu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer dokumentu" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data przyjęcia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Dostawca</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź nazwę dostawcy" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Numer faktury</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer faktury" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Liczba pozycji</Form.Label>
                                        <Form.Control type="number" placeholder="Liczba pozycji" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Status</Form.Label>
                                        <Form.Select>
                                            <option>W trakcie</option>
                                            <option>Zatwierdzone</option>
                                            <option>Odrzucone</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Uwagi</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Wpisz dodatkowe uwagi" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="form-section actions-bar-end">
                                <Button variant="secondary">Wyczyść</Button>
                                <Button variant="primary" className="ms-2">Zapisz przyjęcie</Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Akcje górne np. przejście do listy lub eksportu */}
            <div className="actions-bar-end mt-4 form-section">                
                <Button variant="outline-primary">Lista wszystkich przyjęć</Button>
                <Button variant="outline-success" className="ms-3">Eksportuj do CSV</Button>
            </div>

            {/* Tabela danych */}
            <Table striped bordered hover responsive className="data-table mt-3">
                <thead>
                    <tr>
                        <th>Numer dokumentu</th>
                        <th>Data przyjęcia</th>
                        <th>Dostawca</th>
                        <th>Numer faktury</th>
                        <th>Liczba pozycji</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PRZYJ/2023/07/001</td>
                        <td>2023-07-10</td>
                        <td>Dostawca Sp. z o.o.</td>
                        <td>FV/123/2023</td>
                        <td>12</td>
                        <td><span className="badge badge-w-realizacji">W trakcie</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-success" size="sm">Zatwierdź</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>PRZYJ/2023/07/002</td>
                        <td>2023-07-11</td>
                        <td>Dostawca ABC</td>
                        <td>FV/124/2023</td>
                        <td>15</td>
                        <td><span className="badge badge-success">Zatwierdzone</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-success" size="sm">Zatwierdź</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>PRZYJ/2023/07/003</td>
                        <td>2023-07-12</td>
                        <td>Dostawca XYZ</td>
                        <td>FV/125/2023</td>
                        <td>20</td>
                        <td><span className="badge badge-danger">Odrzucone</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-danger" size="sm">Anuluj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
