'use server';

export async function save(data: FormData) {
  return fetch('http://localhost:3000/api/events', {
    method: 'POST',
    body: JSON.stringify({
        title: data.get('title'),
        description: data.get('description'),
        startAt: new Date(data.get('startAt') as string).toISOString(),
        endAt: new Date(data.get('endAt') as string).toISOString(),
    }),
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to save event');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error saving event:', error);
      throw error;
    });
}
