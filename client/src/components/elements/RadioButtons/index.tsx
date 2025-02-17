import { RadioGroup, FormControlLabel, Radio, RadioGroupProps } from '@mui/material';

type RadioButtonProps = {
  buttons: { label: string; value: string }[];
  className: string;
} & RadioGroupProps;

export const RadioButtons = ({ buttons, className, value, onChange }: RadioButtonProps) => {
  return (
    <RadioGroup row className={className} value={value} onChange={onChange}>
      {buttons.map((element) => {
        return (
          <FormControlLabel
            key={element.label}
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#89b9d7',
                  },
                }}
              />
            }
            label={element.label}
            value={element.value}
          />
        );
      })}
    </RadioGroup>
  );
};
