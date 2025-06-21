import React from 'react';
import { Container, Card, Alert, Button, ProgressBar, ListGroup, Badge } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const OdswierzKonfiguracje = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-arrow-clockwise icon-unified mb-2" />
                        <h1 className="page-title">{t('odswierzKonfiguracje.title')}</h1>
                        <p className="text-muted">{t('odswierzKonfiguracje.subtitle')}</p>
                    </div>

                    {/* Główna karta */}
                    <Card className="shadow-sm">
                        <Card.Body>
                            {/* Status systemu */}
                            <Alert variant="info" className="text-center d-flex justify-content-center align-items-center">
                                <i className="bi bi-info-circle me-2" />
                                <strong>{t('odswierzKonfiguracje.status')}</strong>
                            </Alert>

                            {/* Lista zmian */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">
                                        <i className="bi bi-list-check me-2" />{t('odswierzKonfiguracje.changesHeader')}
                                    </h5>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-file-earmark-bar-graph me-1" />{t('odswierzKonfiguracje.change1')}</span>
                                            <Badge bg="warning"><i className="bi bi-exclamation-triangle me-1" />{t('odswierzKonfiguracje.badge1')}</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-percent me-1" />{t('odswierzKonfiguracje.change2')}</span>
                                            <Badge bg="success"><i className="bi bi-check-circle me-1" />{t('odswierzKonfiguracje.badge2')}</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-bank me-1" />{t('odswierzKonfiguracje.change3')}</span>
                                            <Badge bg="danger"><i className="bi bi-x-circle me-1" />{t('odswierzKonfiguracje.badge3')}</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span><i className="bi bi-cloud-arrow-up me-1" />{t('odswierzKonfiguracje.change4')}</span>
                                            <Badge bg="info"><i className="bi bi-cloud-check me-1" />{t('odswierzKonfiguracje.badge4')}</Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                            {/* Postęp odświeżania */}
                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">
                                        <i className="bi bi-clock-history me-1" />{t('odswierzKonfiguracje.progressTitle')}
                                    </h5>
                                    <span>65%</span>
                                </div>
                                <ProgressBar now={65} className="mb-3" />
                                <small className="text-muted">
                                    <i className="bi bi-calendar-event me-1" />
                                    {t('odswierzKonfiguracje.lastUpdate')}
                                </small>
                            </div>

                            {/* Przyciski akcji */}
                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="primary" size="lg">
                                    <i className="bi bi-arrow-repeat me-1" />{t('odswierzKonfiguracje.refreshNow')}
                                </Button>
                                <Button variant="outline-secondary" size="lg">
                                    <i className="bi bi-clock me-1" />{t('odswierzKonfiguracje.scheduleLater')}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Komunikat końcowy */}
                    <Alert variant="warning" className="mt-3 text-center d-flex justify-content-center align-items-center">
                        <i className="bi bi-exclamation-triangle me-2" />
                        {t('odswierzKonfiguracje.finalWarning')}
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};
