import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, Button, Table, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const GrupyTowarowe = () => {
    const { t } = useTranslation();

    // Mapa statusów na klasy badge
    const statusClasses = {
        active: 'badge-success',
        planned: 'badge-planned',
        inactive: 'badge-inactive',
        'w-realizacji': 'badge-w-realizacji',
        danger: 'badge-danger'
    };

    // Przykładowe dane grup towarowych
    const groups = [
        { code: 'EL', name: 'Elektronika', count: 120, created: '05.02.2025', status: 'active' },
        { code: 'BIU', name: 'Biurowe', count: 80, created: '12.01.2025', status: 'active' },
        { code: 'HIG', name: 'Higiena', count: 45, created: '20.03.2025', status: 'planned' },
        { code: 'RTV', name: 'RTV', count: 60, created: '28.03.2025', status: 'inactive' }
    ];

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener z tłem */}
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-tags icon-unified mb-2" />
                        <h1 className="page-title">{t('grupyTowarowe.title')}</h1>
                        <p className="text-muted">{t('grupyTowarowe.subtitle')}</p>
                    </div>

                    {/* Pasek akcji i wyszukiwarka */}
                    <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                        <Button variant="success">
                            <i className="bi bi-plus-lg me-1" /> {t('grupyTowarowe.actions.newGroup')}
                        </Button>
                        <Form.Control
                            type="text"
                            placeholder={t('grupyTowarowe.actions.searchPlaceholder')}
                            className="search-input w-25"
                        />
                    </div>

                    {/* Tabela grup towarowych */}
                    <Table bordered hover responsive className="data-table mb-4">
                        <thead>
                            <tr>
                                <th>{t('grupyTowarowe.table.code')}</th>
                                <th>{t('grupyTowarowe.table.name')}</th>
                                <th>{t('grupyTowarowe.table.count')}</th>
                                <th>{t('grupyTowarowe.table.created')}</th>
                                <th>{t('grupyTowarowe.table.status')}</th>
                                <th>{t('grupyTowarowe.table.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((grp, idx) => (
                                <tr key={idx}>
                                    <td>{grp.code}</td>
                                    <td>{grp.name}</td>
                                    <td>{grp.count}</td>
                                    <td>{grp.created}</td>
                                    <td>
                                        <span className={`badge ${statusClasses[grp.status] || 'badge-secondary'}`}>
                                            {t(`grupyTowarowe.statuses.${grp.status}`)}
                                        </span>
                                    </td>
                                    <td>
                                        <Button size="sm">
                                            <i className="bi bi-pencil" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* Sekcja dodawania nowej grupy */}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('grupyTowarowe.add.header')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Control
                                                placeholder={t('grupyTowarowe.add.placeholderName')}
                                                required
                                            />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control
                                                placeholder={t('grupyTowarowe.add.placeholderCode')}
                                                required
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Select required>
                                                <option value="">
                                                    {t('grupyTowarowe.add.placeholderType')}
                                                </option>
                                                {Object.entries(
                                                    t('grupyTowarowe.add.types', { returnObjects: true })
                                                ).map(([key, label]) => (
                                                    <option key={key} value={key}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="success">
                                            <i className="bi bi-save me-1" /> {t('grupyTowarowe.add.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </Container>
    );
};
