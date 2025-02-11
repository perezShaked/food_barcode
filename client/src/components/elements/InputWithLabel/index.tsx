import { TextField } from '@mui/material';

type inputWithLapelProps = {
  label: string;
  size: 'small' | 'medium';
  variant: 'outlined' | 'standard' | 'filled';
  type?: React.HTMLInputTypeAttribute;
};

export const InputWithLabel = ({ label, size, variant, type }: inputWithLapelProps) => {
  return (
    <TextField
      size={size}
      label={label}
      variant={variant}
      type={type}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        },
      }}
    />
  );
};
