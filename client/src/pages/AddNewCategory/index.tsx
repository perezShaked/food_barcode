import { InputWithLabel, AutocompleteInput, SubmitButton } from '../../components/elements';
import './AddNewCategory.css';

const unitOptions = [{ label: 'מל' }, { label: 'גרם' }, { label: 'מארז' }, { label: 'קופסה' }];

export const AddNewCategory = () => {
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
        <SubmitButton label="הוסף" variant="contained"></SubmitButton>
      </form>
    </div>
  );
};
