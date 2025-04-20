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
import { Navbar, Nav, ListGroup } from 'react-bootstrap';

export const NowoscWwersji = () => {
    return (
        <Container fluid className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container fluid className="lang-pl mt-5" style={{ maxWidth: '500px' }}>
                    <div className="form-section">
                        <h3 className="page-title text-center">Nowości w wersji 2.5.0</h3>
                        <ListGroup className="mt-3">
                            <ListGroup.Item>Nowy moduł raportowy</ListGroup.Item>
                            <ListGroup.Item>Optymalizacja wydajności</ListGroup.Item>
                            <ListGroup.Item>Poprawki bezpieczeństwa</ListGroup.Item>
                            <ListGroup.Item>Pies sie obraził</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Container>
            </div>
        </Container>
    )
}