import React from 'react';
import { Container, Card, Form, Button, Alert, Badge, ProgressBar } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const WlaczNoweFunkcje = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-rocket-takeoff icon-unified mb-2" />
                        <h1 className="page-title">{t('wlaczNoweFunkcje.title')}</h1>
                        <p className="text-muted">{t('wlaczNoweFunkcje.subtitle')}</p>
                    </div>

                    {/* Lista funkcji do aktywacji */}
                    <div className="form-section mb-4">
                        <h5 className="mb-3">
                            <i className="bi bi-toggle2-on me-2" />{t('wlaczNoweFunkcje.featuresHeader')}
                        </h5>

                        <Card className="mb-3">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">
                                        <i className="bi bi-bar-chart-steps me-1" />
                                        {t('wlaczNoweFunkcje.feature1.title')}
                                    </h6>
                                    <p className="text-muted mb-0">{t('wlaczNoweFunkcje.feature1.desc')}</p>
                                </div>
                                <Form.Check type="switch" id="analytics-switch" />
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">
                                        <i className="bi bi-bank me-1" />
                                        {t('wlaczNoweFunkcje.feature2.title')}
                                    </h6>
                                    <p className="text-muted mb-0">{t('wlaczNoweFunkcje.feature2.desc')}</p>
                                </div>
                                <Form.Check type="switch" id="banking-switch" />
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">
                                        <i className="bi bi-envelope-paper me-1" />
                                        {t('wlaczNoweFunkcje.feature3.title')}
                                    </h6>
                                    <p className="text-muted mb-0">{t('wlaczNoweFunkcje.feature3.desc')}</p>
                                </div>
                                <Form.Check type="switch" id="push-switch" />
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Funkcje w przygotowaniu */}
                    <div className="form-section mb-4">
                        <h5 className="mb-3">
                            <i className="bi bi-lightbulb me-2" />{t('wlaczNoweFunkcje.inProgressHeader')}
                        </h5>
                        <Card>
                            <Card.Body>
                                <h6>
                                    <i className="bi bi-robot me-1" />{t('wlaczNoweFunkcje.inProgress.title')}
                                </h6>
                                <p className="text-muted">{t('wlaczNoweFunkcje.inProgress.desc')}</p>
                                <ProgressBar now={25} label={t('wlaczNoweFunkcje.inProgress.progress')} className="mb-2" />
                                <Badge bg="secondary">
                                    <i className="bi bi-tools me-1" />{t('wlaczNoweFunkcje.inProgress.badge')}
                                </Badge>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="outline-secondary">
                            <i className="bi bi-x-circle me-1" />{t('wlaczNoweFunkcje.cancel')}
                        </Button>
                        <Button variant="primary">
                            <i className="bi bi-save me-1" />{t('wlaczNoweFunkcje.save')}
                        </Button>
                    </div>

                    {/* Komunikat */}
                    <Alert variant="info" className="mt-4 text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-exclamation-circle me-2" />
                        {t('wlaczNoweFunkcje.alert')}
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};
