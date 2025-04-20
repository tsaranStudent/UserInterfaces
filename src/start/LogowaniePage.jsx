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

export const Logowanie = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">

                

                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section text-center">
                        <h3 className="page-title">Logowanie do systemu</h3>

                        <Form className="mt-4">
                            <Form.Group className="mb-3">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Wprowadź login" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control type="password" placeholder="Wprowadź hasło" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                Zaloguj
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </Container>
            
    )
}