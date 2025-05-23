'use client'

import { useSession } from 'next-auth/react'

export default function ProfilePage() {
    const { data: session, status } = useSession()

    if (status === 'loading') return <p>Loading...</p>

    if (!session?.user) return <p>Unauthorized</p>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Profile</h1>
            <div className="space-y-2">
                <p><strong>Name:</strong> {session.user.name}</p>
                <p><strong>Email:</strong> {session.user.email || 'N/A'}</p>
                <p><strong>Role:</strong> {session.user.role}</p>
            </div>
        </div>
    )
}
