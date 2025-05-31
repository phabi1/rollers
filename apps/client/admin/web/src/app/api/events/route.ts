export const GET = async () => {
  return new Response(
    JSON.stringify({
      nodes: [
        {
          id: '1',
          title: 'Event 1',
          startAt: '2023-10-01 10:00:00',
          endAt: '2023-10-01 12:00:00',
          description: 'Description for Event 1',
        },
        {
          id: '2',
          title: 'Event 2',
          startAt: '2023-10-02 10:00:00',
          endAt: '2023-10-02 18:00:00',
          description: 'Description for Event 2',
        },
        {
          id: '3',
          title: 'Event 3',
          startAt: '2023-10-03 10:00:00',
          endAt: '2023-10-03 18:00:00',
          description: 'Description for Event 3',
        },
        {
          id: '4',
          title: 'Event 4',
          startAt: '2023-10-04 10:00:00',
          endAt: '2023-10-04 18:00:00',
          description: 'Description for Event 4',
        },
        {
          id: '5',
          title: 'Event 5',
          startAt: '2023-10-05 10:00:00',
          endAt: '2023-10-05 18:00:00',
          description: 'Description for Event 5',
        },
      ],
      total: 5,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
