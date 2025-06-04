'use client';
import EventsForm from '@/components/events/form/form';
import { useEventForm } from '@/hooks/events/form';
import Button from '@mui/material/Button';
import { Page } from '@rollers/libs-client-admin-page';
import { FormProvider } from 'react-hook-form';
import { save } from './actions';
import { useRouter } from 'next/navigation';

export default function EventsNewPage() {
  const form = useEventForm({
    initialValues: {
      title: '',
      description: '',
      startAt: new Date(),
      endAt: new Date(),
      enableRegistration: false,
    },
  });
  const router = useRouter();

  const onSave = form.handleSubmit(async (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('startAt', values.startAt.toISOString());
    formData.append('endAt', values.endAt.toISOString());
    await save(formData);
    form.reset(); // Reset the form after saving
    router.push('/events'); // Redirect to the events list page
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSave}>
        <Page headingTitle="New Event" headingSubtitle="Create a new event">
          <Page.Bottom>
            <div>
              <Button onClick={onSave}>Create</Button>
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
