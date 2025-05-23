import { useState, FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null as string | null }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus({
            submitted: false,
            submitting: true,
            info: { error: false, msg: null }
        });

        // Simulate form submission
        try {
            // In a real application, you would send the form data to your backend or a form service
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: 'Message sent successfully!' }
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset form status after 5 seconds
            setTimeout(() => {
                setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: false, msg: null }
                });
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Something went wrong. Please try again later.' }
            });
        }
    };

    return (
        <section id="contact" className="section">
            <Container>
                <div className="section-title">
                    <h2 className="fade-up">Get In Touch</h2>
                    <p className="fade-up">Feel free to contact me for any project or collaboration.</p>
                </div>

                <Row>
                    <Col lg={5} className="mb-5 mb-lg-0">
                        <div className="contact-info fade-right">
                            <h3 className="mb-4">Let&apos;s talk about everything!</h3>
                            <p className="mb-5">
                                Don&apos;t like forms? Send me an email or contact me via instant message!
                            </p>

                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <Mail size={24} color="white" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Email</h5>
                                    <p className="mb-0">
                                        <a href="mailto:hello@johndoe.com">hello@johndoe.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <Phone size={24} color="white" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Phone</h5>
                                    <p className="mb-0">
                                        <a href="tel:+11234567890">+1 (123) 456-7890</a>
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <MapPin size={24} color="white" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Location</h5>
                                    <p className="mb-0">New York, NY, USA</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="contact-form p-5 rounded shadow-sm fade-left">
                            {status.info.msg && (
                                <Alert variant={status.info.error ? 'danger' : 'success'}>
                                    {status.info.msg}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="name">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="email">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="subject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Hello, I'd like to talk about..."
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="btn-custom"
                                    disabled={status.submitting}
                                >
                                    {status.submitting ?
                                        'Sending...' :
                                        <>
                                            <Send size={18} className="me-2" />
                                            Send Message
                                        </>
                                    }
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}