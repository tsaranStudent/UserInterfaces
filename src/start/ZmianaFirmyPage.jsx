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
export const ZmianaFirmy = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section text-center">
                        <h3 className="page-title">Zmiana firmy</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Select>
                                    <option>Firma A</option>
                                    <option>Firma B</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="success" className="w-100">Zatwierdź</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </Container>
    )
}