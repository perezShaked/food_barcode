import './InputWithLabel.css';

type inputWithLapelProps = {
  name: string;
  placeHolder: string;
  title: string;
};

export const InputWithLabel = ({ name, placeHolder, title }: inputWithLapelProps) => {
  return (
    <div className="inputWithTitle">
      <div>{title}</div>
      <input placeholder={placeHolder}></input>
    </div>
  );
};
