import React from 'react';
import { Container, Row, Col, Card, Alert, Button, ProgressBar, Table, Badge } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const KoniecPracy = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-door-closed icon-unified mb-2" />
                        <h1 className="page-title">{t('koniecPracy.title')}</h1>
                        <p className="text-muted">{t('koniecPracy.subtitle')}</p>
                    </div>

                    {/* Główna karta */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            {/* Alert ostrzegawczy */}
                            <Alert variant="warning" className="text-center d-flex align-items-center justify-content-center">
                                <i className="bi bi-exclamation-triangle me-2" />
                                <h5 className="mb-0">{t('koniecPracy.warning')}</h5>
                            </Alert>

                            {/* Niezapisane zmiany i aktywne procesy */}
                            <Row className="mb-4">
                                <Col md={6}>
                                    <div className="form-section">
                                        <h5><i className="bi bi-pencil-square me-1" />{t('koniecPracy.unsavedHeader')}</h5>
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-folder me-1" />{t('koniecPracy.table.module')}</th>
                                                    <th><i className="bi bi-info-circle me-1" />{t('koniecPracy.table.status')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('koniecPracy.unsaved1.module')}</td>
                                                    <td>
                                                        <Badge bg="success"><i className="bi bi-check-circle me-1" />{t('koniecPracy.unsaved1.status')}</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t('koniecPracy.unsaved2.module')}</td>
                                                    <td>
                                                        <Badge bg="danger"><i className="bi bi-x-circle me-1" />{t('koniecPracy.unsaved2.status')}</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t('koniecPracy.unsaved3.module')}</td>
                                                    <td>
                                                        <Badge bg="warning"><i className="bi bi-hourglass-split me-1" />{t('koniecPracy.unsaved3.status')}</Badge>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-section">
                                        <h5><i className="bi bi-arrow-repeat me-1" />{t('koniecPracy.activeHeader')}</h5>
                                        <div className="mb-3">
                                            <p>
                                                <i className="bi bi-bar-chart me-1" />
                                                {t('koniecPracy.active1.text')} <strong>({t('koniecPracy.active1.percent')}%)</strong>
                                            </p>
                                            <ProgressBar now={parseInt(t('koniecPracy.active1.percent'))} variant="info" className="mb-3" />
                                        </div>
                                        <div className="mb-3">
                                            <p>
                                                <i className="bi bi-arrow-clockwise me-1" />
                                                {t('koniecPracy.active2.text')} <strong>({t('koniecPracy.active2.percent')}%)</strong>
                                            </p>
                                            <ProgressBar now={parseInt(t('koniecPracy.active2.percent'))} variant="warning" className="mb-3" />
                                        </div>
                                        <Alert variant="secondary" className="d-flex align-items-center">
                                            <i className="bi bi-lightbulb me-2" />
                                            {t('koniecPracy.activeWarning')}
                                        </Alert>
                                    </div>
                                </Col>
                            </Row>

                            {/* Statystyki dzienne */}
                            <div className="form-section">
                                <h5><i className="bi bi-graph-up me-1" />{t('koniecPracy.dailyHeader')} ({t('koniecPracy.dailyDate')})</h5>
                                <Row>
                                    {['1', '2', '3', '4'].map(key => (
                                        <Col key={key} md={3} className="text-center">
                                            <Card className="mb-3">
                                                <Card.Body>
                                                    <i className={`${t(`koniecPracy.stats${key}.icon`)} mb-2 display-6 d-block`} />
                                                    <h6>{t(`koniecPracy.stats${key}.label`)}</h6>
                                                    <p className="display-6">{t(`koniecPracy.stats${key}.value`)}</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            {/* Przyciski akcji */}
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <Button variant="danger" size="lg">
                                    <i className="bi bi-box-arrow-right me-1" />{t('koniecPracy.actions.logout')}
                                </Button>
                                <Button variant="outline-secondary" size="lg">
                                    <i className="bi bi-x-circle me-1" />{t('koniecPracy.actions.cancel')}
                                </Button>
                                <Button variant="outline-primary" size="lg">
                                    <i className="bi bi-save me-1" />{t('koniecPracy.actions.saveContinue')}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Informacja o kopii zapasowej */}
                    <Alert variant="info" className="text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-cloud-arrow-down me-2" />
                        {t('koniecPracy.backupInfo')}
                    </Alert>

                </Container>
            </div>
        </Container>
    );
};
