import { InputWithLabel } from '../../components/elements';

export const AddNewCategory = () => {
  return (
    <div className="newCategoryContainer">
      <div className="newCategoryTitle">הוספת קטגוריה חדשה</div>
      <InputWithLabel name="categoryNameInput" placeHolder="הכנס שם קטגוריה" title="שם" />
      <input className="unitTypeInput" placeholder="בחר סוג יחידה"></input>
      <br />
      <input className="reorderQuantityLevel" placeholder="הכנס כמות מינימלית"></input>
      <br />
      <input className="unitTypeInput" placeholder="הכנס כמות יחידות מינימלית"></input>
      <br />
      <button>הוסף</button>
    </div>
  );
};
