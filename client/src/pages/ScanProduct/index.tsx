import { useState } from 'react';
import { BarcodeScanner, RadioButtons, SubmitButton } from '../../components';
import { StockAction } from '../../types';
import './ScanBarcode.css';

export const ScanProduct = () => {
  const [scannedCode, setScannedCode] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [action, setAction] = useState(StockAction.ADD);

  const handleActionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction(event.target.value as StockAction);
  };

  return (
    <div className="scanBarcodePage">
      <div className="scanBarcodeTitle">סריקת ברקוד</div>
      <RadioButtons
        className="actionButtons"
        value={action}
        onChange={handleActionChange}
        buttons={[
          { label: 'הוספה', value: StockAction.ADD },
          { label: 'הורדה', value: StockAction.REMOVE },
        ]}
      />
      <SubmitButton
        label={scanning ? 'הפסק סריקה' : 'התחל סריקה'}
        variant="contained"
        onClick={() => {
          setScanning(!scanning);
        }}
      />
      <BarcodeScanner onScan={setScannedCode} scanning={scanning} />
      {scannedCode && (
        <div>
          <h2>הקוד שנסרק:</h2>
          <p>{scannedCode}</p>
          <button onClick={() => setScannedCode(null)}>סריקה חוזרת</button>
        </div>
      )}
    </div>
  );
};
