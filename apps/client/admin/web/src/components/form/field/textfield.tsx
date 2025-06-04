import TextFieldBase from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

export default function TextField({
  name,
  label,
  placeholder = '',
  type = 'text',
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextFieldBase
          label={label}
          placeholder={placeholder}
          type={type}
          value={field.value}
          onChange={(event) => field.onChange(event.target.value)}
          error={!!fieldState.error}
        />
      )}
    />
  );
}
