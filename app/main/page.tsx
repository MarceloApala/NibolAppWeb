"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <div>

      <div className="flex  w-screen  mt-10 justify-center">
        <div className="flex flex-col space-y-4 items-center">
        <p><strong>Control Inventario con QR </strong></p>

          <Button
            onClick={() => {
              router.push("/generateQr");
            }}
            className="w-full max-w-xs" // Asegura que el botón no sea más ancho de lo necesario
          >
            Generar Qr
          </Button>
          <Button
            onClick={() => {
              router.push("/readQr");
            }}
            className="w-full max-w-xs"
          >
            Ver Qr
          </Button>
          <Button
            onClick={() => {
              router.push("/listQr");
            }}
            className="w-full max-w-xs"
          >
            Lista de Qr
          </Button>
          <Button
            onClick={() => {
              router.push("/cameraCapture");
            }}
            className="w-full max-w-xs"
          >
            Qr desde cámara
          </Button>
          <Button
            onClick={() => {
              router.push("/cameraList");
            }}
            className="w-full max-w-xs"
          >
            Lista de Qr desde cámara
          </Button>
        </div>
      </div>
    </div>
  );
}
