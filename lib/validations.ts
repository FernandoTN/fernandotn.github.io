export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

export function validateMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateNewsletterForm(data: {
  email: string;
  name?: string;
}): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.email)) {
    errors.push({
      field: 'email',
      message: 'Email is required',
    });
  } else if (!validateEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address',
    });
  }

  if (data.name && !validateMaxLength(data.name, 100)) {
    errors.push({
      field: 'name',
      message: 'Name must be less than 100 characters',
    });
  }

  return errors;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.name)) {
    errors.push({
      field: 'name',
      message: 'Name is required',
    });
  } else if (!validateMaxLength(data.name, 100)) {
    errors.push({
      field: 'name',
      message: 'Name must be less than 100 characters',
    });
  }

  if (!validateRequired(data.email)) {
    errors.push({
      field: 'email',
      message: 'Email is required',
    });
  } else if (!validateEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address',
    });
  }

  if (!validateRequired(data.subject)) {
    errors.push({
      field: 'subject',
      message: 'Subject is required',
    });
  } else if (!validateMaxLength(data.subject, 200)) {
    errors.push({
      field: 'subject',
      message: 'Subject must be less than 200 characters',
    });
  }

  if (!validateRequired(data.message)) {
    errors.push({
      field: 'message',
      message: 'Message is required',
    });
  } else if (!validateMinLength(data.message, 10)) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters',
    });
  } else if (!validateMaxLength(data.message, 1000)) {
    errors.push({
      field: 'message',
      message: 'Message must be less than 1000 characters',
    });
  }

  return errors;
}