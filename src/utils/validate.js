export const validateField = ({ value, required=true, min, max, integerOnly }) => {

  const result = {
    isValid: true,
    parsedValue: null,
    error: ''
  }

  if (required && !value) {
    result.isValid = false;
    result.error = 'This field is required';
    return result;
  }

  const cleaned = value.replace?.(/,/g, '') ?? value;
  const num = Number(cleaned);

  if (isNaN(num)) {
    result.isValid = false;
    result.error = 'Please enter a valid number';
    return result;
  }

  if (integerOnly && !Number.isInteger(num)) {
    result.isValid = false;
    result.error = 'Please enter a whole number';
    return result;
  }

  if (min !== undefined && num < min) {
    result.isValid = false;
    result.error = `Value must be at least ${min}`;
    return result;
  }

  if (max !== undefined && num > max) {
    result.isValid = false;
    result.error = `Value must be no more than ${max}`;
    return result;
  }

  result.parsedValue = num;
  return result;
}
