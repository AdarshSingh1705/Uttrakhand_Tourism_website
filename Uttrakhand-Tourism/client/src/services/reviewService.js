import api from './api';

export const reviewService = {
  getByDestination: async (destinationId) => {
    const response = await api.get(`/reviews/${destinationId}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/reviews', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/reviews/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  }
};
