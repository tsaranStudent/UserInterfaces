import React from 'react';
import {
    Container, Tabs, Tab, Table, Form, Row, Col, Button,
    Badge, Card, ListGroup, Alert
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next'; 

export const SkrzynkaOperatora = () => {
    const { t } = useTranslation(); 

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-inbox-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('skrzynkaOperatora.title')}</h1>
                        <p className="text-muted">{t('skrzynkaOperatora.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="wiadomosci" className="mb-3">
                        <Tab eventKey="wiadomosci" title={<><i className="bi bi-envelope-fill me-1" />{t('skrzynkaOperatora.tabs.messages')}</>}>
                            <div className="form-section">
                                <div className="actions-bar">
                                    <div className="actions-bar-start">
                                        <Form.Select style={{ maxWidth: '200px' }}>
                                            <option>{t('skrzynkaOperatora.messages.filter.allTypes')}</option>
                                            <option>{t('skrzynkaOperatora.messages.filter.system')}</option>
                                            <option>{t('skrzynkaOperatora.messages.filter.users')}</option>
                                        </Form.Select>
                                    </div>
                                    <div className="actions-bar-end">
                                        <Button variant="primary">
                                            <i className="bi bi-envelope-plus me-1" /> {t('skrzynkaOperatora.messages.newMessageButton')}
                                        </Button>
                                    </div>
                                </div>

                                <ListGroup>
                                    {[
                                        {
                                            tytulKey: 'systemFailureUrgent',
                                            trescKey: 'erpDowntime',
                                            autorKey: 'systemAdmin',
                                            data: '10.03.2025',
                                            badge: 'danger'
                                        },
                                        {
                                            tytulKey: 'dataVerificationRequest',
                                            trescKey: 'checkClientXYZ',
                                            autorKey: 'annaNowak',
                                            data: '08.03.2025',
                                            badge: null
                                        }
                                    ].map((msg, i) => (
                                        <ListGroup.Item key={i} className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1">{t(`skrzynkaOperatora.messages.list.${msg.tytulKey}`)}</h6>
                                                <p className="mb-1">{t(`skrzynkaOperatora.messages.list.${msg.trescKey}`)}</p>
                                                <small className="text-muted">{t(`skrzynkaOperatora.messages.list.${msg.autorKey}`)}, {msg.data}</small>
                                            </div>
                                            {msg.badge && <Badge bg={msg.badge}>{t('skrzynkaOperatora.messages.newBadge')}</Badge>}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Tab>

                        <Tab eventKey="zadania" title={<><i className="bi bi-check2-square me-1" />{t('skrzynkaOperatora.tabs.tasks')}</>}>
                            <div className="form-section">
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('skrzynkaOperatora.tasks.table.task')}</th>
                                            <th>{t('skrzynkaOperatora.tasks.table.priority')}</th>
                                            <th>{t('skrzynkaOperatora.tasks.table.deadline')}</th>
                                            <th>{t('skrzynkaOperatora.tasks.table.status')}</th>
                                            <th>{t('skrzynkaOperatora.tasks.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                taskKey: 'verifyContractorData',
                                                priorityKey: 'high', badgeP: 'danger',
                                                termin: '20.03.2025',
                                                statusKey: 'inProgress', badgeS: 'warning',
                                                actionKey: 'complete', variant: 'success'
                                            },
                                            {
                                                taskKey: 'documentUpdate',
                                                priorityKey: 'normal', badgeP: 'info',
                                                termin: '30.04.2025',
                                                statusKey: 'new', badgeS: 'secondary',
                                                actionKey: 'start', variant: 'primary'
                                            }
                                        ].map((z, i) => (
                                            <tr key={i}>
                                                <td>{t(`skrzynkaOperatora.tasks.list.${z.taskKey}`)}</td>
                                                <td><Badge bg={z.badgeP}>{t(`skrzynkaOperatora.tasks.priorities.${z.priorityKey}`)}</Badge></td>
                                                <td>{z.termin}</td>
                                                <td><Badge bg={z.badgeS}>{t(`skrzynkaOperatora.tasks.statuses.${z.statusKey}`)}</Badge></td>
                                                <td><Button size="sm" variant={`outline-${z.variant}`}>{t(`skrzynkaOperatora.tasks.actions.${z.actionKey}`)}</Button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>

                        <Tab eventKey="powiadomienia" title={<><i className="bi bi-bell-fill me-1" />{t('skrzynkaOperatora.tabs.notifications')}</>}>
                            <div className="form-section">
                                <Alert variant="info" className="d-flex justify-content-between align-items-center">
                                    <span><i className="bi bi-exclamation-circle me-1" /> {t('skrzynkaOperatora.notifications.newSystemVersion')}</span>
                                    <Button variant="outline-info" size="sm">{t('skrzynkaOperatora.notifications.detailsButton')}</Button>
                                </Alert>

                                <ListGroup>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span><i className="bi bi-person-check me-1" />{t('skrzynkaOperatora.notifications.ticketAssigned', { ticketId: '2456' })}</span>
                                        <small className="text-muted">05.03.2025</small>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span><i className="bi bi-person-plus me-1" />{t('skrzynkaOperatora.notifications.newUserApproval')}</span>
                                        <small className="text-muted">03.03.2025</small>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <div className="summary-text">
                            <i className="bi bi-envelope-open-fill me-1" /><strong>{t('skrzynkaOperatora.summary.unreadMessages')}:</strong> 3
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-clipboard2-check-fill me-1" /><strong>{t('skrzynkaOperatora.summary.unresolvedTasks')}:</strong> 5
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};