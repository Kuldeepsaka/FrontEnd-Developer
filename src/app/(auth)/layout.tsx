'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Hearder/Header'
import './authStyle.scss'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')

        if (storedUser) {
            try {
                const user = JSON.parse(storedUser)
                if (user?.role === 'admin') {
                    router.replace('/admin')
                } else {
                    router.replace('/dashboard')
                }
            } catch (error) {
                console.error('Invalid user data:', error)
                localStorage.removeItem('user') // cleanup
                setChecking(false)
            }
        } else {
            setChecking(false) // No user, allow public pages
        }
    }, [router])

    if (checking) {
        return null // optionally: return a spinner or loader here
    }

    return <>
        <div className="min-h-screen bg-white dark:bg-black">
            <Header /> {/* Optional: logo, theme toggle, etc. */}
            <main className="p-4">{children}</main>
        </div>
    </>
}
