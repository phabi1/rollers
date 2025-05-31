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
    // Simulate an API call
    setTimeout(() => {
      try {
        // Replace with actual API call
        setItems([
          {
            id: 1,
            title: 'Event 1',
            description: 'Description for Event 1',
            startAt: new Date('2023-10-01T10:00:00'),
            endAt: new Date('2023-10-01T12:00:00'),
          },
          {
            id: 2,
            title: 'Event 2',
            description: 'Description for Event 2',
            startAt: new Date('2023-10-02T11:00:00'),
            endAt: new Date('2023-10-02T13:00:00'),
          },
        ]);
        setLoading(false);
      } catch (err) {
        setError('Failed to load events');
        setLoading(false);
      }
    }, 1000);
  }, []);

  return { items, loading, error, empty };
}

export default useEventsList;
