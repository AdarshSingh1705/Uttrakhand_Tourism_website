import { useState, useEffect } from 'react';
import { destinationService } from '../services/destinationService';

export const useDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await destinationService.getAll();
        setDestinations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  return { destinations, loading, error };
};
