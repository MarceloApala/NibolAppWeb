'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'environment',
};

const QRCodeScanner: React.FC = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const webcamRef = useRef<Webcam | null>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (context) {
            canvas.height = img.height;
            canvas.width = img.width;
            context.drawImage(img, 0, 0, img.width, img.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, canvas.width, canvas.height, {
              inversionAttempts: 'dontInvert',
            });
            if (code) {
              setQrCode(code.data);
            } else {
              setQrCode('No QR code detected');
            }
          }
        };
      }
    }
  }, [webcamRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 1000); // Scan every second

    return () => clearInterval(interval);
  }, [capture]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <div className="mt-4">
        <p>{qrCode ? `QR Code Data: ${qrCode}` : 'No QR code detected'}</p>
      </div>
    </div>
  );
};

export default QRCodeScanner;
