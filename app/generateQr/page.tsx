"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { set } from "react-hook-form";

export default function GenerateQr() {
  const [chasis, setChasis] = useState("");
  const [qrValue, setQrValue] = useState<string>("");
  const [qrBase64, setQrBase64] = useState<string>("");

  const vehicleData = {
    make: "Volvo",
    model: "XC90",
    year: 2021,
    color: "Black",
    engine: "",
    transmission: "Automatic",
  };

  const generateQRCode = () => {
    const qrData = {
      chasis: chasis,
      ...vehicleData,
    };
    const qrString = JSON.stringify(qrData);
    setQrValue(qrString);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChasis(event.target.value);
  };

  const handleSave = async () => {
    // Ensure QR is generated
    if (!qrValue) {
      alert("Please generate a QR Code first.");
      return;
    }

    // Convert QR to Base64
    const canvas = document.getElementById("qr-canvas") as HTMLCanvasElement;
    if (canvas) {
      const base64Image = canvas.toDataURL("image/png");
      setQrBase64(base64Image);

      // Send POST request with base64 data
      const response = await fetch(
        "https://apprest3.onrender.com/api/automovil",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chasis: chasis,
            codigo_qr: base64Image,
          }),
        }
      );

      if (response.ok) {
        alert("QR Code saved successfully!");
      } else {
        alert("Failed to save QR Code.");
      }
    } else {
      alert("Failed to get QR Code canvas.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1>Generate QR</h1>
      <Input
        value={chasis}
        placeholder="Enter chasis number"
        type="text"
        onChange={handleInputChange}
        className="mb-4"
      />
      <Button onClick={generateQRCode} className="mb-4">
        Generate QR
      </Button>
      {qrValue && (
        <>
          <QRCodeCanvas
            id="qr-canvas"
            value={qrValue}
            size={200}
            style={{ display: "block" }} // Make sure QR is visible
          />
          <Button onClick={handleSave} className="mt-4">
            Save QR
          </Button>
        </>
      )}
    </div>
  );
}
