export const mapToAutocompleteOptions = (data: any[], labelFieldName: string) => {
  const autocompleteOptions = data.map((element) => {
    return { label: element[labelFieldName] };
  });
  return autocompleteOptions;
};
