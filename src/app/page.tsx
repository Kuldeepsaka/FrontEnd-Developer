'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import LandingPageFooter from '@/components/LandingPageFooter/LandingPageFooter'
import Loading from './loading'


export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.role === 'admin') router.replace('/admin')
      else router.replace('/dashboard')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <Loading />

  return (
    <main className="p-8">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <LandingPageFooter />
    </main>
  )
}