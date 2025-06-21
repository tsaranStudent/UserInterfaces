import React from 'react';
import {
    Container, Form, Row, Col, Button, Card,
    Accordion, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next'; 

export const NowyDokument = () => {
    const { t } = useTranslation(); 

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-file-earmark-plus-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('nowyDokument.title')}</h1>
                        <p className="text-muted">{t('nowyDokument.subtitle')}</p>
                    </div>

                    <Card className="form-section mb-4">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Label><i className="bi bi-file-text me-1" /> {t('nowyDokument.form.documentName')}</Form.Label>
                                        <Form.Control placeholder={t('nowyDokument.form.enterNamePlaceholder')} />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label><i className="bi bi-layers me-1" /> {t('nowyDokument.form.type')}</Form.Label>
                                        <Form.Select>
                                            <option>{t('nowyDokument.form.types.invoice')}</option>
                                            <option>{t('nowyDokument.form.types.contract')}</option>
                                            <option>{t('nowyDokument.form.types.report')}</option>
                                            <option>{t('nowyDokument.form.types.memo')}</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label><i className="bi bi-building me-1" /> {t('nowyDokument.form.department')}</Form.Label>
                                        <Form.Select>
                                            <option>{t('nowyDokument.form.departments.finance')}</option>
                                            <option>{t('nowyDokument.form.departments.hr')}</option>
                                            <option>{t('nowyDokument.form.departments.it')}</option>
                                            <option>{t('nowyDokument.form.departments.marketing')}</option>
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label><i className="bi bi-pencil-square me-1" /> {t('nowyDokument.form.description')}</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder={t('nowyDokument.form.descriptionPlaceholder')} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Label><i className="bi bi-paperclip me-1" /> {t('nowyDokument.form.attachment')}</Form.Label>
                                        <Form.Control type="file" />
                                        <Form.Text muted>{t('nowyDokument.form.maxSize')}</Form.Text>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label><i className="bi bi-calendar me-1" /> {t('nowyDokument.form.date')}</Form.Label>
                                        <Form.Control type="date" max="2025-12-31" />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label><i className="bi bi-exclamation-circle me-1" /> {t('nowyDokument.form.priority')}</Form.Label>
                                        <Form.Select>
                                            <option>{t('nowyDokument.form.priorities.normal')}</option>
                                            <option>{t('nowyDokument.form.priorities.high')}</option>
                                            <option>{t('nowyDokument.form.priorities.critical')}</option>
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <Accordion className="mb-4">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><i className="bi bi-sliders me-2" />{t('nowyDokument.form.additionalOptions')}</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col md={4}>
                                                    <Form.Check type="checkbox" label={t('nowyDokument.form.requireApproval')} defaultChecked />
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Check type="checkbox" label={t('nowyDokument.form.confidentialDocument')} />
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Check type="checkbox" label={t('nowyDokument.form.notifyTeam')} />
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="d-flex justify-content-between">
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-arrow-left me-1" /> {t('nowyDokument.buttons.cancel')}
                                    </Button>
                                    <div>
                                        <Button variant="outline-primary" className="me-2">
                                            <i className="bi bi-eye me-1" /> {t('nowyDokument.buttons.preview')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" /> {t('nowyDokument.buttons.save')}
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>

                    {/* Szybkie skróty */}
                    <Card>
                        <Card.Body>
                            <h5 className="mb-3"><i className="bi bi-lightning-charge-fill me-1" />{t('nowyDokument.quickCreate.title')}</h5>
                            <Row>
                                {[
                                    { labelKey: 'newInvoice', icon: 'file-earmark-text', variant: 'outline-success' },
                                    { labelKey: 'newContract', icon: 'file-earmark-check', variant: 'outline-info' },
                                    { labelKey: 'newReport', icon: 'file-earmark-bar-graph', variant: 'outline-warning' },
                                    { labelKey: 'memo', icon: 'file-earmark-medical', variant: 'outline-dark' }
                                ].map((item, i) => (
                                    <Col md={3} key={i}>
                                        <Button className="w-100 mb-2" variant={item.variant}>
                                            <i className={`bi bi-${item.icon} me-1`} /> {t(`nowyDokument.quickCreate.${item.labelKey}`)}
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </Container>
    );
};