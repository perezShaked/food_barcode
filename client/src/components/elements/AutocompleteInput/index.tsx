import { Autocomplete, TextField } from '@mui/material';

type AutocompleteInputProps = {
  options: { label: string }[];
  label: string;
  size: 'small' | 'medium';
  variant: 'outlined' | 'standard' | 'filled';
};

export const AutocompleteInput = ({ size, options, label, variant }: AutocompleteInputProps) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          size={size}
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
