import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Tabs, Tab, Row, Col, Table, Button, Accordion, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Cennik = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-tags icon-unified mb-2" />
                        <h1 className="page-title">{t('cennik.title')}</h1>
                        <p className="text-muted">{t('cennik.subtitle')}</p>
                    </div>

                    {/* Zakładki cennika */}
                    <Tabs defaultActiveKey="products" id="price-tabs" className="mb-4">
                        <Tab eventKey="products" title={t('cennik.tabs.products')}>
                            {/* Panel akcji produktów */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-plus-lg me-1" /> {t('cennik.actions.newPrice')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-arrow-repeat me-1" /> {t('cennik.actions.updatePrices')}
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-printer me-1" /> {t('cennik.actions.print')}
                                    </Button>
                                    <Button variant="outline-success">
                                        <i className="bi bi-file-excel me-1" /> {t('cennik.actions.export')}
                                    </Button>
                                </div>
                            </div>
                            {/* Tabela produktów */}
                            <Table bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('cennik.table.name')}</th>
                                        <th>{t('cennik.table.from')}</th>
                                        <th>{t('cennik.table.to')}</th>
                                        <th>{t('cennik.table.currency')}</th>
                                        <th>{t('cennik.table.items')}</th>
                                        <th>{t('cennik.table.status')}</th>
                                        <th>{t('cennik.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {['1', '2', '3', '4'].map(key => (
                                        <tr key={key}>
                                            <td>{t(`cennik.products.${key}.name`)}</td>
                                            <td>{t(`cennik.products.${key}.from`)}</td>
                                            <td>{t(`cennik.products.${key}.to`)}</td>
                                            <td>{t(`cennik.products.${key}.currency`)}</td>
                                            <td>{t(`cennik.products.${key}.items`)}</td>
                                            <td>
                                                <span className={`badge badge-${t(`cennik.products.${key}.statusVariant`)}`}>
                                                    {t(`cennik.products.${key}.statusText`)}
                                                </span>
                                            </td>
                                            <td>
                                                <Button size="sm">
                                                    <i className="bi bi-eye" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="services" title={t('cennik.tabs.services')}>
                            {/* Panel akcji usług */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-plus-lg me-1" /> {t('cennik.actions.newPrice')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-people me-1" /> {t('cennik.actions.groups')}
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-printer me-1" /> {t('cennik.actions.print')}
                                    </Button>
                                    <Button variant="outline-success">
                                        <i className="bi bi-file-excel me-1" /> {t('cennik.actions.export')}
                                    </Button>
                                </div>
                            </div>
                            {/* Tabela usług */}
                            <Table bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('cennik.table.name')}</th>
                                        <th>{t('cennik.table.from')}</th>
                                        <th>{t('cennik.table.to')}</th>
                                        <th>{t('cennik.table.currency')}</th>
                                        <th>{t('cennik.table.items')}</th>
                                        <th>{t('cennik.table.status')}</th>
                                        <th>{t('cennik.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {['1', '2', '3', '4'].map(key => (
                                        <tr key={key}>
                                            <td>{t(`cennik.services.${key}.name`)}</td>
                                            <td>{t(`cennik.services.${key}.from`)}</td>
                                            <td>{t(`cennik.services.${key}.to`)}</td>
                                            <td>{t(`cennik.services.${key}.currency`)}</td>
                                            <td>{t(`cennik.services.${key}.items`)}</td>
                                            <td>
                                                <span className={`badge badge-${t(`cennik.services.${key}.statusVariant`)}`}>
                                                    {t(`cennik.services.${key}.statusText`)}
                                                </span>
                                            </td>
                                            <td>
                                                <Button size="sm">
                                                    <i className="bi bi-eye" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>

                    {/* Formularz dodawania */}
                    <Accordion className="mt-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('cennik.new.header')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Control placeholder={t('cennik.new.placeholder')} />
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control type="date" />
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control type="date" />
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="outline-secondary">{t('cennik.new.cancel')}</Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" /> {t('cennik.new.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie */}
                    <Container className="mt-4">
                        <div className="summary-box">
                            <p>
                                <strong>{t('cennik.summary.total')}</strong>{' '}
                                {t('cennik.summary.totalValue')}
                            </p>
                            <p>
                                <strong>{t('cennik.summary.active')}</strong>{' '}
                                {t('cennik.summary.activeValue')}
                            </p>
                            <p>
                                <strong>{t('cennik.summary.lastUpdate')}</strong>{' '}
                                {t('cennik.summary.lastUpdateValue')}
                            </p>
                            <Button variant="outline-primary" className="mt-2">
                                <i className="bi bi-clock-history me-1" /> {t('cennik.summary.history')}
                            </Button>
                        </div>
                    </Container>
                </Container>
            </div>
        </Container>
    );
};
