
import React from 'react';

interface CheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // FIX: Add optional name prop to allow it to be passed from parent components.
    name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange, name }) => {
    return (
        <label htmlFor={id} className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                id={id}
                // FIX: Use the name prop if provided, otherwise fall back to id for backward compatibility.
                name={name || id}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700 font-semibold">{label}</span>
        </label>
    );
};

export default Checkbox;
