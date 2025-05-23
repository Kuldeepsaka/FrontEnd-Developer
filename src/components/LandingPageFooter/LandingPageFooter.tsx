import { Container, Row, Col } from 'react-bootstrap';
import { Code, Linkedin, Mail } from 'lucide-react';

export default function LandingPageFooter() {
    return (
        <footer className=" py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center mb-3">
                            <Code size={24} className="me-2" />
                            <h3 className="mb-0">John Doe</h3>
                        </div>
                        <p className="mb-0">
                            Creating beautiful digital experiences with code and creativity.
                        </p>
                    </Col>

                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#about">About</a></li>
                            <li className="mb-2"><a href="#services">Services</a></li>
                            <li className="mb-2"><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h5 className="mb-3">Connect With Me</h5>
                        <div className="social-icons">

                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>

                            <a href="mailto:hello@johndoe.com">
                                <Mail size={20} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4" />

                <Row>
                    <Col className="text-center">
                        <p className="mb-0">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}