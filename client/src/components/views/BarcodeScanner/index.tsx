import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { SnackBar } from '../../elements';
import './BarcodeScanner.css';

type BarcodeScannerProps = {
  onScan: (code: string) => void;
  scanning: boolean;
};

export const BarcodeScanner = ({ onScan, scanning }: BarcodeScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanned, setScanned] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (scanned) return;

    const codeReader = new BrowserMultiFormatReader();

    if (!scanning) {
      codeReader.reset();
      return;
    }

    codeReader
      .decodeFromVideoDevice(null, videoRef.current, (result, err) => {
        if (result) {
          setScanned(true);
          setError(null);
          onScan(result.getText());
          setTimeout(() => setScanned(false), 2000);
        }
        if (err && !(err instanceof NotFoundException)) {
          setError('שגיאה בסריקה-נסה שנית');
        }
      })
      .catch(() => {
        setError('אין גישה למצלמה');
      });

    return () => {
      codeReader.reset();
    };
  }, [scanning, onScan, scanned]);

  return (
    <div>
      {scanning && (
        <div className="barcodeScannerContainer">
          <video className="videoWindow" ref={videoRef} />

          {scanned && (
            <SnackBar open={true} message="הקוד נסרק בהצלחה" severity="success"></SnackBar>
          )}

          {error && <SnackBar open={true} message={error} severity="error"></SnackBar>}
        </div>
      )}
    </div>
  );
};
