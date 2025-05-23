import { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Website',
            category: 'web',
            image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'A fully responsive e-commerce website built with Next.js, TypeScript, and Stripe integration.',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com'
        },
        {
            id: 2,
            title: 'Task Management App',
            category: 'app',
            image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'A task management application with drag-and-drop functionality and user authentication.',
            technologies: ['React', 'Firebase', 'Redux', 'SCSS'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            category: 'web',
            image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'A creative portfolio website for a photographer with image gallery and contact form.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com'
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            category: 'app',
            image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'A weather dashboard that displays current weather and forecasts using a weather API.',
            technologies: ['React', 'OpenWeather API', 'Chart.js'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com'
        },
        {
            id: 5,
            title: 'Restaurant Website',
            category: 'web',
            image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'A responsive website for a restaurant with menu, reservation system, and contact information.',
            technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com'
        },
        {
            id: 6,
            title: 'Fitness Tracker',
            category: 'app',
            image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'A fitness tracking application that allows users to log workouts and track progress.',
            technologies: ['React Native', 'Firebase', 'Redux'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="section">
            <Container>
                <div className="section-title">
                    <h2 className="fade-up">My Projects</h2>
                    <p className="fade-up">Check out some of my recent work that showcases my skills and expertise.</p>
                </div>

                <Nav className="justify-content-center mb-5 fade-up">
                    <Nav.Item>
                        <Nav.Link
                            className={`px-4 ${filter === 'all' ? 'active fw-bold' : ''}`}
                            onClick={() => setFilter('all')}
                            style={{ cursor: 'pointer' }}
                        >
                            All
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            className={`px-4 ${filter === 'web' ? 'active fw-bold' : ''}`}
                            onClick={() => setFilter('web')}
                            style={{ cursor: 'pointer' }}
                        >
                            Websites
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            className={`px-4 ${filter === 'app' ? 'active fw-bold' : ''}`}
                            onClick={() => setFilter('app')}
                            style={{ cursor: 'pointer' }}
                        >
                            Applications
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Row>
                    {filteredProjects.map((project) => (
                        <Col lg={4} md={6} className="mb-4" key={project.id}>
                            <Card className="h-100 border-0 shadow-sm fade-up project-card">
                                <div className="position-relative">
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        alt={project.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="project-overlay">
                                        <div className="d-flex gap-2">
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                                                <ExternalLink size={16} className="me-1" /> Live
                                            </a>
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                                                <Github size={16} className="me-1" /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <div className="d-flex flex-wrap gap-2 mt-3">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="badge bg-light text-dark">{tech}</span>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5 fade-up">
                    <Button href="https://github.com/" target="_blank" rel="noopener noreferrer" variant="outline-dark">
                        <Github size={20} className="me-2" />
                        View More on GitHub
                    </Button>
                </div>
            </Container>

            <style jsx global>{`
        .project-card .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(108, 99, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
      `}</style>
        </section>
    );
}