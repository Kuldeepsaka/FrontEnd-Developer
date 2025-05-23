'use client'

import React from 'react'
import { Button } from 'react-bootstrap'
import './CommonButton.scss'

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    href?: string
}

const CommonButton: React.FC<CommonButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <Button href={props.href} className={`common-btn  ${className}`} {...props}>
            {children}
        </Button>
    )
}

export default CommonButton
