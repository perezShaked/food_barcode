import { Autocomplete, TextField } from '@mui/material';

type AutocompleteInputProps = {
  options: { label: string }[];
  label: string;
  size: 'small' | 'medium';
  variant: 'outlined' | 'standard' | 'filled';
  required?: boolean;
};

export const AutocompleteInput = ({
  size,
  options,
  label,
  variant,
  required,
}: AutocompleteInputProps) => {
  return (
    <Autocomplete
      options={options}
      noOptionsText="אין אפשרויות"
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          size={size}
          required={required || false}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            },
          }}
        />
      )}
    />
  );
};
