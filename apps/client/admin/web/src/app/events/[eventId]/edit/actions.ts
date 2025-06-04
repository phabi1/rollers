'use server';

export async function load(eventId: string) {
  return fetch(`http://localhost:3000/api/events/${eventId}`).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

export async function save(data: FormData) {
  return fetch('http://localhost:3000/api/events', {
    method: 'POST',
    body: data,
  });
}
