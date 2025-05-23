'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '@/app/stote/userSlice'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

import CommonInput from '@/components/common/commonInput/commonInput'
import CommonCard from '@/components/common/commonCard/Card'
import CommonButton from '@/components/common/Button/CommonButton'
import Loading from '@/app/loading'

export default function LoginPage() {
    const router = useRouter()
    const [checking, setChecking] = useState(true)
    const [serverError, setServerError] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const storedUser = localStorage.getItem('user')

        if (storedUser) {
            try {
                const user = JSON.parse(storedUser)
                router.replace(user.role === 'admin' ? '/admin' : '/dashboard')
                return
            } catch {
                localStorage.removeItem('user')
            }
        }

        setChecking(false)
    }, [router])

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
        }),


        onSubmit: async (values, { setSubmitting }) => {
            setServerError('')
            const res = await signIn('credentials', {
                redirect: false,
                username: values.username,
                password: values.password,
            })

            if (res?.error) {
                setServerError('Invalid credentials')
                setSubmitting(false)
                return
            }

            const sessionRes = await fetch('/api/auth/session')
            const session = await sessionRes.json()

            if (session?.user) {
                localStorage.setItem('user', JSON.stringify(session.user))

                // Show toast success notification
                toast.success('Login successful! Redirecting...')

                dispatch(
                    login({
                        id: session.user.id,
                        name: session.user.name,
                        email: session.user.email,
                    })
                )

                // Delay redirect to let toast show briefly
                setTimeout(() => {
                    router.push(session.user.role === 'admin' ? '/admin' : '/dashboard')
                }, 1500)

            } else {
                setServerError('Failed to get user session')
                setSubmitting(false)
            }
        },
    })

    if (checking) return <Loading />

    return (
        <form onSubmit={formik.handleSubmit} className="col-xl-3 col-lg-8 col-md-10 col-sm-12 auth-screens mx-auto">


            <CommonCard header="Login" className='auth-card'>
                {serverError && <p className="text-red-500 mb-3">{serverError}</p>}
                <div className='mb-3'>
                    <CommonInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && formik.errors.username ? formik.errors.username : false}
                    />
                </div>
                <div className='mb-3'>

                    <CommonInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && formik.errors.password ? formik.errors.password : false}
                    />
                </div>
                <div className='mb-3 col-12 text-center pt-3'>


                    <CommonButton
                        type="submit"
                        disabled={formik.isSubmitting}
                        className='mb-2 w-100'
                    >
                        {formik.isSubmitting ? 'Logging in...' : 'Login'}
                    </CommonButton>
                    <span className='pt-4'>If you Don&apos;t have an account<Link href="/register" className="block text-center ms-2 mt-4">Register</Link> </span>


                </div>

            </CommonCard>


        </form>
    )
}
