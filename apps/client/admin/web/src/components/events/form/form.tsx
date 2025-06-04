import TextField from '@/components/form/field/textfield';
import Switch from '@/components/form/field/switch';
import Paper from '@mui/material/Paper';
import { useFormContext } from 'react-hook-form';

export interface EventsFormData {
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  enableRegistration: boolean;
}

export function EventsForm() {
  const { watch } = useFormContext<EventsFormData>();

  const enableRegistration = watch('enableRegistration');

  return (
    <>
      <Paper className="mb-4 p-4">
        <TextField name="title" label="Title" />
        <TextField name="description" label="Description" />
        <div className="flex gap-4">
          <TextField name="startAt" label="Start At" type="datetime-local" />
          <TextField name="endAt" label="End At" type="datetime-local" />
        </div>
      </Paper>
      <Paper className="mb-4 p-4">
        <Switch name="enableRegistration" label="Enable registration" />
        <div
          className={[enableRegistration ? 'block' : 'hidden', 'mt-4'].join(
            ' '
          )}
        >
          <div className="flex gap-4">
            <TextField
              name="registrationStartAt"
              label="Registration Start At"
              type="datetime-local"
            />
            <TextField
              name="registrationEndAt"
              label="Registration End At"
              type="datetime-local"
            />
          </div>
          <TextField
            name="registrationLimit"
            label="Registration Limit"
            type="number"
          />
        </div>
      </Paper>
    </>
  );
}

export default EventsForm;
