import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Layout, Smartphone, Zap, Layers, PenTool } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Code size={40} />,
            title: 'Web Development',
            description: 'Building responsive and performant websites using modern technologies like React, Next.js, and TypeScript.'
        },
        {
            icon: <Layout size={40} />,
            title: 'UI/UX Design',
            description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.'
        },
        {
            icon: <Smartphone size={40} />,
            title: 'Mobile-First Approach',
            description: 'Developing websites that look and function perfectly on all devices, from mobile phones to desktops.'
        },
        {
            icon: <Zap size={40} />,
            title: 'Performance Optimization',
            description: 'Optimizing website performance for faster load times, better user experience, and improved SEO rankings.'
        },
        {
            icon: <Layers size={40} />,
            title: 'Frontend Architecture',
            description: 'Designing scalable and maintainable frontend architectures for complex web applications.'
        },
        {
            icon: <PenTool size={40} />,
            title: 'Animation & Interaction',
            description: 'Adding smooth animations and interactive elements to enhance user engagement and website appeal.'
        }
    ];

    return (
        <section id="services" className="section pb-0">
            <Container>
                <div className="section-title">
                    <h2 className="fade-up">My Services</h2>
                    <p className="fade-up">Here are the services I offer to help bring your digital vision to life.</p>
                </div>

                <Row>
                    {services.map((service, index) => (
                        <Col lg={4} md={6} className="mb-4" key={index}>
                            <Card className="h-100 border-0 shadow-sm fade-up">
                                <Card.Body className="p-4 text-center">
                                    <div className="mb-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 mb-3">
                                            {service.icon}
                                        </div>
                                        <h4>{service.title}</h4>
                                    </div>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


            </Container>
            <Row className="mt-5 m-0">
                <Col lg={12} className="mx-auto p-0">
                    <div className="bg-primary p-5 rounded-lg text-white text-center fade-up" style={{ boxShadow: '0 15px 30px rgba(108, 99, 255, 0.2)' }}>
                        <h3 className="mb-3">Let&apos;s work together on your next project</h3>
                        <p className="mb-4">
                            I&apos;m available for freelance projects and full-time employment.
                            Let&apos;s create something amazing together!
                        </p>
                        <a href="#contact" className="btn btn-light px-4 py-2">Get In Touch</a>
                    </div>
                </Col>
            </Row>
        </section>
    );
}