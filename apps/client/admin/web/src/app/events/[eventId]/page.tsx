'use client';
import { Button } from '@mui/material';
import { addParticipant, removeParticipant } from './actions';
import { useParams } from 'next/navigation';

export default function EventPage() {
  const { eventId } = useParams<{ eventId: string }>();

  const participants = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
  ];

  const onAddParticipant = async () => {
    // Logic to add a participant
    const formData = new FormData();
    formData.append('eventId', eventId);
    formData.append('name', 'New Participant'); // Replace with actual participant data
    formData.append('email', ''); // Replace with actual participant email if needed
    await addParticipant(formData);
  };

  const onRemoveParticipant = async (participantId: string) => {
    const formData = new FormData();
    formData.append('eventId', eventId);
    formData.append('participantId', participantId);
    await removeParticipant(formData);
  };

  return (
    <>
      <div>
        <h1>Event Page {eventId}</h1>
      </div>
      <div>
        <h2>Participants</h2>
        <Button onClick={onAddParticipant}></Button>
        <ul>
          {participants.map((participant) => (
            <li key={participant.id}>
              {participant.name}
              <Button
                variant="contained"
                color="primary"
                onClick={() => onRemoveParticipant(participant.id)}
              >
                {' '}
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
