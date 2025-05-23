'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

import CommonInput from '@/components/common/commonInput/commonInput'
import CommonCard from '@/components/common/commonCard/Card'
import CommonButton from '@/components/common/Button/CommonButton'
import CommonSelect from '@/components/common/SelectBox/CommonSelect'
import Loading from '@/app/loading'

export default function RegisterPage() {
    const router = useRouter()
    const [checking, setChecking] = useState(true)

    const role = [
        { label: 'User', value: 'user' },
        { label: 'Admin', value: 'admin' },
    ]

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
            role: 'user' as 'admin' | 'user',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string()
                .min(4, 'Password must be at least 4 characters')
                .required('Password is required'),
            role: Yup.string()
                .oneOf(['user', 'admin'], 'Invalid role')
                .required('Role is required'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const res = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                })

                const data = await res.json()

                if (!res.ok) {
                    toast.error(data.message || 'Registration failed')
                } else {
                    toast.success('Registration successful! Redirecting to login...')
                    setTimeout(() => router.push('/login'), 1500)
                }
            } catch {
                toast.error('Something went wrong')
            } finally {
                setSubmitting(false)
            }
        },
    })

    if (checking) return <Loading />

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="col-xl-3 col-lg-8 col-md-10 col-sm-12 auth-screens mx-auto">
                <CommonCard header="Register" className='auth-card'>

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


                    <div className="mb-3 col-12">
                        <CommonSelect
                            label="Select Role"
                            id="role"
                            name="role"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                            options={role}
                        />
                        {formik.touched.role && formik.errors.role && (
                            <div className="text-red-500 mt-1">{formik.errors.role}</div>
                        )}
                    </div>




                    <div className='mb-3 col-12 text-center pt-3'>
                        <CommonButton
                            type="submit"
                            disabled={formik.isSubmitting}
                            className='mb-2 w-100'
                        >
                            {formik.isSubmitting ? 'Registering...' : 'Register'}
                        </CommonButton>
                        <span className='pt-4'>If you already have an account<Link href="/login" className="block text-center ms-2 mt-4">Login</Link> </span>


                    </div>

                </CommonCard>

            </form>


        </>
    )
}
