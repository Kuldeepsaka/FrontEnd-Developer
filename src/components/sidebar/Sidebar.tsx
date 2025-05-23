'use client'

import React from 'react'
import Link from 'next/link'
import './Sidebar.scss'
import { X } from 'lucide-react'
import { logout } from '@/app/api/logout/route'
import CommonButton from '../common/Button/CommonButton'
import { useSession } from 'next-auth/react'

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
    role: 'admin' | 'user'

}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {


    const { data: session, status } = useSession()
    if (status === 'loading') return <div>Loading...</div>
    const userRole = session?.user?.role ?? 'guest'


    return (
        <>
            {/* Backdrop */}
            {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}

            <aside className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
                {/* Close Icon (only on mobile) */}
                <button className="sidebar-close-btn" onClick={onClose} aria-label="Close Sidebar">
                    <X size={24} />
                </button>

                <h2 className="sidebar-logo">Logo</h2>

                <nav className="sidebar-nav">

                    {/* <h3 className="sidebar-role-title">
                        {userRole === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
                    </h3> */}

                    {userRole === 'admin' && (
                        <Link href="/admin" onClick={onClose}>Admin Dashboard</Link>
                    )}

                    <Link href="/dashboard" onClick={onClose}>Dashboard</Link>
                    <Link href="/dashboard/profile" onClick={onClose}>Profile</Link>
                    <Link href="/dashboard/settings" onClick={onClose}>Settings</Link>
                </nav>

                <CommonButton onClick={logout} className='mt-auto'>
                    Logout
                </CommonButton>
            </aside>
        </>
    )
}

export default Sidebar
