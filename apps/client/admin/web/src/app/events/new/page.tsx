'use client';
import EventsForm from '@/components/events/form/form';
import Button from '@mui/material/Button';
import { Page } from '@rollers/libs-client-admin-page';
import { useState } from 'react';

export default function EventsNewPage() {
  const [model, setModel] = useState({
    title: '',
    description: '',
    startAt: new Date(),
    endAt: new Date(),
  });

  const handleModelUpdated = (data: typeof model) => {
    setModel(data);
  };

  return (
    <Page headingTitle="New Event" headingSubtitle="Create a new event">
      <Page.Bottom>
        <div>
          <Button onClick={() => handleModelUpdated(model)}>Create</Button>
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
