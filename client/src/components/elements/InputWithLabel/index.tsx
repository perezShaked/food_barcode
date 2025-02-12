import { TextField } from '@mui/material';

type inputWithLapelProps = {
  label: string;
  size: 'small' | 'medium';
  variant: 'outlined' | 'standard' | 'filled';
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: any;
  required?: boolean;
};

export const InputWithLabel = ({
  label,
  size,
  variant,
  type,
  defaultValue,
  required,
}: inputWithLapelProps) => {
  return (
    <TextField
      size={size}
      label={label}
      variant={variant}
      type={type}
      defaultValue={defaultValue}
      required={required || false}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        },
      }}
    />
  );
};
