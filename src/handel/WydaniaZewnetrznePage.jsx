import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export const WydaniaZewnetrzne = () => {
    return (
        <Container fluid className="lang-pl background">
            <div className="form-section">
                <h3 className="page-title mt-3">Wydania zewnętrzne z magazynu</h3>
            </div>

            <Accordion defaultActiveKey="form" className="module-tabs">
                <Accordion.Item eventKey="form" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Dodaj nowe wydanie zewnętrzne
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
                                        <Form.Label className="form-label">Data wydania</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Odbiorca</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź nazwę odbiorcy" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Powód wydania</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź powód wydania" />
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
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Uwagi</Form.Label>
                                        <Form.Control as="textarea" rows={2} placeholder="Wprowadź dodatkowe informacje" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="form-section actions-bar-end">
                                <Button variant="secondary">Wyczyść</Button>
                                <Button variant="primary" className="ms-2">Zapisz wydanie</Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="actions-bar-end mt-4 form-section">
                <Button variant="outline-primary">Lista wydań</Button>
                <Button variant="outline-success" className="ms-3">Eksportuj do CSV</Button>
            </div>

            {/* Tabela wydań */}
            <Table striped bordered hover responsive className="data-table mt-3">
                <thead>
                    <tr>
                        <th>Numer dokumentu</th>
                        <th>Data wydania</th>
                        <th>Odbiorca</th>
                        <th>Powód</th>
                        <th>Liczba pozycji</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WYD/2023/07/001</td>
                        <td>2023-07-18</td>
                        <td>Klient XYZ</td>
                        <td>Sprzedaż</td>
                        <td>3</td>
                        <td><span className="badge badge-success">Zatwierdzone</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>{' '}
                            <Dropdown size="sm" className="d-inline mx-1">
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Zamień na
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Paragon</Dropdown.Item>
                                    <Dropdown.Item>Faktura</Dropdown.Item>
                                    <Dropdown.Item>RW</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>WYD/2023/07/002</td>
                        <td>2023-07-17</td>
                        <td>Serwis ABC</td>
                        <td>Naprawa gwarancyjna</td>
                        <td>1</td>
                        <td><span className="badge badge-w-realizacji">W trakcie</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>{' '}
                            <Dropdown size="sm" className="d-inline mx-1">
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Zamień na
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Paragon</Dropdown.Item>
                                    <Dropdown.Item>Faktura</Dropdown.Item>
                                    <Dropdown.Item>RW</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>WYD/2023/07/003</td>
                        <td>2023-07-16</td>
                        <td>Klient ABC</td>
                        <td>Zwrot towaru</td>
                        <td>5</td>
                        <td><span className="badge badge-danger">Anulowane</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>{' '}
                            <Dropdown size="sm" className="d-inline mx-1">
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Zamień na
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Paragon</Dropdown.Item>
                                    <Dropdown.Item>Faktura</Dropdown.Item>
                                    <Dropdown.Item>RW</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
