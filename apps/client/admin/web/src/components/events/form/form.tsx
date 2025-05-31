import styles from './form.module.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export interface EventsFormData {
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
}

export interface EventsFormProps {
  model: EventsFormData;
  onModelUpdated?: (data: EventsFormData) => void;
}

export function EventsForm({ model }: EventsFormProps) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input
          id="title"
          name="title"
          type="text"
          defaultValue={model.title}
          className={styles.input}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="description">Description</InputLabel>
        <Input
          id="description"
          name="description"
          type="text"
          defaultValue={model.description}
          className={styles.input}
        />
      </FormControl>
      <div className="flex gap-4">
        <FormControl className="w-1/2">
          <InputLabel htmlFor="startAt">Start At</InputLabel>
          <Input
            id="startAt"
            name="startAt"
            type="datetime-local"
            defaultValue={model.startAt.toISOString().slice(0, 16)}
            className={styles.input}
          />
        </FormControl>
        <FormControl className="w-1/2 ml-4">
          <InputLabel htmlFor="endAt">End At</InputLabel>
          <Input
            id="endAt"
            name="endAt"
            type="datetime-local"
            defaultValue={model.endAt.toISOString().slice(0, 16)}
            className={styles.input}
          />
        </FormControl>
      </div>
    </>
  );
}

export default EventsForm;
