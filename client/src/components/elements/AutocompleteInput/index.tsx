import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';

type AutocompleteInputProps = {
  options: { label: string }[];
  label: string;
  size?: 'small' | 'medium';
  required: boolean;
  error: boolean;
  helperText: string;
} & Omit<AutocompleteProps<{ label: string }, false, false, false>, 'renderInput'>;

export const AutocompleteInput = ({
  size = 'small',
  label,
  options = [],
  error,
  helperText,
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
          helperText={helperText}
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
