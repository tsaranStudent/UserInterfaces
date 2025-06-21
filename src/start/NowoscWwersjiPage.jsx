import React from 'react';
import { Container, Card, ListGroup, Badge, Alert, ProgressBar, Button } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const NowoscWwersji = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-stars icon-unified mb-2" />
                        <h1 className="page-title">{t('nowoscWwersji.title')}</h1>
                        <p className="text-muted">{t('nowoscWwersji.subtitle')}</p>
                    </div>

                    {/* Najważniejsze zmiany */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-3">
                                <i className="bi bi-lightning-charge me-2" />{t('nowoscWwersji.changesHeader')}
                            </h5>
                            <ListGroup variant="flush">
                                {['1', '2', '3', '4'].map(key => (
                                    <ListGroup.Item key={key} className="d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                <i className={`bi ${t(`nowoscWwersji.change${key}.icon`)} me-1`} />
                                                {t(`nowoscWwersji.change${key}.title`)}
                                            </div>
                                            <small className="text-muted">{t(`nowoscWwersji.change${key}.desc`)}</small>
                                        </div>
                                        <Badge bg={t(`nowoscWwersji.change${key}.badgeVariant`)} pill>
                                            <i className={`bi ${t(`nowoscWwersji.change${key}.badgeIcon`)} me-1`} />
                                            {t(`nowoscWwersji.change${key}.badgeText`)}
                                        </Badge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Planowane funkcje */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-3">
                                <i className="bi bi-calendar-plus me-2" />{t('nowoscWwersji.plannedHeader')}
                            </h5>
                            {['1', '2', '3'].map(key => (
                                <div key={key} className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span>
                                            <i className={`bi ${t(`nowoscWwersji.planned${key}.icon`)} me-1`} />
                                            {t(`nowoscWwersji.planned${key}.title`)}
                                        </span>
                                        <small>{t(`nowoscWwersji.planned${key}.progress`)}</small>
                                    </div>
                                    <ProgressBar
                                        now={parseInt(t(`nowoscWwersji.planned${key}.progress`), 10)}
                                        variant={t(`nowoscWwersji.planned${key}.variant`)}
                                        className="mb-3"
                                    />
                                    <small className="text-muted">{t(`nowoscWwersji.planned${key}.schedule`)}</small>
                                </div>
                            ))}
                            <Badge bg="warning" className="me-2">
                                <i className="bi bi-tools me-1" />{t('nowoscWwersji.badges.inProgress')}
                            </Badge>
                            <Badge bg="secondary">
                                <i className="bi bi-hourglass-split me-1" />{t('nowoscWwersji.badges.beta')}
                            </Badge>
                        </Card.Body>
                    </Card>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-center gap-3">
                        <Button variant="primary">
                            <i className="bi bi-journal-text me-1" />{t('nowoscWwersji.actions.details')}
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-x-circle me-1" />{t('nowoscWwersji.actions.skip')}
                        </Button>
                    </div>

                    {/* Informacja końcowa */}
                    <Alert variant="info" className="mt-3 text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-info-circle me-2" />
                        {t('nowoscWwersji.footerInfo')}
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};
