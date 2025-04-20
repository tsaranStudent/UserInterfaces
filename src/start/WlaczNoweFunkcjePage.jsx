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

export const WlaczNoweFunkcje = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section text-center">
                        <h3 className="page-title">Nowe funkcje</h3>
                        <Stack gap={3} className="mt-4">
                            <Button variant="outline-primary">Włącz moduł AI</Button>
                            <Button variant="outline-success">Aktywuj analitykę</Button>
                            <Button variant="outline-danger">Włącz eksperymentalne funkcje</Button>
                        </Stack>
                    </div>
                </Container>
            </div>
        </Container>
    )
}