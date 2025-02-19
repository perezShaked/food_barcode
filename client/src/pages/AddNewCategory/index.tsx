import { useState } from 'react';
import { InputWithLabel, AutocompleteInput, SubmitButton } from '../../components/elements';
import { useUnits } from '../../hooks';
import { mapToAutocompleteOptions } from '../../utils';
import './AddNewCategory.css';

export const AddNewCategory = () => {
  const [onSubmit, setOnSubmit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string>('');
  const [categoryName, setCategoryName] = useState('');
  const [reorderQuantityLevel, setReorderQuantityLevel] = useState<number>();
  const [reorderCountLevel, setReorderCountLevel] = useState<number>();

  const { units, unitsError } = useUnits();
  const unitOptions = unitsError ? [] : mapToAutocompleteOptions(units, 'unit_name');

  const handleAddCategoryClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOnSubmit(true);
    console.log(event.target);
  };

  return (
    <div className="newCategoryPage">
      <div className="newCategoryTitle">הוספת קטגוריה חדשה</div>
      <form noValidate className="newCategoryFormContainer" onSubmit={handleAddCategoryClick}>
        <InputWithLabel
          label="שם קטגוריה"
          required={true}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          error={onSubmit && !categoryName}
          helperText={onSubmit && !categoryName ? 'שדה חובה' : ''}
        />
        <AutocompleteInput
          options={unitOptions}
          label="סוג יחידה"
          required={true}
          error={onSubmit && !selectedUnit}
          helperText={onSubmit && !selectedUnit ? 'שדה חובה' : ''}
          value={{ label: selectedUnit }}
          onChange={(_element, newElement) => {
            newElement && setSelectedUnit(newElement.label);
          }}
        />
        <InputWithLabel
          label="כמות מינימלית"
          type="number"
          value={reorderQuantityLevel}
          onChange={(e) => setReorderQuantityLevel(Number(e.target.value))}
        />
        <InputWithLabel
          label="כמות יחידות מינימלית"
          type="number"
          value={reorderCountLevel}
          onChange={(e) => setReorderCountLevel(Number(e.target.value))}
        />
        <SubmitButton label="הוסף" variant="contained" widthRem={7} type="submit"></SubmitButton>
      </form>
    </div>
  );
};
