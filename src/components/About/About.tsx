import { Container, Row, Col, Button } from 'react-bootstrap';
import { Code, Layers, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import UserImg from '../../assets/img.png';

export default function About() {
    const skills = [
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3/SASS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'React.js', percentage: 90 },
        { name: 'Next.js', percentage: 85 },
        { name: 'Node.js', percentage: 75 },
        { name: 'UI/UX Design', percentage: 80 },
    ];

    return (
        <section id="about" className="section">
            <Container>
                <div className="section-title">
                    <h2 className="fade-up">About Me</h2>
                    <p className="fade-up">Get to know me and my skills as a frontend developer.</p>
                </div>

                <Row className="align-items-center">
                    <Col lg={5} className="mb-5 mb-lg-0">
                        <div className="position-relative fade-right">
                            <Image
                                src={UserImg}
                                alt="Kuldeep Singh"
                                className="img-fluid rounded"
                                style={{
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    border: '10px solid white',
                                    transform: 'rotate(90deg)'
                                }}
                            />
                            <div className="position-absolute" style={{
                                bottom: '-20px',
                                right: '-20px',
                                background: 'var(--primary-color)',
                                padding: '20px',
                                borderRadius: '10px',
                                color: 'white',
                                boxShadow: '0 10px 30px rgba(108, 99, 255, 0.3)'
                            }}>
                                <div className="text-center">
                                    <h3 className="mb-0">5+</h3>
                                    <p className="mb-0">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="ps-lg-4">
                            <h3 className="mb-4 fade-left">Frontend Developer based in New York</h3>
                            <p className="fade-left">
                                I am a passionate Frontend Developer with 5+ years of experience in building
                                exceptional digital experiences that are fast, accessible, visually appealing,
                                and responsive. I specialize in translating UI/UX designs into pixel-perfect
                                websites and applications.
                            </p>
                            <p className="fade-left">
                                My expertise includes modern frontend frameworks like React and Next.js,
                                along with a strong foundation in JavaScript, TypeScript, and CSS. I am
                                committed to writing clean, maintainable code and staying updated with
                                the latest web technologies and best practices.
                            </p>

                            <Row className="mt-4 mb-5">
                                <Col md={6} className="mb-3 mb-md-0">
                                    <div className="d-flex align-items-center fade-left">
                                        <div className="me-3">
                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                                <Code size={24} color="white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Clean Code</h5>
                                            <p className="mb-0">I write clean, maintainable code</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex align-items-center fade-left">
                                        <div className="me-3">
                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                                <Layers size={24} color="white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Modern Stack</h5>
                                            <p className="mb-0">I work with modern technologies</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6} className="mb-3 mb-md-0">
                                    <div className="d-flex align-items-center fade-left">
                                        <div className="me-3">
                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                                <Zap size={24} color="white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Fast Learner</h5>
                                            <p className="mb-0">I quickly adapt to new technologies</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex align-items-center fade-left">
                                        <div className="me-3">
                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                                <Globe size={24} color="white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Responsive Design</h5>
                                            <p className="mb-0">My websites work on all devices</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="mt-5 fade-left">
                                <Button href="/resume.pdf" target="_blank" className="btn-custom me-3">
                                    Download CV
                                </Button>
                                <Button href="#contact" variant="outline-dark">
                                    Lets Talk
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 pt-5">
                    <Col lg={12}>
                        <h3 className="text-center mb-5 fade-up">My Skills</h3>
                        <Row>
                            {skills.map((skill, index) => (
                                <Col md={6} key={index} className="mb-4 fade-up">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="fw-bold">{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${skill.percentage}%`, backgroundColor: 'var(--primary-color)' }}
                                            aria-valuenow={skill.percentage}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}