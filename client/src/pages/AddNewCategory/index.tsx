import { useState } from 'react';
import { InputWithLabel, AutocompleteInput, SubmitButton, SnackBar } from '../../components';
import { useGetUnits } from '../../hooks';
import { mapToAutocompleteOptions } from '../../utils';
import { addNewCategoryAPI } from '../../services';
import './AddNewCategory.css';

export const AddNewCategory = () => {
  const [onSubmit, setOnSubmit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<{ label: string; id: string } | null>(null);
  const [categoryName, setCategoryName] = useState('');
  const [reorderQuantityLevel, setReorderQuantityLevel] = useState<number | ''>('');
  const [reorderCountLevel, setReorderCountLevel] = useState<number | ''>('');
  const [success, setSuccess] = useState(false);
  const [error, SetError] = useState<string | null>(null);

  const { units, unitsError } = useGetUnits();
  const unitOptions = unitsError ? [] : mapToAutocompleteOptions(units, 'unit_name', 'unit_id');

  const restartNewCategoryFields = () => {
    setCategoryName('');
    setSelectedUnit(null);
    setReorderQuantityLevel('');
    setReorderCountLevel('');
    setOnSubmit(false);
  };

  const handleAddCategoryClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOnSubmit(true);

    if (!selectedUnit || !categoryName) {
      SetError('נא למלא שדות חובה');
      setTimeout(() => {
        SetError(null);
      }, 3000);
      return;
    }

    if (Number(reorderCountLevel) < 0 || Number(reorderQuantityLevel) < 0) {
      SetError('נא למלא מספר חיובי בשדות הכמות');
      setTimeout(() => {
        SetError(null);
      }, 3000);
      return;
    }
    try {
      await addNewCategoryAPI(
        categoryName,
        Number(selectedUnit.id),
        reorderQuantityLevel,
        reorderCountLevel
      );
      setSuccess(true);
      restartNewCategoryFields();
    } catch (error) {
      if (error instanceof Error) {
        SetError(error.message);
      } else {
        SetError('אירעה שגיאה לא ידועה');
      }
    } finally {
      setTimeout(() => {
        setSuccess(false);
        SetError(null);
      }, 3000);
    }
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
        />
        <AutocompleteInput
          options={unitOptions}
          disableClearable
          label="סוג יחידה"
          required={true}
          error={onSubmit && !selectedUnit}
          value={selectedUnit || { label: '', id: '0' }}
          onChange={(_element, newElement) => {
            newElement && setSelectedUnit({ label: newElement.label, id: newElement.id });
          }}
        />
        <InputWithLabel
          label="כמות מינימלית"
          type="number"
          value={reorderQuantityLevel}
          onChange={(e) => setReorderQuantityLevel(Number(e.target.value))}
          error={onSubmit && Number(reorderQuantityLevel) < 0}
        />
        <InputWithLabel
          label="כמות יחידות מינימלית"
          type="number"
          value={reorderCountLevel}
          onChange={(e) => setReorderCountLevel(Number(e.target.value))}
          error={onSubmit && Number(reorderCountLevel) < 0}
        />
        <SubmitButton label="הוסף" variant="contained" widthRem={7} type="submit"></SubmitButton>
        <SnackBar message="הקטגריה נוספה בהצלחה" open={success} severity="success" />
        <SnackBar message={error ?? ''} open={Boolean(error)} severity="error" />
      </form>
    </div>
  );
};
