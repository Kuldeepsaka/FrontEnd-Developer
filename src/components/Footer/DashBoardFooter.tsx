'use client'

import React from 'react'
import './style.scss'

const DashboardFooter: React.FC = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="dashboard-footer mt-auto">
            <div className="footer-content">
                <p>&copy; {year} MyDashboard. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default DashboardFooter
