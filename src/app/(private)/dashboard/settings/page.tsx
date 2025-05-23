'use client'

import { useSession } from 'next-auth/react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'

export default function SettingsPage() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (!session?.user) {
        return <p className="text-danger">Unauthorized access</p>
    }

    return (
        <Container className="pt-4">
            <h2 className="mb-4">Settings</h2>
            <Form>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" readOnly value={session.user.name || ''} />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" readOnly value={session.user.email || 'N/A'} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" readOnly value={session.user.role || 'user'} />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
