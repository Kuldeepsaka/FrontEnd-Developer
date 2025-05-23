'use client'

import React from 'react'
import './CommonSelect.scss'

interface Option {
    label: string
    value: string | number
}

interface CommonSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: Option[]
    className?: string
}

const CommonSelect: React.FC<CommonSelectProps> = ({
    label,
    options,
    className = '',
    ...props
}) => {
    return (
        <div className={`common-select-wrapper ${className}`}>
            {label && <label className="select-label">{label}</label>}
            <select className="common-select" {...props}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CommonSelect
