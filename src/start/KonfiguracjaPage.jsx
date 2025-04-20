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
import { Navbar, Nav, Stack } from 'react-bootstrap';

export const Konfiguracja = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section">
                        <h3 className="page-title text-center">Konfiguracja</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Motyw</Form.Label>
                                <Form.Select>
                                    <option>Jasny</option>
                                    <option>Ciemny</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check label="Powiadomienia e-mail" />
                            </Form.Group>
                            <Stack gap={2}>
                                <Button variant="primary">Zapisz</Button>
                                <Button variant="outline-secondary">Anuluj</Button>
                            </Stack>
                        </Form>
                    </div>
                </Container>
            </div>
        </Container>
    )
}