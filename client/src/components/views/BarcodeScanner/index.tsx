import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

export const BarcodeScanner: React.FC<{ onScan: (code: string) => void }> = ({ onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanning, setScanning] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!scanning) return;

    console.log('🔍 Initializing scanner...');

    const codeReader = new BrowserMultiFormatReader();

    codeReader
      .decodeFromVideoDevice(null, videoRef.current!, (result, err) => {
        if (result) {
          console.log('✅ Scanned Code:', result.getText());
          setScanned(true);
          setError(null);
          onScan(result.getText());
          setTimeout(() => setScanned(false), 2000);
          setScanning(false);
          codeReader.reset(); // מפסיק את הסריקה לאחר זיהוי
        }
        if (err && !(err instanceof NotFoundException)) {
          console.error('⚠️ Scanning error:', err);
          setError('Error scanning barcode. Try again.');
        }
      })
      .catch((err) => {
        console.error('❌ Scanner initialization failed:', err);
        setError('Failed to access camera.');
      });

    return () => {
      console.log('🛑 Stopping scanner...');
      codeReader.reset();
    };
  }, [scanning, onScan]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>
        {scanning ? '🔍 Scanning...' : scanned ? '✅ Barcode Scanned!' : 'Press to Scan Again'}
      </h2>

      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          border: scanned ? '4px solid green' : '4px solid red',
          borderRadius: '10px',
          padding: '5px',
          transition: 'border-color 0.3s ease',
        }}
      >
        <video ref={videoRef} style={{ width: '100%' }} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!scanning && <button onClick={() => setScanning(true)}>Restart Scan</button>}
    </div>
  );
};

export default BarcodeScanner;
