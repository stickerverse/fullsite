import { BillingFormData } from '../types';

export const validateField = (
  name: string,
  value: string,
  formData: BillingFormData,
  isShippingField: boolean = false
): string | undefined => {
  const requiredMsg = 'This field is required';
  const data = isShippingField ? formData.shipping : formData;

  const requiredFields = [
    'firstName', 'lastName', 'email', 'address', 'zip', 'city', 'state', 'country', 'phone',
  ];
  const requiredShippingFields = ['name', 'address', 'zip', 'city', 'state', 'country'];

  const fieldsToCheck = isShippingField ? requiredShippingFields : requiredFields;
  
  if (fieldsToCheck.includes(name) && !value.trim()) {
    return requiredMsg;
  }
  
  if (formData.isBusiness && !isShippingField && name === 'companyName' && !value.trim()) {
    return requiredMsg;
  }

  switch (name) {
    case 'email':
      if (value && !/\S+@\S+\.\S+/.test(value)) {
        return 'Please enter a valid email address';
      }
      break;
    case 'phone':
       if (value && !/^\+?[\d\s-()]{7,}$/.test(value)) {
        return 'Please enter a valid phone number';
      }
      break;
    case 'zip':
      if (data.country === 'US' && value && !/^\d{5}(-\d{4})?$/.test(value)) {
        return 'Please enter a valid US ZIP code (e.g., 12345 or 12345-6789)';
      }
      break;
    default:
      break;
  }

  return undefined;
};
