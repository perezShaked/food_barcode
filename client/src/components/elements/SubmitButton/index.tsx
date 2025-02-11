import { Button } from '@mui/material';

type SubmitButtonProps = {
  label: string;
  variant: 'outlined' | 'text' | 'contained';
};

export const SubmitButton = ({ label, variant }: SubmitButtonProps) => {
  return (
    <Button
      variant={variant}
      sx={{ backgroundColor: '#89b9d7', width: '7rem', borderRadius: '20px', fontSize: '16px' }}
    >
      {label}
    </Button>
  );
};
