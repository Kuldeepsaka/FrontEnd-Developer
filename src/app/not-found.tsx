'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Oops! The page you are looking for does not exist.</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Go back to Home
            </Link>
        </div>
    )
}
