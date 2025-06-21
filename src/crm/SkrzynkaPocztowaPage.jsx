import React from 'react';
import {
    Container, Tabs, Tab, Table, Form, Row, Col,
    Button, Badge, Card, ListGroup, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const SkrzynkaPocztowa = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-envelope-paper-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('skrzynkaPocztowa.title')}</h1>
                        <p className="text-muted">{t('skrzynkaPocztowa.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="odebrane" className="mb-3">
                        <Tab eventKey="odebrane" title={<><i className="bi bi-inbox me-1" />{t('skrzynkaPocztowa.tabs.inbox')}</>}>
                            <div className="form-section">
                                <div className="actions-bar">
                                    <div className="actions-bar-start">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-arrow-clockwise me-1" />{t('skrzynkaPocztowa.inbox.refreshButton')}
                                        </Button>
                                        <Form.Select style={{ maxWidth: '180px' }}>
                                            <option>{t('skrzynkaPocztowa.inbox.filter.all')}</option>
                                            <option>{t('skrzynkaPocztowa.inbox.filter.unread')}</option>
                                            <option>{t('skrzynkaPocztowa.inbox.filter.flagged')}</option>
                                        </Form.Select>
                                    </div>
                                    <div className="actions-bar-end">
                                        <InputGroup className="search-input">
                                            <Form.Control placeholder={t('skrzynkaPocztowa.inbox.searchPlaceholder')} />
                                            <Button variant="outline-secondary">
                                                <i className="bi bi-search" />
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </div>

                                <ListGroup>
                                    <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <div className="fw-bold">{t('skrzynkaPocztowa.inbox.messages.orderConfirmation')}</div>
                                            <small className="text-muted">{t('skrzynkaPocztowa.inbox.messages.salesDepartment')} – 10.03.2025 14:30</small>
                                        </div>
                                        <Badge bg="primary" pill>{t('skrzynkaPocztowa.inbox.newBadge')}</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <div className="fw-bold">{t('skrzynkaPocztowa.inbox.messages.deliveryTermsChange')}</div>
                                        <small className="text-muted">{t('skrzynkaPocztowa.inbox.messages.logisticsDepartment')} – 08.03.2025 09:15</small>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Tab>

                        <Tab eventKey="wyslane" title={<><i className="bi bi-send-fill me-1" />{t('skrzynkaPocztowa.tabs.sent')}</>}>
                            <div className="form-section">
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-person-fill" /> {t('skrzynkaPocztowa.sent.table.recipient')}</th>
                                            <th><i className="bi bi-chat-text" /> {t('skrzynkaPocztowa.sent.table.subject')}</th>
                                            <th><i className="bi bi-calendar" /> {t('skrzynkaPocztowa.sent.table.date')}</th>
                                            <th><i className="bi bi-check2-circle" /> {t('skrzynkaPocztowa.sent.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>jan.kowalski@firma.pl</td>
                                            <td>{t('skrzynkaPocztowa.sent.subjects.offerInquiry')}</td>
                                            <td>05.03.2025 11:20</td>
                                            <td><Badge bg="success">{t('skrzynkaPocztowa.sent.statuses.delivered')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>anna.nowak@kontrahent.pl</td>
                                            <td>{t('skrzynkaPocztowa.sent.subjects.paymentConfirmation')}</td>
                                            <td>03.03.2025 16:45</td>
                                            <td><Badge bg="warning">{t('skrzynkaPocztowa.sent.statuses.sent')}</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>

                        <Tab eventKey="nowa" title={<><i className="bi bi-pencil-square me-1" />{t('skrzynkaPocztowa.tabs.newMessage')}</>}>
                            <div className="form-section">
                                <Card>
                                    <Card.Body>
                                        <Form>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="formRecipient">
                                                        <Form.Label>{t('skrzynkaPocztowa.newMessage.recipientLabel')}</Form.Label>
                                                        <Form.Control type="email" placeholder={t('skrzynkaPocztowa.newMessage.recipientPlaceholder')} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formSubject">
                                                        <Form.Label>{t('skrzynkaPocztowa.newMessage.subjectLabel')}</Form.Label>
                                                        <Form.Control type="text" placeholder={t('skrzynkaPocztowa.newMessage.subjectPlaceholder')} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group className="mb-3">
                                                <Form.Label>{t('skrzynkaPocztowa.newMessage.messageContentLabel')}</Form.Label>
                                                <Form.Control as="textarea" rows={5} />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>{t('skrzynkaPocztowa.newMessage.attachmentLabel')}</Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>

                                            <div className="d-flex justify-content-end">
                                                <Button variant="outline-secondary" className="me-2">
                                                    <i className="bi bi-x-lg me-1" />{t('skrzynkaPocztowa.newMessage.cancelButton')}
                                                </Button>
                                                <Button variant="primary">
                                                    <i className="bi bi-send-fill me-1" />{t('skrzynkaPocztowa.newMessage.sendButton')}
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <div className="summary-text">
                            <i className="bi bi-envelope-open me-1" /><strong>{t('skrzynkaPocztowa.summary.unreadMessages')}:</strong> 5 {t('skrzynkaPocztowa.summary.messagesCount')}
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-info-circle me-1" /><strong>{t('skrzynkaPocztowa.summary.systemVersion')}:</strong> 2.5.0
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};