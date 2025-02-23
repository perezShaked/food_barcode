import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';

type AutocompleteInputProps = {
  label: string;
  size?: 'small' | 'medium';
  required: boolean;
  error: boolean;
} & Omit<AutocompleteProps<{ label: string; id: string }, false, true, false>, 'renderInput'>;

export const AutocompleteInput = ({
  size = 'small',
  label,
  options = [],
  error,
  required,
  ...rest
}: AutocompleteInputProps) => {
  return (
    <Autocomplete
      {...rest}
      options={options}
      noOptionsText="אין אפשרויות"
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size={size}
          error={error}
          required={required}
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
