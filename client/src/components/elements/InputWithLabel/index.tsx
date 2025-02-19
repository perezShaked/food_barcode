import { TextField, TextFieldProps } from '@mui/material';

export const InputWithLabel = ({ size = 'small', ...rest }: TextFieldProps) => {
  return (
    <TextField
      {...rest}
      size={size}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        },
      }}
    />
  );
};
