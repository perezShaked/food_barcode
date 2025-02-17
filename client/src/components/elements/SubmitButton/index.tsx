import { Button, ButtonProps } from '@mui/material';

type SubmitButtonProps = {
  label: string;
  widthRem?: number;
} & ButtonProps;

export const SubmitButton = ({ variant, onClick, label }: SubmitButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: '#89b9d7',
        /*         width: widthRem + 'rem',
         */ borderRadius: '20px',
        fontSize: '16px',
      }}
    >
      {label}
    </Button>
  );
};
