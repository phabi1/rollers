'use client';
import EventsForm from '@/components/events/form/form';
import { useEventForm } from '@/hooks/events/form';
import Button from '@mui/material/Button';
import { Page } from '@rollers/libs-client-admin-page';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { load, save } from './actions';

export default function EventsEditPage() {
  const params = useParams<{ eventId: string }>();

  const form = useEventForm({});

  useEffect(() => {
    load(params.eventId)
      .then((data) => {
        form.reset({
          title: data.title,
          description: data.description,
          startAt: new Date(data.startAt),
          endAt: new Date(data.endAt),
          enableRegistration: false,
        });
      })
      .catch((error) => {
        console.error('Failed to load event data:', error);
      });
  }, []);

  const onSave = form.handleSubmit(async (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('startAt', values.startAt.toISOString());
    formData.append('endAt', values.endAt.toISOString());
    await save(formData);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSave}>
        <Page headingTitle="Edit Event" headingSubtitle="Update event details">
          <Page.Bottom>
            <div>
              <Button type="submit">Save</Button>
            </div>
          </Page.Bottom>
          <Page.Content>
            <EventsForm></EventsForm>
          </Page.Content>
        </Page>
      </form>
    </FormProvider>
  );
}
