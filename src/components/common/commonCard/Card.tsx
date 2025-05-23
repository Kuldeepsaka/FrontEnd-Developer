import React, { ReactNode } from 'react'
import { Card } from 'react-bootstrap'
import './cardStyle.scss'


interface CommonCardProps {
    children: ReactNode
    className?: string
    header?: ReactNode
}

const CommonCard: React.FC<CommonCardProps> = ({ children, className = '', header }) => {
    return (
        <Card
            className={`p-0 ${className}`}
            role="region"
            aria-label="Card container"
        >
            {header && <Card.Header as="h5">{header}</Card.Header>}
            <Card.Body>{children}</Card.Body>
        </Card>
    )
}

export default CommonCard
