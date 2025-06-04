import { useEffect, useMemo, useState } from 'react';

export function useEventsList() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const empty = useMemo(() => {
    if (loading) return false;
    return items.length === 0;
  }, [items, loading]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/events`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data.nodes);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load events');
        setLoading(false);
      });
  }, []);

  return { items, loading, error, empty };
}

export default useEventsList;
