import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const WydaniaZewnetrzne = () => {
    return (
        <Container fluid className="background lang-pl">
            <h3 className="page-title">Obsługa wydań zewnętrznych z magazynu</h3>

            {/* Pasek akcji */}
            <div className="actions-bar">
                <div className="actions-bar-start">
                    <Button variant="primary" data-bs-toggle="collapse" data-bs-target="#noweWydanieForm">
                        + Nowe wydanie
                    </Button>
                </div>
                <div className="actions-bar-end">
                    <Form.Control
                        type="text"
                        placeholder="Wyszukaj po numerze dokumentu..."
                        className="search-input"
                    />
                    <Button variant="outline-secondary">Szukaj</Button>
                </div>
            </div>

            {/* Formularz do wprowadzania nowego wydania */}
            <div className="collapse" id="noweWydanieForm">
                <div className="form-container mt-4">
                    <Form className="form-section">
                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Numer wydania</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź numer wydania" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Data wydania</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Odbiorca</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź nazwę odbiorcy" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Powód wydania</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź powód wydania" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Liczba pozycji</Form.Label>
                                    <Form.Control type="number" placeholder="Wprowadź liczbę pozycji" />
                                </Form.Group>
                            </Col>
                            <Col md={3} className="d-grid">
                                <Button variant="outline-primary">Dodaj pozycję</Button>
                            </Col>
                        </Row>

                        {/* Dodaj inne sekcje formularza, jeśli konieczne */}
                    </Form>
                </div>
            </div>

            {/* Tabela danych */}
            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Numer dokumentu</th>
                        <th>Data wydania</th>
                        <th>Odbiorca</th>
                        <th>Powód wydania</th>
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
                            <Button variant="outline-success" size="sm">Zatwierdź</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>WYD/2023/07/002</td>
                        <td>2023-07-17</td>
                        <td>Serwis ABC</td>
                        <td>Naprawa gwarancyjna</td>
                        <td>1</td>
                        <td><span className="badge bandage-w-trakcie">W trakcie</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>{' '}
                            <Button variant="outline-danger" size="sm">Anuluj</Button>
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
                            <Button variant="outline-success" size="sm">Zatwierdź</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
