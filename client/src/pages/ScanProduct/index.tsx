import { useState } from 'react';
import { BarcodeScanner } from '../../components';

export const ScanProduct = () => {
  const [scannedCode, setScannedCode] = useState<string | null>(null);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>📸 Scan a Barcode</h1>
      <BarcodeScanner onScan={setScannedCode} />

      {scannedCode && (
        <div>
          <h2>✅ Scanned Code:</h2>
          <p>{scannedCode}</p>
          <button onClick={() => setScannedCode(null)}>Scan Again</button>
        </div>
      )}
    </div>
  );
};
