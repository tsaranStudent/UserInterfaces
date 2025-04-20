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
import { Navbar, Nav, Card } from 'react-bootstrap';

export const InformacjeoFirmie = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section">
                        <h3 className="page-title text-center">Informacje o firmie</h3>
                        <Card className="mt-3">
                            <Card.Body>
                                <p><strong>Nazwa:</strong> ABC Sp. z o.o.</p>
                                <p><strong>NIP:</strong> 123-456-78-90</p>
                                <p><strong>Adres:</strong> ul. Kosmiczna 7, Mars</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </Container>
    )
}