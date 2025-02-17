import { InputWithLabel, AutocompleteInput, SubmitButton } from '../../components/elements';
import './AddNewProduct.css';

type AddNewProductProps = {
  barcode?: number;
};

const catagoryOptions = [
  { label: 'אורז לבן ארוך' },
  { label: 'אורז לבן עגול' },
  { label: 'עדשים שחרות' },
  { label: 'עדשים כתומות' },
  { label: 'טונה' },
];

export const AddNewProduct = ({ barcode }: AddNewProductProps) => {
  return (
    <div className="newProductPage">
      <div className="newProductTitle">הוספת פריט חדש</div>
      <form className="newProductFormContainer">
        <InputWithLabel
          defaultValue={barcode}
          label="ברקוד"
          size="small"
          variant="outlined"
          required={true}
        ></InputWithLabel>
        <InputWithLabel
          label="שם פריט"
          size="small"
          variant="outlined"
          required={true}
        ></InputWithLabel>
        <InputWithLabel label="חברה" size="small" variant="outlined"></InputWithLabel>
        <AutocompleteInput
          options={catagoryOptions}
          label="קטגוריה"
          size="small"
          variant="outlined"
          required={true}
        ></AutocompleteInput>
        <InputWithLabel
          label="כמות יחידות"
          size="small"
          variant="outlined"
          type="number"
          required={true}
        ></InputWithLabel>
        <SubmitButton label="הוסף" variant="contained" widthRem={7}></SubmitButton>
      </form>
    </div>
  );
};
