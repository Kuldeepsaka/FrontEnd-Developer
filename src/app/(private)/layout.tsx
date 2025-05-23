'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar/Sidebar"
import './style.scss'
import DashboardHeader from "@/components/Hearder/DashboardHeader"
import DashboardFooter from "@/components/Footer/DashBoardFooter"


type User = {
    id: number
    username: string
    role: 'admin' | 'user'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch {
                setUser(null)
            }
        } else {
            setUser(null)
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
        }
    }, [loading, user, router])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        // Redirect will happen; avoid rendering content before navigation
        return null
    }

    return (
        <div className="dashboard-layout">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="dashboard-main">
                <DashboardHeader onToggleSidebar={() => setSidebarOpen(prev => !prev)} user={user} />
                <main className="dashboard-content">
                    <div className="dashboard-container">
                        {children}
                    </div>
                    <DashboardFooter />
                </main>
            </div>


        </div>
    )
}
