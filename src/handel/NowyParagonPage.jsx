import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

export const NowyParagon = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl">
                <h3 className="page-title">Nowy paragon</h3>

                <Form className="form">
                    <div className="form-section">
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Sprzedawca</Form.Label>
                                    <Form.Select className="form-control">
                                        <option>Kasa 1 - Anna Nowak</option>
                                        <option>Kasa 2 - Jan Kowalski</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
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
