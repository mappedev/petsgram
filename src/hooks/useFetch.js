import { useEffect, useState } from 'react';

export default function useFetch(url, config) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const response = await fetch(url, config || { signal });
      const data = await response.json();

      setLoading(false);
      setData(data);

      return () => abortController.abort();
    };

    fetchData();
  }, []);

  return [data, loading];
}
