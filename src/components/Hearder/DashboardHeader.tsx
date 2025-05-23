'use client'

import { Menu, Search } from 'lucide-react'
import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
// import { useSession } from 'next-auth/react'

type User = {
    id: number
    username: string
    role: 'admin' | 'user'
}

interface DashboardHeaderProps {
    onToggleSidebar: () => void
    user: User
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onToggleSidebar }) => {
    const [showSearch, setShowSearch] = useState(false)

    // const { data: session, status } = useSession()
    // if (status === 'loading') return <div>Loading...</div>
    // const userRole = session?.user?.role ?? 'guest'

    return (
        <>
            <header className="dashboard-header">
                <div className='toggle-btn'>
                    <button
                        className="sidebar-toggle-btn"
                        onClick={onToggleSidebar}
                        aria-label="Toggle Sidebar"
                    >
                        <Menu size={24} />
                    </button>
                </div>
                <div className="header-links justify-content-between d-flex align-items-center">
                    <h1 className="h3 m-0">
                        {/* {userRole === 'admin' ? 'Admin Dashboard' : 'User Dashboard'} */}
                        Dashboard
                    </h1>
                    <div className="header-right d-flex align-items-center">
                        <ThemeToggle />
                        {showSearch ? (
                            <SearchBar onClose={() => setShowSearch(false)} />
                        ) : (
                            <button
                                className="search-icon-btn"
                                onClick={() => setShowSearch(true)}
                                aria-label="Open search"
                            >
                                <Search size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </header>

        </>
    )
}

export default DashboardHeader
