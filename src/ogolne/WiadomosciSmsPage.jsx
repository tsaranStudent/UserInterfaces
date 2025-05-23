import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col, Tabs, Tab, Form, InputGroup, Button, Badge, Accordion, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const WiadomosciSms = () => {
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);

    const handleMessageChange = (e) => {
        const text = e.target.value;
        setMessage(text);
        setCharCount(text.length);
    };

    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-chat-dots icon-unified mb-2" />
                <h1 className="page-title">Wiadomości SMS</h1>
                <p className="text-muted">Wysyłka i historia wiadomości SMS w 2025</p>
            </div>

            {/* Zakładki */}
            <Tabs defaultActiveKey="new" className="mb-4">
                <Tab eventKey="new" title={<><i className="bi bi-pencil-square me-1" />Nowa wiadomość</>}>
                    {/* Formularz nowej wiadomości */}
                    <div className="form-section mt-3">
                        <Form>
                            <Row className="mb-3 g-3">
                                <Col md={6}>
                                    <Form.Group controlId="smsRecipients">
                                        <Form.Label>
                                            <i className="bi bi-people me-1" />Odbiorcy*
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required />
                                        <Form.Text className="text-muted">
                                            Wpisz numery telefonów oddzielone przecinkami
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="smsTemplate">
                                        <Form.Label>
                                            <i className="bi bi-file-earmark-text me-1" />Szablon
                                        </Form.Label>
                                        <Form.Select>
                                            <option>Wybierz szablon...</option>
                                            <option>Potwierdzenie zamówienia</option>
                                            <option>Przypomnienie o płatności</option>
                                            <option>Promocja sezonowa</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="smsContent" className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-chat-text me-1" />Treść wiadomości*
                                </Form.Label>
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
                            <div className="actions-bar-end d-flex justify-content-end gap-2">
                                <Button variant="outline-secondary">
                                    <i className="bi bi-eraser me-1" /> Wyczyść
                                </Button>
                                <Button variant="success">
                                    <i className="bi bi-send me-1" /> Wyślij SMS
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>

                <Tab eventKey="history" title={<><i className="bi bi-clock-history me-1" />Historia</>}>
                    {/* Historia wiadomości */}
                    <div className="form-section mt-3">
                        <div className="actions-bar mb-3 d-flex justify-content-between">
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

                        {/* Tabela historii wiadomości */}
                        <Table striped bordered hover responsive className="data-table mb-4">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-calendar me-1" />Data wysłania</th>
                                    <th><i className="bi bi-person me-1" />Odbiorca</th>
                                    <th><i className="bi bi-chat-left-text me-1" />Treść</th>
                                    <th><i className="bi bi-patch-check me-1" />Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15.01.2025 14:30</td>
                                    <td>+48 123 456 789</td>
                                    <td>Potwierdzenie zamówienia nr 2025/001</td>
                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />Wysłano</Badge></td>
                                </tr>
                                <tr>
                                    <td>14.01.2025 09:21</td>
                                    <td>+48 501 234 567</td>
                                    <td>Przypomnienie o płatności za FV/2025/12</td>
                                    <td><Badge bg="warning"><i className="bi bi-hourglass-split me-1" />Oczekuje</Badge></td>
                                </tr>
                                <tr>
                                    <td>13.01.2025 16:05</td>
                                    <td>+48 789 654 321</td>
                                    <td>Promocja sezonowa – tylko dziś -20%</td>
                                    <td><Badge bg="danger"><i className="bi bi-x-circle me-1" />Błąd</Badge></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>
            </Tabs>

            {/* Podsumowanie */}
            <div className="summary-box mt-4">
                <p>
                    <i className="bi bi-chat-square-text me-2" />
                    <strong>Wysłano w 2025:</strong> 248 SMS
                </p>
                <p>
                    <i className="bi bi-clock me-2" />
                    <strong>Ostatnia wiadomość:</strong> 15.01.2025
                </p>
                <Button variant="outline-primary" className="submit-btn mt-2">
                    <i className="bi bi-bar-chart-line me-1" /> Pełne statystyki
                </Button>
            </div>
        </Container>
    );
};
