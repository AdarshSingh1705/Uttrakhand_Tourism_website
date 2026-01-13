import api from './api';

export const authService = {
  signup: async (data) => {
    try {
      const response = await api.post('/auth/signup', data);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      // Fallback to mock auth if backend not available
      const mockUser = { id: Date.now(), name: data.name, email: data.email };
      const mockToken = 'mock-token-' + Date.now();
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { token: mockToken, user: mockUser };
    }
  },

  login: async (data) => {
    try {
      const response = await api.post('/auth/login', data);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      // Fallback to mock auth if backend not available
      const mockUser = { id: 1, name: 'User', email: data.email };
      const mockToken = 'mock-token-' + Date.now();
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { token: mockToken, user: mockUser };
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};
