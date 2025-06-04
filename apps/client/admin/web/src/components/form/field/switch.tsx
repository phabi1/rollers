import SwitchBase from '@mui/material/Switch';
import { Controller, useFormContext } from 'react-hook-form';

export default function Switch({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex items-center">
          <SwitchBase
            checked={field.value}
            onChange={(event) => field.onChange(event.target.checked)}
          />
          <span className="ml-2">{label}</span>
        </div>
      )}
    />
  );
}