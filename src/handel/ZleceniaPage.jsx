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

export const Zlecenia = () => {
    return (
        <Container fluid className="background lang-pl">
            <h3 className="page-title mb-4">Zlecenia serwisowe lub produkcyjne</h3>

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
