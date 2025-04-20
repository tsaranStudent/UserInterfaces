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
import { Navbar, Nav, Alert } from 'react-bootstrap';

export const OdswierzKonfiguracje = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section text-center">
                        <h3 className="page-title">Odśwież konfigurację</h3>
                        <Alert variant="warning" className="mt-3">
                            Po odświeżeniu zostaną załadowane najnowsze ustawienia systemu.
                        </Alert>
                        <Button variant="outline-primary" className="w-100 mt-3">Odśwież</Button>
                    </div>
                </Container>
            </div>
        </Container>
    )
}