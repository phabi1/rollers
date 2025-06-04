import { useForm } from 'react-hook-form';

type EventFormValues = {
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  enableRegistration: boolean;
  registrationStartAt?: Date;
  registrationEndAt?: Date;
  registrationLimit?: number;
};

export function useEventForm(options: {
  initialValues?: Partial<EventFormValues>;
}) {
  const form = useForm<EventFormValues>({
    defaultValues: {
      title: options.initialValues?.title || '',
      description: options.initialValues?.description || '',
      startAt: options.initialValues?.startAt || new Date(),
      endAt: options.initialValues?.endAt || new Date(),
      enableRegistration: options.initialValues?.enableRegistration || false,
    },
    resolver: async (data) => {
      const errors: Record<string, string> = {};
      if (!data.title) {
        errors.title = 'Title is required';
      }
      if (!data.description) {
        errors.description = 'Description is required';
      }
      if (!data.startAt || isNaN(new Date(data.startAt).getTime())) {
        errors.startAt = 'Start date is invalid';
      }
      if (!data.endAt || isNaN(new Date(data.endAt).getTime())) {
        errors.endAt = 'End date is invalid';
      }
      return { values: data, errors };
    },
  });

  return form;
}
