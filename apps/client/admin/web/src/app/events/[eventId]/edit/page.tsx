'use client';
import EventsForm from '@/components/events/form/form';
import Button from '@mui/material/Button';
import { Page } from '@rollers/libs-client-admin-page';
import { useState } from 'react';

export default function EventsEditPage({
  params,
}: {
  params: { eventId: string };
}) {
  const [model, setModel] = useState({
    title: '',
    description: '',
    startAt: new Date(),
    endAt: new Date(),
  });

  const handleModelUpdated = (data: typeof model) => {
    console.log('Form submitted with data:', data);
    // Here you would typically send the data to your API or handle it as needed
  };

  return (
    <Page headingTitle="Edit Event" headingSubtitle="Update event details">
      <Page.Bottom>
        <div>
          <Button onClick={() => handleModelUpdated(model)}>Save</Button>
        </div>
      </Page.Bottom>
      <Page.Content>
        <EventsForm
          model={model}
          onModelUpdated={handleModelUpdated}
        ></EventsForm>
      </Page.Content>
    </Page>
  );
}
