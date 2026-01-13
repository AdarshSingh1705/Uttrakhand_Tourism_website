import api from './api';

export const destinationService = {
  getAll: async () => {
    const response = await api.get('/destinations');
    return response.data;
  },

  getBySlug: async (slug) => {
    const response = await api.get(`/destinations/${slug}`);
    return response.data;
  },

  search: async (query) => {
    const response = await api.get(`/destinations/search?q=${query}`);
    return response.data;
  },

  getFeatured: async () => {
    const response = await api.get('/destinations/featured');
    return response.data;
  }
};
