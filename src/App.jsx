import './App.css';
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Form, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Sekcja powitalna */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-house-door icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-box-seam me-1" aria-hidden="true" />
                        {t('homePage.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('homePage.subtitle')} <span className="text-primary">{t('homePage.changeCompany')}</span>
                    </p>
                    <Form className="mt-4 d-inline-block" style={{ minWidth: 250 }}>
                        <Form.Label className="mb-2">
                            <i className="bi bi-building me-1" />{t('homePage.selectCompany')}:
                        </Form.Label>
                        <Form.Select>
                            <option>{t('homePage.companies.system')}</option>
                            <option>{t('homePage.companies.contractors')}</option>
                            <option>{t('homePage.companies.invoices')}</option>
                        </Form.Select>
                    </Form>
                </div>

                {/* Karty modułów */}
                <div className="form-section">
                    <h2 className="page-title text-center mb-4">
                        <i className="bi bi-grid-1x2 me-2" />{t('homePage.mainModules')}
                    </h2>
                    <Row className="mb-3">
                        {['contractors', 'invoices', 'products', 'reports'].map((module, index) => (
                            <Col md={3} sm={6} xs={12} className="mb-3" key={index}>
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className={`bi bi-${t(`homePage.modules.${module}.icon`)} display-5 text-${t(`homePage.modules.${module}.color`)} mb-3`} />
                                        <Card.Title>{t(`homePage.modules.${module}.title`)}</Card.Title>
                                        <Card.Text className="text-muted">{t(`homePage.modules.${module}.description`)}</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />{t('homePage.ui.goTo')}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Szybki dostęp */}
                    <div className="text-center mb-4">
                        <Form.Select className="d-inline-block" style={{ width: '250px' }}>
                            <option value="">{t('homePage.ui.quickAccess')}</option>
                            <option value="settings">{t('homePage.settings.system')}</option>
                            <option value="help">{t('homePage.help.faq')}</option>
                            <option value="logout">{t('homePage.user.logout')}</option>
                        </Form.Select>
                    </div>
                </div>

                {/* Aktualności i statystyki */}
                <Row className="mb-4">
                    <Col md={8}>
                        <div className="form-section">
                            <h2 className="page-title mb-3">
                                <i className="bi bi-megaphone me-2" />{t('homePage.news.title')}
                            </h2>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        <i className="bi bi-stars me-2" />{t('homePage.news.latestUpdates')}
                                    </Card.Title>
                                    <ListGroup variant="flush">
                                        {t('homePage.news.items', { returnObjects: true }).map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <i className={`bi bi-${item.icon} me-2`} />{item.text}
                                                <Badge bg={item.badgeColor} pill className="ms-2">{item.badgeText}</Badge>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-section">
                            <h2 className="page-title mb-3">
                                <i className="bi bi-bar-chart-steps me-2" />{t('homePage.stats.title')}
                            </h2>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Table borderless className="mb-3">
                                        <tbody>
                                            {t('homePage.stats.items', { returnObjects: true }).map((stat, index) => (
                                                <tr key={index}>
                                                    <td><i className={`bi bi-${stat.icon} me-2 text-${stat.color}`} />{stat.label}</td>
                                                    <td className="text-end"><Badge bg={stat.color}>{stat.value}</Badge></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <Button variant="success" className="w-100">
                                        <i className="bi bi-send-check me-1" />{t('homePage.ui.showAll')}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

                {/* Stopka */}
                <div className="text-center text-muted small mt-4">
                    <i className="bi bi-info-circle me-1" />
                    {t('homePage.footer.about')} | <a href="/docs" className="text-muted ms-1">{t('homePage.footer.docs')}</a>
                </div>
            </Container>
        </div>
    );
}

export default App;