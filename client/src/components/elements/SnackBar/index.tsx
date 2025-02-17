import { Slide, Snackbar, Alert } from '@mui/material';

type SnackBarProps = {
  open: boolean;
  message: string;
  severity: 'error' | 'info' | 'success' | 'warning';
};

export const SnackBar = ({ open, message, severity }: SnackBarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      TransitionComponent={Slide}
    >
      <Alert severity={severity} variant="filled" sx={{ width: '17rem' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
