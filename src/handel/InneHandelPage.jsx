import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const InneHandel = () => {
    return (
        <Container fluid className="lang-pl background">
            <Tabs defaultActiveKey="cenniki" className="module-tabs">
                <Tab eventKey="cenniki" title="Cenniki">
                    <Accordion defaultActiveKey="filtry" className="accordion">
                        <Accordion.Item eventKey="filtry">
                            <Accordion.Header className="accordion-header">Filtry cenników</Accordion.Header>
                            <Accordion.Body className="accordion-body form-section">
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="form-label">Nazwa cennika</Form.Label>
                                                <Form.Control type="text" placeholder="Wprowadź nazwę" className="form-control search-input" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="form-label">Ważny od</Form.Label>
                                                <Form.Control type="date" className="form-control" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <h4 className="page-title">Lista cenników</h4>
                    <Table striped bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>Nazwa cennika</th>
                                <th>Data obowiązywania</th>
                                <th>Liczba pozycji</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cennik podstawowy 2023</td>
                                <td>01.01.2023 - 31.12.2023</td>
                                <td>245</td>
                                <td>
                                    <div className="actions-bar-end">
                                        <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                                        <Button variant="outline-success" size="sm">Eksportuj</Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rabaty" title="Rabaty">
                    {/* Można rozwinąć analogicznie do zakładki cenników */}
                    <div className="form-section">
                        <p className="page-title">Sekcja rabatów – w przygotowaniu</p>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}
