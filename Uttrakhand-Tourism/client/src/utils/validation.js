export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone);
};

export const validateName = (name) => {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
};

export const sanitizeInput = (input) => {
  return input.replace(/[<>]/g, '');
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateDate = (date) => {
  const selected = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected >= today;
};
