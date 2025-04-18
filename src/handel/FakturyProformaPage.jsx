import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const FakturyProforma = () => {
    return (
        <Container fluid className="lang-pl background">
            <Accordion defaultActiveKey="kryteria" className="module-tabs">
                <Accordion.Item eventKey="kryteria" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Wyszukiwanie faktur proforma
                    </Accordion.Header>
                    <Accordion.Body className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
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

                            <div className="actions-bar-end">
                                <Button variant="success">Generuj dokument</Button>
                                <Button variant="secondary">Wyczyść</Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h4 className="page-title mt-4">Lista faktur proforma</h4>

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
            
            <div className="actions-bar-end">
                <Button variant="success">Zapisz fakturę</Button>
            </div>
        </Container>
    );
};
