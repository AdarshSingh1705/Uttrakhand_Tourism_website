const rateLimitStore = {};

export const rateLimit = (key, maxAttempts = 5, windowMs = 60000) => {
  const now = Date.now();
  
  if (!rateLimitStore[key]) {
    rateLimitStore[key] = { count: 1, resetTime: now + windowMs };
    return true;
  }

  if (now > rateLimitStore[key].resetTime) {
    rateLimitStore[key] = { count: 1, resetTime: now + windowMs };
    return true;
  }

  if (rateLimitStore[key].count >= maxAttempts) {
    return false;
  }

  rateLimitStore[key].count++;
  return true;
};

export const getRemainingTime = (key) => {
  if (!rateLimitStore[key]) return 0;
  const remaining = rateLimitStore[key].resetTime - Date.now();
  return Math.max(0, Math.ceil(remaining / 1000));
};
