'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
    const router = useRouter()
    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')

        if (!storedUser) {
            router.replace('/login') // fast redirect
            return
        }

        try {
            const user = JSON.parse(storedUser)
            if (user.role !== 'admin') {
                router.replace('/dashboard')
                return
            }

            setAuthorized(true)
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
            <h3>Welcome to Admin Page — only admin can see this.</h3>
        </div>
    )
}