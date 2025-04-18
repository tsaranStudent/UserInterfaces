import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const InneMagazyn = () => {
    return (
        <Container fluid className="lang-pl background">
            <h4 className="page-title">
                Inne działania magazynowe <Badge bg="secondary">Nowe</Badge>
            </h4>

            <Accordion defaultActiveKey="inwentaryzacja" className="accordion mb-4">
                <Accordion.Item eventKey="inwentaryzacja" className="accordion-item">
                    <Accordion.Header className="accordion-header">Inwentaryzacja</Accordion.Header>
                    <Accordion.Body className="accordion-body form-section">
                        <Form>
                            <Row>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data rozpoczęcia</Form.Label>
                                        <Form.Control type="date" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Magazyn</Form.Label>
                                        <Form.Select className="form-control">
                                            <option>Główny</option>
                                            <option>Zapasowy</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4} className="d-flex align-items-end">
                                    <Button variant="primary" className="w-100">Rozpocznij inwentaryzację</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Numer inwentaryzacji</th>
                        <th>Data</th>
                        <th>Magazyn</th>
                        <th>Status</th>
                        <th>Różnice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>INV/2023/05/001</td>
                        <td>15.05.2023</td>
                        <td>Główny</td>
                        <td><span className="badge badge-success">Zakończona</span></td>
                        <td>+2</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
