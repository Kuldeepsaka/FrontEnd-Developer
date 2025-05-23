'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { usePathname, useRouter } from 'next/navigation'
import { RootState } from '@/app/stote'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './style.scss'

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
    const [expanded, setExpanded] = useState(false)
    const theme = useSelector((state: RootState) => state.theme.mode)
    const router = useRouter()
    const pathname = usePathname()

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        { label: 'Projects', href: '/#projects' },
        { label: 'Services', href: '/#services' },
        { label: 'Contact', href: '/#contact' },
        { label: 'Login', href: '/login' },
        { label: 'Register', href: '/register' },
    ]

    const handleScroll = (e: React.MouseEvent, href: string) => {
        e.preventDefault()
        const [path, hash] = href.split('#')
        const targetId = hash ? `#${hash}` : null

        // Close mobile menu
        setExpanded(false)

        if (path !== pathname) {
            // If changing page, use router
            router.push(href)
            return
        }

        if (targetId) {
            const element = document.querySelector(targetId)
            if (element) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: element, offsetY: 70 },
                    ease: 'power2.out',
                })
                // Push hash to URL manually
                window.history.pushState(null, '', href)
            }
        }
    }

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className={`custom-navbar ${theme} shadow-sm`}
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="/" onClick={(e) => handleScroll(e, '/')}>
                    <Image src="/next.svg" alt="Logo" width={100} height={60} className="me-2" />
                </Navbar.Brand>

                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="main-navbar"
                />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        {navLinks.map(({ label, href }) => (
                            <Nav.Link
                                key={label}
                                href={href}
                                onClick={(e) => handleScroll(e, href)}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                        <ThemeToggle />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
