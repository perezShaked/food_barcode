import { InputWithLabel, AutocompleteInput, SubmitButton } from '../../components/elements';
import { useUnits } from '../../hooks';
import { mapToAutocompleteOptions } from '../../utils';
import './AddNewCategory.css';

export const AddNewCategory = () => {
  const { units, unitsError } = useUnits();
  const unitOptions = unitsError ? [] : mapToAutocompleteOptions(units, 'unit_name');

  return (
    <div className="newCategoryPage">
      <div className="newCategoryTitle">הוספת קטגוריה חדשה</div>
      <form className="newCategoryFormContainer">
        <InputWithLabel
          size="small"
          variant="outlined"
          label="שם קטגוריה"
          type="text"
          required={true}
        />
        <AutocompleteInput
          options={unitOptions}
          size="small"
          variant="outlined"
          label="סוג יחידה"
          required={true}
        />
        <InputWithLabel size="small" variant="outlined" label="כמות מינימלית" type="number" />
        <InputWithLabel
          size="small"
          variant="outlined"
          label="כמות יחידות מינימלית"
          type="number"
        />
        <SubmitButton label="הוסף" variant="contained" widthRem={7}></SubmitButton>
      </form>
    </div>
  );
};
