import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const WiadomosciSms = () => {
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);

    const handleMessageChange = (e) => {
        const text = e.target.value;
        setMessage(text);
        setCharCount(text.length);
    };

    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Wiadomości SMS</h3>
                    <p className="text-muted">Wysyłka i historia wiadomości SMS w 2025</p>
                </div>

                <Tabs defaultActiveKey="new" className="mb-3">
                    <Tab eventKey="new" title="Nowa wiadomość">
                        <div className="form-section mt-3">
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Odbiorcy*</Form.Label>
                                            <Form.Control as="textarea" rows={3} required />
                                            <Form.Text className="text-muted">
                                                Wpisz numery telefonów oddzielone przecinkami
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Szablon</Form.Label>
                                            <Form.Select>
                                                <option>Wybierz szablon...</option>
                                                <option>Potwierdzenie zamówienia</option>
                                                <option>Przypomnienie o płatności</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="form-label">Treść wiadomości*</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        maxLength={160}
                                        value={message}
                                        onChange={handleMessageChange}
                                        required
                                    />
                                    <div className="text-end mt-1">
                                        <span className={charCount > 160 ? 'text-danger' : 'text-muted'}>
                                            {charCount}/160 znaków
                                        </span>
                                    </div>
                                </Form.Group>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Wyczyść
                                    </Button>
                                    <Button variant="success">
                                        <i className="bi bi-send me-1"></i> Wyślij SMS
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>

                    <Tab eventKey="history" title="Historia">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Control
                                        type="date"
                                        className="me-2"
                                        style={{ maxWidth: '200px' }}
                                        max="2025-12-31"
                                    />
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj wiadomości..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data wysłania</th>
                                        <th>Odbiorca</th>
                                        <th>Treść</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.01.2025 14:30</td>
                                        <td>+48 123 456 789</td>
                                        <td>Potwierdzenie zamówienia nr 2025/001</td>
                                        <td><Badge bg="success">Wysłano</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Wysłano w 2025:</strong> 248 SMS
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnia wiadomość:</strong> 15.01.2025
                    </div>
                    <Button variant="outline-primary" className="submit-btn mt-2">
                        Pełne statystyki
                    </Button>
                </div>
            </Container>
        </div>
    );
};