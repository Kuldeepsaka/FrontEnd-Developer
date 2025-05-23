import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Form } from 'react-bootstrap';

interface CommonInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string | boolean;
    isValid?: boolean;
    className?: string;
    containerClassName?: string;
    size?: 'sm' | 'lg';
}

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(({
    label,
    error,
    isValid,
    className = '',
    containerClassName = '',
    size,
    value,
    ...props
}, ref) => {
    // Cast value to mutable array if it is readonly array
    const normalizedValue = (Array.isArray(value) ? [...value] : value) as string | number | string[] | undefined;

    return (
        <Form.Group className={containerClassName}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                ref={ref}
                className={className}
                isInvalid={!!error}
                isValid={isValid}
                size={size}
                value={normalizedValue}
                {...props}
            />
            {!!error && typeof error === 'string' && (
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            )}
        </Form.Group>
    );
});

CommonInput.displayName = 'CommonInput';

export default CommonInput;
