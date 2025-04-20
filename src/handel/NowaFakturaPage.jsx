import React from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


export const NowaFaktura = () => {
    return (
        <div className="background ">            
            

            {/* Reszta strony */}
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Nowa faktura sprzedażowa</h3>
                </div>

                <Form className="form">
                    <div className="form-section">
                        <Row fluid className="mb-3 row">
                            <Col md={2}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Kontrahent</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Wprowadź nazwę lub NIP"
                                        className="form-control search-input"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Data wystawienia</Form.Label>
                                    <Form.Control type="date" className="form-control" />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Termin płatności</Form.Label>
                                    <Form.Select className="form-control">
                                        <option>7 dni</option>
                                        <option>14 dni</option>
                                        <option>30 dni</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Sposób płatności</Form.Label>
                                    <Form.Select className="form-control">
                                        <option>Przelew</option>
                                        <option>Gotówka</option>
                                        <option>Karta</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Typ faktury</Form.Label>
                                    <Form.Select className="form-control">
                                        <option>Faktura VAT</option>
                                        <option>Faktura Proforma</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>   
                        </Row>

                        <div className="form-section">
                            <h5 className="mt-2 mb-2">Pozycje faktury</h5>
                            <Table bordered responsive className="table data-table">
                                <thead>
                                    <tr>
                                        <th>Nazwa towaru/usługi</th>
                                        <th>Ilość</th>
                                        <th>J.m.</th>
                                        <th>Cena netto</th>
                                        <th>VAT</th>
                                        <th>Wartość netto</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                placeholder="Wprowadź nazwę"
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <Form.Control type="number" defaultValue="1" className="form-control" />
                                        </td>
                                        <td>
                                            <Form.Select className="form-control">
                                                <option>szt.</option>
                                                <option>kg</option>
                                                <option>m</option>
                                            </Form.Select>
                                        </td>
                                        <td>
                                            <InputGroup>
                                                <Form.Control type="number" step="0.01" className="form-control" />
                                                <InputGroup.Text>zł</InputGroup.Text>
                                            </InputGroup>
                                        </td>
                                        <td>
                                            <Form.Select className="form-control">
                                                <option>23%</option>
                                                <option>8%</option>
                                                <option>5%</option>
                                                <option>0%</option>
                                            </Form.Select>
                                        </td>
                                        <td>0.00 zł</td>
                                        <td>
                                            <Button variant="danger" size="sm">Usuń</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Button variant="outline-primary" className="mt-2">Dodaj pozycję</Button>
                        </div>

                    </div>

                   

                    <div className="actions-bar-end form-section">
                        <Link to="/faktury">
                            <Button variant="outline-primary" className="me-3">Lista faktur VAT</Button>
                        </Link>
                        <Link to="/fakturyProforma">
                            <Button variant="outline-primary">Lista faktur proforma</Button>
                        </Link>
                        <Button variant="success" size="lg">Zapisz fakturę</Button>
                    </div>



                </Form>

            </Container>


        </div>
    );
};
