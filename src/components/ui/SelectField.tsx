import React from 'react';

interface SelectFieldProps {
    id: string;
    label: string;
    options: { value: string; label: string }[];
    required?: boolean;
    defaultValue?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
    error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, label, options, required, defaultValue, value, onChange, name, error }) => {
    const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';

    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-xs font-semibold text-gray-600 mb-1">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={id}
                name={name || id}
                required={required}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded-md transition bg-white ${errorClasses}`}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
};

export default SelectField;