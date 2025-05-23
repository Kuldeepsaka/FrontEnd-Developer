import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import Header from '../Hearder/Header';
import CommonButton from '../common/Button/CommonButton';
import UserImg from '../../../src/assets/img.png';
import Image from 'next/image';
export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        if (heroRef.current) {
            tl.fromTo(
                '.hero-title',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2 }
            )
                .fromTo(
                    '.hero-subtitle',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(
                    '.hero-text',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(
                    '.hero-btn',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(
                    '.hero-social',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(
                    '.hero-scroll',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(
                    '.hero-image',
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1.2 },
                    '-=1.5'
                );
        }
    }, []);

    return (
        <>
            <Header />

            <section id="home" className="hero-section position-relative d-flex align-items-center" ref={heroRef}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <h1 className="display-4 fw-bold mb-3 hero-title">
                                Hi, I&apos;m <span className="highlight">Kuldeep S.</span>
                            </h1>
                            <h2 className="h3 mb-4 hero-subtitle">Frontend Developer & UI/UX Enthusiast</h2>
                            <p className="lead mb-4 hero-text">
                                I craft responsive websites where technology meets creativity.
                                Transforming ideas into digital experiences that users love.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-5 hero-btn">
                                <CommonButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href="#contact" className="btn-custom">Get In Touch</CommonButton>
                                <CommonButton href="#projects" className="btn-custom">View My Work</CommonButton>

                            </div>

                        </Col>
                        <Col lg={6} className="text-center">
                            <div className="hero-image position-relative">
                                <Image
                                    src={UserImg}
                                    alt="Kuldeep Singh - Frontend Developer"
                                    className="img-fluid rounded-circle"
                                    style={{
                                        width: '400px',
                                        height: '400px',
                                        objectFit: 'cover',
                                        border: '10px solid white',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transform: 'rotate(84deg)',
                                    }}
                                />

                                <div className="position-absolute availavility">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <div className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-bold">Available for work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center position-absolute bottom-0 start-50 translate-middle-x pb-4 hero-scroll">
                        <a href="#about" className="text-dark">
                            <div className="d-flex flex-column align-items-center">
                                <span className="mb-2">Scroll Down</span>
                                <ArrowDown size={20} className="animate__animated animate__bounce animate__infinite" />
                            </div>
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
}
