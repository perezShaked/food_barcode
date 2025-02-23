export const mapToAutocompleteOptions = (
  data: any[],
  labelFieldName: string,
  idFieldName: string
) => {
  const autocompleteOptions = data.map((element) => {
    return { label: element[labelFieldName], id: element[idFieldName] };
  });
  return autocompleteOptions;
};
