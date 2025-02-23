import { useState } from 'react';
import { InputWithLabel, AutocompleteInput, SubmitButton } from '../../components';
import { useGetCategories } from '../../hooks';
import { mapToAutocompleteOptions } from '../../utils';
import './AddNewProduct.css';

type AddNewProductProps = {
  barcode?: number;
};

export const AddNewProduct = ({ barcode }: AddNewProductProps) => {
  const [onSubmit, setOnSubmit] = useState(false);
  const [barcodeInput, setBarcodeInput] = useState(barcode);
  const [productName, setProductName] = useState('');
  const [company, setCompany] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<{ label: string; id: string } | null>(
    null
  );
  const [quantity, setQuantity] = useState<number | ''>('');

  const { categories, categoriesError } = useGetCategories();
  const categoriesOptions = categoriesError
    ? []
    : mapToAutocompleteOptions(categories, 'category_name', 'category_id');

  const handleAddProductClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOnSubmit(true);
  };
  return (
    <div className="newProductPage">
      <div className="newProductTitle">הוספת פריט חדש</div>
      <form noValidate className="newProductFormContainer" onSubmit={handleAddProductClick}>
        <InputWithLabel
          label="ברקוד"
          size="small"
          variant="outlined"
          required={true}
          error={onSubmit && !barcodeInput}
          value={barcodeInput}
          onChange={(e) => setBarcodeInput(Number(e.target.value))}
        ></InputWithLabel>
        <InputWithLabel
          label="שם פריט"
          size="small"
          variant="outlined"
          required={true}
          error={onSubmit && !productName}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        ></InputWithLabel>
        <InputWithLabel
          label="חברה"
          size="small"
          variant="outlined"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></InputWithLabel>
        <AutocompleteInput
          options={categoriesOptions}
          label="קטגוריה"
          size="small"
          required={true}
          error={onSubmit && !selectedCategory}
          value={selectedCategory || { label: '', id: '0' }}
          onChange={(_element, newElement) => {
            newElement && setSelectedCategory({ label: newElement.label, id: newElement.id });
          }}
        ></AutocompleteInput>
        <InputWithLabel
          label="כמות יחידות"
          size="small"
          variant="outlined"
          type="number"
          required={true}
          error={onSubmit && !quantity}
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        ></InputWithLabel>
        <SubmitButton label="הוסף" variant="contained" widthRem={7} type="submit"></SubmitButton>
      </form>
    </div>
  );
};
