// useFetch.js
import { useState, useEffect, useCallback } from 'react';

export const useFetch = (fetchFunction, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction(params);
      setData(result.data);
      return result;
    } catch (err) {
      setError(err.message || 'Error al cargar los datos');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  return { data, loading, error, execute, setData };
};