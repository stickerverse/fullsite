import React from 'react';

interface FormFieldProps {
    id: string;
    label: string;
    type: string;
    required?: boolean;
    subtitle?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, required, subtitle, value, onChange, name, error }) => {
    const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
    
    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-xs font-semibold text-gray-600 mb-1">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={name || id}
                required={required}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded-md transition ${errorClasses}`}
            />
            {subtitle && !error && <small className="text-gray-500 italic mt-1 block">{subtitle}</small>}
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
};

export default FormField;