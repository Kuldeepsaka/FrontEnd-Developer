'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
    const router = useRouter()
    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')

        if (!storedUser) {
            router.replace('/login')
            return
        }

        try {
            const user = JSON.parse(storedUser)

            if (user.role === 'admin' || user.role === 'user') {
                setAuthorized(true)
            } else {
                router.replace('/login')
            }
        } catch {
            router.replace('/login')
        } finally {
            setLoading(false)
        }
    }, [router])

    if (loading) return <div>Checking permissions...</div>
    if (!authorized) return null

    return (
        <div>
            <h3>Welcome to Dashboard — user or admin can see this.</h3>
        </div>
    )
}