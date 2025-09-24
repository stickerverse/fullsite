import React, { useState } from 'react';
import { usStates, countries } from '../constants';
import FormField from './ui/FormField';
import SelectField from './ui/SelectField';
import Checkbox from './ui/Checkbox';
import { type BillingFormData, type FormErrors } from '../types';
import { validateField } from '../utils/validation';

const initialFormData: BillingFormData = {
    isBusiness: false,
    companyName: '',
    vatNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    address2: '',
    zip: '',
    city: '',
    state: '',
    country: 'US',
    phone: '',
    orderReference: '',
    useDifferentShipping: false,
    shipping: {
        name: '',
        attName: '',
        address: '',
        address2: '',
        zip: '',
        city: '',
        state: '',
        country: 'US',
    }
};

const BillingForm: React.FC = () => {
    const [formData, setFormData] = useState<BillingFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleValidation = (name: string, value: string, currentFormData: BillingFormData) => {
        const nameParts = name.split('.');
        const isShippingField = nameParts[0] === 'shipping';
        const fieldName = isShippingField ? nameParts[1] : nameParts[0];

        const error = validateField(fieldName, value, currentFormData, isShippingField);

        if (isShippingField) {
            setErrors(prev => ({ ...prev, shipping: { ...prev.shipping, [fieldName]: error } }));
        } else {
            setErrors(prev => ({ ...prev, [fieldName]: error }));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        const nameParts = name.split('.');
        const isShippingField = nameParts[0] === 'shipping';
        const fieldName = isShippingField ? nameParts[1] : name;

        const updatedFormData = { ...formData };

        if (isShippingField) {
            const shippingFieldName = nameParts[1];
            (updatedFormData.shipping as any)[shippingFieldName] = value;
        } else {
            (updatedFormData as any)[fieldName] = type === 'checkbox' ? checked : value;
        }
        
        setFormData(updatedFormData);
        handleValidation(name, value, updatedFormData);
    };


    return (
        <div className="bg-white shadow-sm rounded-lg">
             <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-2xl font-medium text-zinc-800" style={{ fontFamily: "'FuturaPT', sans-serif" }}>Shipping and billing</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">Login for faster checkout</a>
            </div>

            <div className="bg-gray-100 p-4">
                <Checkbox
                    id="is-business"
                    label="Business"
                    checked={formData.isBusiness}
                    onChange={handleChange}
                    name="isBusiness"
                />
            </div>
            
            <form className="p-4 md:p-6 space-y-4" noValidate>
                {formData.isBusiness && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField id="company_name" label="Company name" type="text" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} required />
                        <FormField id="vat_number" label="VAT-number" type="text" name="vatNumber" value={formData.vatNumber} onChange={handleChange} />
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField id="firstname" label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} required />
                    <FormField id="surname" label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} required />
                </div>
                 <FormField id="email" label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} required />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField id="address" label="Address" type="text" name="address" value={formData.address} onChange={handleChange} error={errors.address} required />
                    <FormField id="address2" label="Address line 2" name="address2" type="text" value={formData.address2} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="grid grid-cols-2 gap-4">
                        <FormField id="zip" label="Zip Code" type="text" name="zip" value={formData.zip} onChange={handleChange} error={errors.zip} required />
                        <FormField id="city" label="City" type="text" name="city" value={formData.city} onChange={handleChange} error={errors.city} required />
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <SelectField id="state" label="State" name="state" options={usStates} value={formData.state} onChange={handleChange} error={errors.state} required />
                        <SelectField id="country" label="Country" name="country" options={countries} value={formData.country} onChange={handleChange} error={errors.country} required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField id="phone" label="Phone" type="tel" name="phone" required subtitle="Used for shipping purposes only." value={formData.phone} onChange={handleChange} error={errors.phone} />
                    <FormField id="purchase_order" label="Order reference" type="text" name="orderReference" value={formData.orderReference} onChange={handleChange} />
                </div>
                
                 <div className="pt-4">
                    <Checkbox
                        id="other-shipping-address"
                        label="Use a different shipping address"
                        checked={formData.useDifferentShipping}
                        onChange={handleChange}
                        name="useDifferentShipping"
                    />
                </div>
                
                {formData.useDifferentShipping && (
                     <div className="p-4 mt-4 border-t border-gray-200 space-y-4 bg-gray-50 rounded-md">
                        <h3 className="text-lg font-semibold text-zinc-700">Shipping Address</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <FormField id="shipping-name" label="Name or company" type="text" name="shipping.name" value={formData.shipping.name} onChange={handleChange} error={errors.shipping?.name} required />
                             <FormField id="shipping-att-name" label="Attention name" type="text" name="shipping.attName" value={formData.shipping.attName} onChange={handleChange} />
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField id="shipping-address" label="Address" type="text" name="shipping.address" value={formData.shipping.address} onChange={handleChange} error={errors.shipping?.address} required />
                            <FormField id="shipping-address2" label="Address line 2" type="text" name="shipping.address2" value={formData.shipping.address2} onChange={handleChange} />
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="grid grid-cols-2 gap-4">
                                <FormField id="shipping-zip" label="Zip Code" type="text" name="shipping.zip" value={formData.shipping.zip} onChange={handleChange} error={errors.shipping?.zip} required />
                                <FormField id="shipping-city" label="City" type="text" name="shipping.city" value={formData.shipping.city} onChange={handleChange} error={errors.shipping?.city} required />
                            </div>
                             <div className="grid grid-cols-2 gap-4">
                                <SelectField id="shipping-state" label="State" name="shipping.state" options={usStates} value={formData.shipping.state} onChange={handleChange} error={errors.shipping?.state} required />
                                <SelectField id="shipping-country" label="Country" name="shipping.country" options={countries} value={formData.shipping.country} onChange={handleChange} error={errors.shipping?.country} required />
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default BillingForm;
