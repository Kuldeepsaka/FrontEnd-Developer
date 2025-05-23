'use client'

import { useRef, useState } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './SearchBar.scss'

interface SearchBarProps {
    onClose: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
    const [query, setQuery] = useState('')
    const barRef = useRef<HTMLDivElement>(null)

    // Animate on mount
    useGSAP(() => {
        if (barRef.current) {
            gsap.fromTo(
                barRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
            )
        }
    }, [])

    // Animate on close
    const handleClose = () => {
        if (barRef.current) {
            gsap.to(barRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power3.in',
                onComplete: onClose,
            })
        } else {
            onClose()
        }
    }

    return (
        <div className="search-bar" ref={barRef}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button className="close-btn" onClick={handleClose} aria-label="Close search">
                <X size={18} />
            </button>
        </div>
    )
}

export default SearchBar
