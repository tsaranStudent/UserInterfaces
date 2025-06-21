import React from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const Logowanie = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl d-flex justify-content-center align-items-center mt-2 mb-2" style={{ minHeight: '80vh' }}>
            <div className="background p-3 w-100" style={{ maxWidth: '500px' }}>
                <Card className="shadow-lg">
                    <Card.Body>
                        {/* Nagłówek sekcji z ikoną */}
                        <div className="text-center mb-4">
                            <i className="bi bi-person-circle display-4 mb-2" />
                            <h2 className="page-title">{t('logowanie.title')}</h2>
                            <p className="text-muted">{t('logowanie.subtitle')}</p>
                        </div>

                        {/* Formularz logowania */}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-person me-1" />{t('logowanie.labelLogin')}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={t('logowanie.placeholderLogin')}
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-shield-lock me-1" />{t('logowanie.labelPassword')}
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder={t('logowanie.placeholderPassword')}
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            {/* Wybór firmy */}
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-buildings me-1" />{t('logowanie.labelCompany')}
                                </Form.Label>
                                <Form.Select className="form-control-lg">
                                    <option>{t('logowanie.companyOptionPlaceholder')}</option>
                                    <option>{t('logowanie.company1')}</option>
                                    <option>{t('logowanie.company2')}</option>
                                    <option>{t('logowanie.company3')}</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label={<><i className="bi bi-bookmark-star me-1" />{t('logowanie.rememberMe')}</>}
                                />
                            </Form.Group>

                            <div className="d-grid gap-2 mb-3">
                                <Button variant="primary" size="lg">
                                    <i className="bi bi-box-arrow-in-right me-1" />{t('logowanie.submit')}
                                </Button>
                            </div>
                        </Form>

                        {/* Linki dodatkowe */}
                        <div className="d-flex justify-content-between">
                            <Button variant="link" className="p-0">
                                <i className="bi bi-question-circle me-1" />{t('logowanie.forgotPassword')}
                            </Button>
                            <Button variant="link" className="p-0">
                                <i className="bi bi-building-gear me-1" />{t('logowanie.changeCompany')}
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* Informacja o wersji */}
                <Alert variant="info" className="mt-3 text-center d-flex align-items-center justify-content-center">
                    <i className="bi bi-info-circle me-2" />
                    {t('logowanie.versionInfo')}
                </Alert>
            </div>
        </Container>
    );
};
